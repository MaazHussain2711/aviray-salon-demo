"use client";

import Image from 'next/image';
import { useState } from 'react';
import { gallery, type GalleryItem } from '@/lib/gallery';
import { Modal } from './modal';
import { BookingButton } from './appointment-provider';

const filters = [{ id: 'all', title: 'All inspiration' }, { id: 'hair', title: 'Hair & colour' }, { id: 'beauty', title: 'Beauty & details' }, { id: 'grooming', title: 'Grooming' }];
export function Gallery() {
  const [filter, setFilter] = useState('all');
  const [selected, setSelected] = useState<GalleryItem | null>(null);
  return <section className="inspiration section-pad" id="inspiration" aria-labelledby="edit-title">
    <div className="section-heading"><div><p className="eyebrow">THE STYLE EDIT</p><h2 id="edit-title">A little <em>inspiration.</em></h2></div><p>Save a mood. Start a conversation.<br />Your next look begins here.</p></div>
    <div className="filters" role="group" aria-label="Filter style inspiration">{filters.map(item => <button key={item.id} className={filter === item.id ? 'active' : ''} aria-pressed={filter === item.id} onClick={() => setFilter(item.id)}>{item.title}</button>)}</div>
    <div className={`edit-grid ${filter !== 'all' ? 'filtered' : ''}`} aria-live="polite">{gallery.filter(item => filter === 'all' || item.category === filter).map(item => <button key={item.src} className={`edit-card ${item.tall ? 'tall' : ''}`} onClick={() => setSelected(item)} aria-label={`View ${item.title}`}>
      <Image src={item.src} alt={item.alt} width={700} height={1000} sizes="(max-width: 760px) 50vw, 33vw" />
      <span>{item.title} <b aria-hidden="true">↗</b></span>
    </button>)}</div>
    <p className="image-note">Editorial imagery for this demo. Inspiration images are not examples of AVIRAY client work.</p>
    <Modal id="lightbox" open={selected !== null} onClose={() => setSelected(null)} labelledBy="lightbox-title">
      {selected && <><Image src={selected.src} alt={selected.alt} width={900} height={1100} sizes="90vw" /><h2 id="lightbox-title">{selected.caption}</h2><p>Editorial inspiration · Not AVIRAY client work</p><BookingButton className="button" onClick={() => setSelected(null)}>Enquire about a similar look <span aria-hidden="true">↗</span></BookingButton></>}
    </Modal>
  </section>;
}
