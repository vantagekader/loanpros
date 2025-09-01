import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import Benefits from './components/Benefits';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
  const handleBookDemo = () => {
    window.open('https://api.leadconnectorhq.com/widget/booking/rWKciXJwT10NSuhCjwgu', '_blank');
  };

  return (
    <div className="min-h-screen bg-white">
      <Header onGetStarted={handleBookDemo} />
      <Hero onBookDemo={handleBookDemo} />
      <Features />
      <HowItWorks />
      <Benefits onBookDemo={handleBookDemo} />
      <CTA onBookDemo={handleBookDemo} />
      <Footer />
    </div>
  );
}

export default App;