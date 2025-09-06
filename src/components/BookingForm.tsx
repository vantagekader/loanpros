import React, { useEffect, useState } from "react";
import { X } from "lucide-react";

interface BookingFormProps {
  isOpen: boolean;
  onClose: () => void;
}

const BOOKING_SRC =
  "https://api.leadconnectorhq.com/widget/booking/LYZPc4q07HBvvWceHYuK";

const BookingForm: React.FC<BookingFormProps> = ({ isOpen, onClose }) => {
  const [iframeKey, setIframeKey] = useState(0);

  // Reload calendar every time modal opens
  useEffect(() => {
    if (isOpen) {
      setIframeKey((k) => k + 1);
    }
  }, [isOpen]);

  const handleIframeLoad = () => {
    // Wait 10s after *any* load, then reset
    const timer = setTimeout(() => {
      setIframeKey((k) => k + 1);
    }, 10000);

    return () => clearTimeout(timer);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 p-4 overflow-y-auto">
      <div className="mx-auto max-w-4xl">
        <div className="bg-white rounded-2xl shadow-2xl w-full h-[90vh] flex flex-col min-h-0">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white p-6 rounded-t-2xl">
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-2xl font-bold">Book Your Demo</h2>
                <p className="text-blue-100 mt-1">
                  Schedule a time that works for you
                </p>
              </div>
              <button
                onClick={onClose}
                className="text-white hover:text-gray-200 transition-colors p-2"
                aria-label="Close booking form"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
          </div>

          {/* Body */}
          <div className="flex-1 overflow-y-auto min-h-0">
            <div className="p-6 h-full">
              <div className="h-full rounded-xl overflow-hidden">
                <iframe
                  key={iframeKey}
                  src={BOOKING_SRC}
                  className="w-full h-full block"
                  style={{ border: "none" }}
                  title="Booking Calendar"
                  onLoad={handleIframeLoad}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingForm;
