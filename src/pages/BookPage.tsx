import React from 'react';

const BookPage: React.FC = () => {
  return (
    <div className="min-h-screen">
      <iframe
        src="/book.html"
        className="w-full h-screen border-none"
        title="Book Your Demo"
      />
    </div>
  );
};

export default BookPage;