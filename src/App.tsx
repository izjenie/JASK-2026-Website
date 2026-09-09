import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from '@/sections/HeroSection';
import ApproachSection from '@/sections/ApproachSection';
import TrackRecordSection from '@/sections/TrackRecordSection';
import PortfolioSection from '@/sections/PortfolioSection';
import ContactSection from '@/sections/ContactSection';

export default function App() {
  return (
    <div className="min-h-screen bg-paper text-ink">
      <Header />
      <main>
        <HeroSection />
        <ApproachSection />
        <TrackRecordSection />
        <PortfolioSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
