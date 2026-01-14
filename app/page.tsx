import Hero from './components/Hero';
import RSVPForm from './components/RSVPForm';
import BodyContent from './components/BodyContent'; 
import Explore from './components/Explore';
import Speakers from './components/Speakers'; // Import the blue box component
import Footer from './components/Footer';


export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white font-satoshi">
      {/* 1. Hero Section: Black background with orange title */}
      <Hero />

      {/* 2. RSVP Bar: Gray bar with pink input border and orange button */}
      <RSVPForm />

      {/* 3. Main Text Content: White section with centered bold question */}
      <BodyContent />

      {/* 4. Feature/Explore Section: Light blue grid with 3 cards */}
      <Explore />

      {/* 5. Speakers Section: The blue gradient box with featured speakers */}
      <Speakers />

      {/* 6. Footer: Brand logo and copyright */}
      <Footer />
    </div>
  );
}