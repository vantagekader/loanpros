import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import Benefits from './components/Benefits';
import CTA from './components/CTA';
import Footer from './components/Footer';
import BookingPage from './components/BookingPage';

function App() {
  const [showBooking, setShowBooking] = useState(false);

  const handleShowBooking = () => {
    setShowBooking(true);
    // Scroll to top when opening booking page
    window.scrollTo(0, 0);
  };

  if (showBooking) {
    return <BookingPage onBack={() => setShowBooking(false)} />;
  }

  return (
    <div className="min-h-screen bg-white">
      <Header onGetStarted={handleShowBooking} />
      <Hero onBookDemo={handleShowBooking} />
      <Features />
      <HowItWorks />
      <Benefits onBookDemo={handleShowBooking} />
      <CTA onBookDemo={handleShowBooking} />
      <Footer />
    </div>
  );
}

export default App;