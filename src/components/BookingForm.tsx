import React from 'react';
import { X } from 'lucide-react';

interface BookingFormProps {
  isOpen: boolean;
  onClose: () => void;
}

const BookingForm: React.FC<BookingFormProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white p-6 rounded-t-2xl">
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-2xl font-bold">Book Your Demo</h2>
              <p className="text-blue-100 mt-1">Schedule a time that works for you</p>
            </div>
            <button
              onClick={onClose}
              className="text-white hover:text-gray-200 transition-colors p-2"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* GHL Calendar Embed */}
        <div className="p-6 overflow-y-auto max-h-[calc(90vh-120px)]">
          <div className="w-full h-[600px]">
            <iframe 
              src="https://api.leadconnectorhq.com/widget/bookings/intro-cal-176414mzciy1-4ede1f05-875c-4570-808d-7680b618905d" 
              style={{
                width: '100%',
                border: 'none',
                overflow: 'hidden',
                height: '600px'
              }} 
              scrolling="no" 
              id="intro-cal-176414mzciy1-4ede1f05-875c-4570-808d-7680b618905d"
            />
          </div>
        </div>
      </div>
    </div>
  );
};


export default BookingForm