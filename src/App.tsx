import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import Benefits from './components/Benefits';
import CTA from './components/CTA';
import Footer from './components/Footer';
import BookingForm from './components/BookingForm';

function App() {
  const [isBookingFormOpen, setIsBookingFormOpen] = useState(false);

  const handleOpenBookingForm = () => {
    setIsBookingFormOpen(true);
  };

  const handleCloseBookingForm = () => {
    setIsBookingFormOpen(false);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header onGetStarted={handleOpenBookingForm} />
      <Hero onBookDemo={handleOpenBookingForm} />
      <Features />
      <HowItWorks />
      <Benefits onBookDemo={handleOpenBookingForm} />
      <CTA onBookDemo={handleOpenBookingForm} />
      <Footer />
      <BookingForm isOpen={isBookingFormOpen} onClose={handleCloseBookingForm} />
    </div>
  );
}

export default App;