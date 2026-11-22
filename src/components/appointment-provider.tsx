"use client";

import { createContext, useContext, useState, type ButtonHTMLAttributes, type FormEvent, type ReactNode } from 'react';
import { Modal } from './modal';
import { salon } from '@/lib/site';

type AppointmentContextValue = { book: (service?: string) => void };
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
export function AppointmentProvider({ children }: { children: ReactNode }) {
  const [active, setActive] = useState<'booking' | null>(null);
  const [service, setService] = useState('');
  const [session, setSession] = useState(0);
  const [minDate, setMinDate] = useState('');
  const [whatsappURL, setWhatsappURL] = useState('');
  function book(chosenService = '') {
    const now = new Date();
    setMinDate(`${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`);
    setSession(value => value + 1);
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
  return <AppointmentContext.Provider value={{ book }}>
    {children}
    <Modal id="booking-dialog" open={active === 'booking'} onClose={() => setActive(null)} labelledBy="booking-title">
      <p className="eyebrow">A LITTLE TIME FOR YOU</p><h2 id="booking-title">Your next <em>beautiful moment.</em></h2>
      <p className="dialog-intro">Tell us what you have in mind. The salon will confirm availability and pricing with you.</p>
      <form key={session} onSubmit={prepareEnquiry} onChange={() => setWhatsappURL('')}>
        <label htmlFor="enquiry-name">Your name<input id="enquiry-name" name="name" autoComplete="given-name" maxLength={60} pattern=".*\S.*" placeholder="What should we call you?" required /></label>
        <label htmlFor="enquiry-service">Your service<select id="enquiry-service" aria-label="Your service" name="service" value={service} onChange={e => setService(e.target.value)} required><option value="">Select a service</option>{salon.services.map(item => <option key={item}>{item}</option>)}</select></label>
        <label htmlFor="enquiry-date">Preferred date<input id="enquiry-date" name="date" type="date" min={minDate} required /></label>
        <label htmlFor="enquiry-note">Anything you’d like us to know? (optional)<textarea id="enquiry-note" name="note" maxLength={500} rows={2} placeholder="Your preferred time, look, or occasion…" /></label>
        <p className="form-note">Prepare your enquiry, then review it in WhatsApp. Nothing is sent automatically. You can also call the salon to discuss your appointment.</p>
        <button type="submit" className="button">Prepare my enquiry <span aria-hidden="true">↗</span></button>
        {whatsappURL && <div aria-live="polite"><p className="form-note">Your enquiry is ready. Continuing shares the entered details with WhatsApp.</p><a className="button" href={whatsappURL} target="_blank" rel="noopener noreferrer">Continue to WhatsApp <span aria-hidden="true">↗</span></a></div>}
        <a className="alternative-call" href={salon.telephone}>Prefer to call? {salon.phone}</a><p className="form-note">An enquiry is not a confirmed booking.</p>
      </form>
    </Modal>
  </AppointmentContext.Provider>;
}
