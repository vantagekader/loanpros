import React, { useEffect, useState, useCallback } from "react";
import { X, CheckCircle } from "lucide-react";

interface BookingFormProps {
  isOpen: boolean;
  onClose: () => void;
}

const BOOKING_SRC =
  "https://api.leadconnectorhq.com/widget/booking/LYZPc4q07HBvvWceHYuK";

const REDIRECT_URL = "https://www.loanpros.io/#how-it-works";

const BookingForm: React.FC<BookingFormProps> = ({ isOpen, onClose }) => {
  const [iframeKey, setIframeKey] = useState(0);
  const [showToast, setShowToast] = useState(false);

  // Reset calendar whenever modal opens
  useEffect(() => {
    if (isOpen) {
      setIframeKey((k) => k + 1);
      setShowToast(false);
    }
  }, [isOpen]);

  const handleIframeLoad = useCallback((e: React.SyntheticEvent<HTMLIFrameElement>) => {
    try {
      const iframe = e.currentTarget as HTMLIFrameElement;
      const url = iframe.contentWindow?.location.href;

      if (url && url.startsWith(REDIRECT_URL)) {
        // Show toast
        setShowToast(true);

        // Auto-close + full-page redirect after short delay
        setTimeout(() => {
          setShowToast(false);
          onClose();
          window.location.href = REDIRECT_URL;
        }, 1500); // 1.5s delay for user feedback
      }
    } catch {
      // cross-origin protection can block href read → no harm, GHL handles thank-you
    }
  }, [onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 p-4 overflow-y-auto">
      <div className="mx-auto max-w-4xl">
        <div className="relative bg-white rounded-2xl shadow-2xl w-full h-[90vh] flex flex-col min-h-0">
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

          {/* Calendar */}
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

          {/* Success Toast */}
          <div
            className={`pointer-events-none absolute bottom-4 right-4 transition-all duration-300 ${
              showToast ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
            }`}
          >
            <div className="pointer-events-auto flex items-start gap-3 rounded-xl border border-green-200 bg-white/95 backdrop-blur px-4 py-3 shadow-xl">
              <CheckCircle className="mt-0.5 h-5 w-5 text-green-600" />
              <div className="text-sm">
                <p className="font-medium text-gray-900">Booking confirmed</p>
                <p className="text-gray-600">Redirecting you now…</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingForm;
