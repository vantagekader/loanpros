import React, { useEffect, useState, useCallback } from 'react';
import { X, CheckCircle } from 'lucide-react';

interface BookingFormProps {
  isOpen: boolean;
  onClose: () => void;
  /** Optional: close the modal a few seconds after success */
  autoCloseOnSuccessMs?: number; // e.g. 1500 or 0 to disable
}

const BOOKING_SRC =
  'https://api.leadconnectorhq.com/widget/booking/LYZPc4q07HBvvWceHYuK';

const BookingForm: React.FC<BookingFormProps> = ({
  isOpen,
  onClose,
  autoCloseOnSuccessMs = 0,
}) => {
  const [iframeKey, setIframeKey] = useState(0);
  const [showToast, setShowToast] = useState(false);

  // Fresh load whenever modal opens
  useEffect(() => {
    if (isOpen) {
      setIframeKey((k) => k + 1);
      setShowToast(false);
    }
  }, [isOpen]);

  const handleBridgeMessage = useCallback((event: MessageEvent) => {
    // If you host the bridge on your domain, you can lock this down:
    // if (event.origin !== 'https://yourdomain.com') return;

    if (event?.data?.type === 'booking-success') {
      // 1) show toast feedback
      setShowToast(true);

      // 2) immediately reset calendar to a fresh state
      setIframeKey((k) => k + 1);

      // 3) auto-hide toast after 4s
      const hide = setTimeout(() => setShowToast(false), 4000);

      // 4) optional: auto-close modal after success
      let autoCloseTimer: number | undefined;
      if (autoCloseOnSuccessMs && autoCloseOnSuccessMs > 0) {
        autoCloseTimer = window.setTimeout(() => {
          setShowToast(false);
          onClose();
        }, autoCloseOnSuccessMs);
      }

      return () => {
        clearTimeout(hide);
        if (autoCloseTimer) clearTimeout(autoCloseTimer);
      };
    }
  }, [autoCloseOnSuccessMs, onClose]);

  useEffect(() => {
    window.addEventListener('message', handleBridgeMessage);
    return () => window.removeEventListener('message', handleBridgeMessage);
  }, [handleBridgeMessage]);

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
                <p className="text-blue-100 mt-1">Schedule a time that works for you</p>
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

          {/* Scrollable body */}
          <div className="flex-1 overflow-y-auto min-h-0">
            <div className="p-6 h-full">
              <div className="h-full rounded-xl overflow-hidden">
                <iframe
                  key={iframeKey} // re-mounts on open and on success
                  src={BOOKING_SRC}
                  className="w-full h-full block"
                  style={{ border: 'none' }}
                  title="Booking Calendar"
                />
              </div>
            </div>
          </div>

          {/* Success Toast */}
          <div
            className={`pointer-events-none absolute bottom-4 right-4 transition-all duration-300 ${
              showToast ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
            }`}
            aria-live="polite"
            aria-atomic="true"
          >
            <div className="pointer-events-auto flex items-start gap-3 rounded-xl border border-green-200 bg-white/95 backdrop-blur px-4 py-3 shadow-xl">
              <CheckCircle className="mt-0.5 h-5 w-5 text-green-600" />
              <div className="text-sm">
                <p className="font-medium text-gray-900">Booking confirmed</p>
                <p className="text-gray-600">You’ll receive a calendar invite and reminders.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingForm;
