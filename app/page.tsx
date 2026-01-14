import Hero from './components/Hero';
import RSVPForm from './components/RSVPForm';
import BodyContent from './components/BodyContent'; 
import Explore from './components/Explore';
import Footer from './components/Footer';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white font-satoshi">
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. RSVP Bar */}
      <RSVPForm />

      {/* 3. Main Text Content */}
      <BodyContent />
     

      {/* 4. Feature/Explore Section */}
      <Explore />

      {/* 5. Footer */}
      <Footer />
    </div>
  );
}