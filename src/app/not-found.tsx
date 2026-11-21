import Link from 'next/link';

export default function NotFound() {
  return <main className="section-pad"><p className="eyebrow">AVIRAY · 404</p>
    <h1>A little detour.</h1><p>We couldn’t find that page. Your next beautiful moment is back at home.</p>
    <Link className="button" href="/">Back to AVIRAY <span aria-hidden="true">↗</span></Link>
  </main>;
}
