import { useEffect } from "react";

const BookingBridge = () => {
  useEffect(() => {
    // Notify parent window immediately
    if (window.parent) {
      window.parent.postMessage({ type: "booking-success" }, "*");
    }
  }, []);

  return (
    <div className="flex items-center justify-center h-screen">
      <p className="text-lg font-medium text-gray-700">
        Thanks! Your booking is confirmed.
      </p>
    </div>
  );
};

export default BookingBridge;