import { AppointmentProvider } from '@/components/appointment-provider';
import { Header } from '@/components/header';
import { Hero } from '@/components/hero';
import { About } from '@/components/about';
import { Services } from '@/components/services';
import { Ritual } from '@/components/ritual';
import { Gallery } from '@/components/gallery';
import { Invitation } from '@/components/invitation';
import { Visit } from '@/components/visit';
import { FAQ } from '@/components/faq';
import { Footer } from '@/components/footer';
import { Announcement, ServiceRibbon, FloatingCall } from '@/components/decoration';
import { MotionEnhancements } from '@/components/motion-enhancements';
import { BusinessSchema } from '@/components/business-schema';
import { MensGrooming } from '@/components/mens-grooming';

export default function HomePage() {
  return <AppointmentProvider>
    <MotionEnhancements /><BusinessSchema />
    <a className="skip" href="#main">Skip to content</a>
    <Announcement /><Header />
    <main id="main"><Hero /><ServiceRibbon /><About /><Services /><MensGrooming /><Ritual /><Gallery /><Invitation /><Visit /><FAQ /></main>
    <Footer /><FloatingCall />
  </AppointmentProvider>;
}
