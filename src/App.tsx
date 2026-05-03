import { Toaster } from 'sonner';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from '@/sections/HeroSection';
import ApproachSection from '@/sections/ApproachSection';
import TrackRecordSection from '@/sections/TrackRecordSection';
import PortfolioSection from '@/sections/PortfolioSection';
import ContactSection from '@/sections/ContactSection';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-ink">
      <Header />
      <main>
        <HeroSection />
        <ApproachSection />
        <TrackRecordSection />
        <PortfolioSection />
        <ContactSection />
      </main>
      <Footer />
      <Toaster
        position="bottom-right"
        toastOptions={{
          style: {
            background: '#FFFFFF',
            border: '1px solid #E5E7EB',
            color: '#0F172A',
            fontSize: '14px',
          },
        }}
      />
    </div>
  );
}
