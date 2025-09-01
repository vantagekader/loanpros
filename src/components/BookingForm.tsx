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
        <div className="p-6">
          <div className="w-full h-[600px]">
            <iframe 
              src="https://api.leadconnectorhq.com/widget/group/EhdTujOiZjh5g2GDWEPf"
              style={{
                width: '100%',
                height: '600px',
                border: 'none'
              }}
              scrolling="no" 
              id="EhdTujOiZjh5g2GDWEPf_1756697181917"
              allow="camera; microphone; geolocation"
            />
          </div>
        </div>
      </div>
    </div>
  );
};


export default BookingForm