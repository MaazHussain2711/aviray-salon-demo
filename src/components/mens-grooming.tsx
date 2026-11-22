import Image from 'next/image';
import { BookingButton } from './appointment-provider';

const groomingServices = [
  { number: '01', title: 'Haircuts & styling', description: 'A clean fade, a textured crop, or your signature cut. Find a shape that works with your hair and your everyday.' },
  { number: '02', title: 'Beard shaping & grooming', description: 'Defined lines, a tidy trim, and a balanced shape. A considered finish for your beard and moustache.' },
  { number: '03', title: 'Hair colour & grey blending', description: 'From a subtle refresh to a different look. Discuss colour, coverage, and the right finish for you.' },
  { number: '04', title: 'Hair & scalp care', description: 'Give your hair a little attention. Ask the team about care options suited to your hair and scalp.' },
];

export function MensGrooming() {
  return <section className="mens-grooming section-pad" id="mens-grooming" aria-labelledby="mens-title">
    <div className="section-heading"><div><p className="eyebrow">GOOD GROOMING. YOUR OWN STYLE.</p><h2 id="mens-title">A sharper look.<br /><em>Still completely you.</em></h2></div><p>Men’s hair and grooming,<br />with a little AVIRAY care.</p></div>
    <div className="grooming-layout">
      <div className="grooming-photos">
        <figure className="grooming-photo grooming-photo-main"><Image src="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=1000&q=85" alt="Barber carefully styling a man's haircut" width={900} height={1100} sizes="(max-width: 760px) 70vw, 35vw" /><figcaption>THE EVERYDAY, REFINED.</figcaption></figure>
        <figure className="grooming-photo grooming-photo-detail"><Image src="https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&w=600&q=85" alt="Professional grooming tools with scissors, clippers, and a comb" width={600} height={750} sizes="(max-width: 760px) 40vw, 20vw" /><figcaption>YOUR STYLE. YOUR FINISH.</figcaption></figure>
      </div>
      <div className="grooming-menu">{groomingServices.map(service => <article key={service.number}><span className="grooming-number">{service.number}</span><div><h3>{service.title}</h3><p>{service.description}</p></div></article>)}<BookingButton className="button" service="Men's grooming">Enquire about men’s grooming <span aria-hidden="true">↗</span></BookingButton><p className="grooming-note">Ask the salon to confirm the service, price, and appointment availability.</p></div>
    </div>
    <p className="image-note">Style inspiration. Images are not examples of AVIRAY client work.</p>
  </section>;
}
