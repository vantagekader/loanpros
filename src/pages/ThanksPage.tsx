import React from 'react';

const ThanksPage: React.FC = () => {
  return (
    <div className="min-h-screen">
      <iframe
        src="/thanks.html"
        className="w-full h-screen border-none"
        title="Thank You"
      />
    </div>
  );
};

export default ThanksPage;