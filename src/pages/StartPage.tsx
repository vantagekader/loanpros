import React from 'react';

const StartPage: React.FC = () => {
  return (
    <div className="min-h-screen">
      <iframe
        src="/start.html"
        className="w-full h-screen border-none"
        title="Get Started"
      />
    </div>
  );
};

export default StartPage;