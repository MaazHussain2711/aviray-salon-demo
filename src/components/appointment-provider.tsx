"use client";

import { createContext, useContext, useState, type ButtonHTMLAttributes, type FormEvent, type ReactNode } from 'react';
import { Modal } from './modal';
import { salon } from '@/lib/site';
import { privacyParagraphs } from '@/lib/privacy';

type AppointmentContextValue = { book: (service?: string) => void; privacy: () => void };
const AppointmentContext = createContext<AppointmentContextValue | null>(null);
function useAppointment() {
  const context = useContext(AppointmentContext);
  if (!context) throw new Error('Appointment controls must be inside AppointmentProvider');
  return context;
}
export function BookingButton({ service, children, onClick, ...props }: ButtonHTMLAttributes<HTMLButtonElement> & { service?: string }) {
  const { book } = useAppointment();
  return <button {...props} type="button" onClick={event => { onClick?.(event); if (!event.defaultPrevented) book(service); }}>{children}</button>;
}
export function PrivacyButton(props: ButtonHTMLAttributes<HTMLButtonElement>) {
  const { privacy } = useAppointment();
  return <button {...props} type="button" onClick={privacy} />;
}
export function AppointmentProvider({ children }: { children: ReactNode }) {
  const [active, setActive] = useState<'booking' | 'privacy' | null>(null);
  const [service, setService] = useState('');
  const [minDate, setMinDate] = useState('');
  const [whatsappURL, setWhatsappURL] = useState('');
  function book(chosenService = '') {
    const now = new Date();
    setMinDate(`${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`);
    setService(chosenService);
    setWhatsappURL('');
    setActive('booking');
  }
  function prepareEnquiry(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.reportValidity()) return;
    const values = new FormData(form);
    const name = String(values.get('name') || '').trim();
    if (!name) { form.elements.namedItem('name') instanceof HTMLInputElement && (form.elements.namedItem('name') as HTMLInputElement).focus(); return; }
    const note = String(values.get('note') || '').trim();
    const message = `Hello AVIRAY! I'd like to enquire about an appointment.\n\nName: ${name}\nService: ${service}\nPreferred date: ${values.get('date')}\n${note ? `Note: ${note}\n` : ''}\nPlease confirm availability and pricing. Thank you!`;
    setWhatsappURL(`https://wa.me/${salon.whatsapp}?text=${encodeURIComponent(message)}`);
  }
  return <AppointmentContext.Provider value={{ book, privacy: () => setActive('privacy') }}>
    {children}
    <Modal id="booking-dialog" open={active === 'booking'} onClose={() => setActive(null)} labelledBy="booking-title">
      <p className="eyebrow">A LITTLE TIME FOR YOU</p><h2 id="booking-title">Your next <em>beautiful moment.</em></h2>
      <p className="dialog-intro">Tell us what you have in mind. The salon will confirm availability and pricing with you.</p>
      <form onSubmit={prepareEnquiry} onChange={() => setWhatsappURL('')}>
        <label>Your name<input name="name" autoComplete="given-name" maxLength={60} pattern=".*\S.*" placeholder="What should we call you?" required /></label>
        <label>Your service<select name="service" value={service} onChange={e => setService(e.target.value)} required><option value="">Choose your you-time</option>{salon.services.map(item => <option key={item}>{item}</option>)}</select></label>
        <label>Preferred date<input name="date" type="date" min={minDate} required /></label>
        <label>Anything you’d like us to know? (optional)<textarea name="note" maxLength={500} rows={2} placeholder="Your preferred time, look, or occasion…" /></label>
        <p className="form-note">Prepare your enquiry, then review it in WhatsApp. Nothing is sent automatically. WhatsApp availability on this listed number awaits confirmation.</p>
        <button type="submit" className="button">Prepare my enquiry <span aria-hidden="true">↗</span></button>
        {whatsappURL && <div aria-live="polite"><p className="form-note">Your enquiry is ready. Continuing shares the entered details with WhatsApp.</p><a className="button" href={whatsappURL} target="_blank" rel="noopener noreferrer">Continue to WhatsApp <span aria-hidden="true">↗</span></a></div>}
        <a className="alternative-call" href={salon.telephone}>Prefer to call? {salon.phone}</a><p className="form-note">An enquiry is not a confirmed booking.</p>
      </form>
    </Modal>
    <Modal id="privacy-dialog" open={active === 'privacy'} onClose={() => setActive(null)} labelledBy="privacy-title">
      <p className="eyebrow">GOOD TO KNOW</p><h2 id="privacy-title">Privacy & demo information</h2>{privacyParagraphs.map(text => <p key={text}>{text}</p>)}
    </Modal>
  </AppointmentContext.Provider>;
}
