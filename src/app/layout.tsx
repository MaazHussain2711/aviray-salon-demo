import type { Metadata, Viewport } from 'next';
import { asset, siteURL } from '@/lib/site';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL(siteURL + '/'),
  title: { default: 'AVIRAY Unisex Salon | Hair, Beauty & Grooming in Bengaluru', template: '%s | AVIRAY Unisex Salon' },
  description: 'Explore hair, skin, nails and bridal care at AVIRAY Unisex Salon in Raghuvanahalli, Bengaluru.',
  robots: { index: true, follow: true },
  alternates: { canonical: siteURL + '/' },
  openGraph: {
    title: 'AVIRAY Unisex Salon',
    description: 'Hair, beauty and men’s grooming in Raghuvanahalli, Bengaluru. Find your next look at AVIRAY.',
    url: siteURL + '/',
    siteName: 'AVIRAY Unisex Salon',
    locale: 'en_IN',
    type: 'website',
    images: [{ url: siteURL + '/assets/hero-unisex.webp', width: 1122, height: 1402, alt: 'AVIRAY unisex hair and grooming style inspiration' }],
  },
  twitter: { card: 'summary_large_image', title: 'AVIRAY Unisex Salon', images: [siteURL + '/assets/hero-unisex.webp'] },
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
