import type { Metadata } from 'next';
import Link from 'next/link';
import { privacyParagraphs } from '@/lib/privacy';
import { salon, siteURL } from '@/lib/site';

export const metadata: Metadata = { title: 'Privacy Policy', alternates: { canonical: siteURL + '/privacy/' } };

export default function PrivacyPage() {
  return <main className="policy-page section-pad">
    <Link className="text-link dark" href="/">Back to AVIRAY <span aria-hidden="true">↗</span></Link>
    <p className="eyebrow">AVIRAY UNISEX SALON</p><h1>Privacy Policy</h1>
    <p className="policy-date">Last updated: 22 November 2026</p>
    {privacyParagraphs.map(paragraph => <p key={paragraph}>{paragraph}</p>)}
    <h2>Contact us</h2><p>For privacy questions, call <a href={salon.telephone}>{salon.phone}</a>.</p>
    <p>For service availability, opening hours, prices, cancellations, or changes to an appointment, contact the salon directly. An enquiry becomes a booking only after the salon confirms it.</p>
  </main>;
}
