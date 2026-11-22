import Image from "next/image";
import { asset } from "@/lib/site";
import { BookingButton } from "./appointment-provider";

export function Hero() { return (<section className="hero" id="home" aria-labelledby="hero-title">
<div className="hero-copy"><p className="eyebrow"><span className="tiny-flower" aria-hidden="true">✳</span> HAIR. SKIN. NAILS. YOU.</p><h1 id="hero-title">A little time.<br />A whole<br /><em>new you.</em></h1><p className="hero-description">Your style. Your kind of beautiful.<br />A space to unwind, refresh, and shine in your own way.</p><div className="hero-actions"><BookingButton className="button light">Find your new look <span aria-hidden="true">↗</span></BookingButton><a className="text-link" href="#services">Explore our services <span aria-hidden="true">↓</span></a></div><div className="hero-bottom"><span>UNISEX SALON · BENGALURU</span><span>BEAUTY, IN YOUR OWN LIGHT.</span></div></div>
<div className="hero-art"><Image className="hero-image" src={asset("/assets/hero-unisex.webp")} width={1122} height={1402} preload alt="Editorial portrait of a man and a woman with styled hair, representing AVIRAY unisex salon" sizes="(max-width: 760px) 100vw, 50vw" /><div className="image-shade"></div><span className="vertical-caption">THE AVIRAY STATE OF MIND</span><div className="roundel" aria-hidden="true"><span>FEEL GOOD</span><b>✳</b><span>BE YOURSELF</span></div><div className="photo-caption"><span>01 / THE EVERYDAY GLOW</span><a href="#inspiration" aria-label="Explore the style edit">↗</a></div></div>
</section>); }
