import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import Benefits from './components/Benefits';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
  const handleBookDemo = () => {
    // Placeholder function for booking demo
    console.log('Book demo clicked');
  };

  const handleGetStarted = () => {
    // Placeholder function for get started
    console.log('Get started clicked');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header onGetStarted={handleGetStarted} />
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