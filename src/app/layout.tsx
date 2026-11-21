import type { Metadata, Viewport } from 'next';
import { asset } from '@/lib/site';
import './globals.css';

export const metadata: Metadata = {
  title: 'AVIRAY — A little time. A whole new you.',
  description: 'Explore hair, skin, nails and bridal care at AVIRAY Unisex Salon in Raghuvanahalli, Bengaluru.',
  robots: { index: false, follow: false },
  icons: { icon: asset('/assets/favicon.png') },
};
export const viewport: Viewport = { themeColor: '#292326' };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><head>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
    <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400;1,500&family=DM+Sans:wght@400;450;500;600;700&display=swap" rel="stylesheet" />
  </head><body>{children}</body></html>;
}
