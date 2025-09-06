import React, { useEffect, useState, useRef } from "react";
import { X, CheckCircle, Clock } from "lucide-react";

interface BookingFormProps {
 isOpen: boolean;
 onClose: () => void;
}

const BookingForm: React.FC<BookingFormProps> = ({ isOpen, onClose }) => {
 const [contentKey, setContentKey] = useState(0);
 const [bookingComplete, setBookingComplete] = useState(false);
 const [countdown, setCountdown] = useState(5);
 const [showConfirmation, setShowConfirmation] = useState(false);
 const countdownRef = useRef<NodeJS.Timeout | null>(null);

 // Handle booking completion and auto-close
 const handleBookingComplete = () => {
 if (!bookingComplete) {
 setBookingComplete(true);
 setShowConfirmation(true);

 // Start countdown
 countdownRef.current = setInterval(() => {
 setCountdown((prev) => {
 if (prev <= 1) {
 if (countdownRef.current) {
 clearInterval(countdownRef.current);
 }
 onClose();
 return 0;
 }
 return prev - 1;
 });
 }, 1000);
 }
 };

 // Listen for GHL completion messages
 useEffect(() => {
 const handleMessage = (event: MessageEvent) => {
 // Check if message is from GHL domain
 if (event.origin.includes('leadconnectorhq.com') || event.origin.includes('msgsndr.com')) {
 // Listen for completion events
 if (event.data && typeof event.data === 'object') {
 if (
 event.data.type === "booking-success" ||
 event.data.type === "booking-complete" ||
 event.data.type === "booking_completed" ||
 event.data.type === "form_submitted" ||
 event.data.event === "booking_completed" ||
 event.data.event === "form_completed" ||
 (event.data.status && event.data.status === "completed")
 ) {
 handleBookingComplete();
 }
 }

 // Handle string messages
 if (typeof event.data === "string") {
 const message = event.data.toLowerCase();
 if (
 message.includes("booking-complete") ||
 message.includes("booking") && message.includes("success") ||
 message.includes("appointment") && message.includes("scheduled") ||
 message.includes("form") && message.includes("submit")
 ) {
 handleBookingComplete();
 }
 }
 }
 };

 if (isOpen) {
 window.addEventListener("message", handleMessage);
 }

 return () => {
 window.removeEventListener("message", handleMessage);
 if (countdownRef.current) {
 clearInterval(countdownRef.current);
 }
 };
 }, [isOpen, onClose, bookingComplete]);

 // Reset calendar and states whenever modal opens
 useEffect(() => {
 if (isOpen) {
 setContentKey((k) => k + 1);
 setBookingComplete(false);
 setShowConfirmation(false);
 setCountdown(5);
 if (countdownRef.current) {
 clearInterval(countdownRef.current);
 }
 }
 }, [isOpen]);

 // Load GHL form embed script
 useEffect(() => {
 if (isOpen) {
 const script = document.createElement('script');
 script.src = 'https://link.msgsndr.com/js/form_embed.js';
 script.type = 'text/javascript';
 script.async = true;

 // Check if script already exists
 const existingScript = document.querySelector(`script[src="${script.src}"]`);
 if (!existingScript) {
 document.body.appendChild(script);
 }
 }
 }, [isOpen]);

 const handleManualClose = () => {
 if (countdownRef.current) {
 clearInterval(countdownRef.current);
 }
 onClose();
 };

 const cancelAutoClose = () => {
 setShowConfirmation(false);
 setBookingComplete(false);
 setCountdown(5);
 if (countdownRef.current) {
 clearInterval(countdownRef.current);
 }
 };

 // Manual trigger for testing (remove in production)
 const handleTestComplete = () => {
 handleBookingComplete();
 };

 if (!isOpen) return null;

 return (
 <>
 <div className="fixed inset-0 bg-black bg-opacity-50 z-50 p-4 overflow-y-auto">
 <div className="mx-auto max-w-4xl">
 <div className="bg-white rounded-2xl shadow-2xl w-full h-[90vh] flex flex-col min-h-0">
 {/* Header */}
 <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white p-6 rounded-t-2xl">
 <div className="flex justify-between items-center">
 <div>
 <h2 className="text-2xl font-bold">Book Your Demo</h2>
 <p className="text-blue-100 mt-1">Schedule a time that works for you</p>
 </div>
 <div className="flex items-center gap-2">
 {/* Test button - remove in production */}
 <button
 onClick={handleTestComplete}
 className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded text-sm transition-colors"
 title="Test completion (remove in production)"
 >
 Test Complete
 </button>

 <button
 onClick={handleManualClose}
 className="text-white hover:text-gray-200 transition-colors p-2"
 aria-label="Close booking form"
 >
 <X className="w-6 h-6" />
 </button>
 </div>
 </div>
 </div>

 {/* Scrollable body */}
 <div className="flex-1 overflow-y-auto min-h-0 [-webkit-overflow-scrolling:touch]">
 <div className="p-6 h-full">
 <div className="h-full rounded-xl overflow-hidden">
 <div key={contentKey} className="w-full h-full">
 <iframe
 src="https://api.leadconnectorhq.com/widget/booking/LYZPc4q07HBvvWceHYuK"
 className="w-full h-full block"
 style={{ border: "none", minHeight: "800px" }}
 title="Booking Calendar"
 id="LYZPc4q07HBvvWceHYuK_1757132084887"
 />
 </div>
 </div>
 </div>
 </div>

 {/* Status indicator */}
 <div className="px-6 py-3 bg-gray-50 rounded-b-2xl border-t border-gray-200">
 <div className="flex items-center justify-center gap-2 text-sm text-gray-600">
 <Clock className="h-4 w-4" />
 <span>Complete your form and book your appointment</span>
 </div>
 </div>
 </div>
 </div>
 </div>

 {/* Completion Overlay */}
 {showConfirmation && (
 <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-[60] p-4">
 <div className="bg-white rounded-2xl p-8 max-w-md w-full text-center shadow-2xl">
 <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
 <CheckCircle className="h-8 w-8 text-green-600" />
 </div>

 <h3 className="text-2xl font-bold text-gray-900 mb-3">
 Booking Confirmed!
 </h3>

 <p className="text-gray-600 mb-6">
 Your appointment has been successfully scheduled. This window will close automatically.
 </p>

 <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 mb-6 border border-blue-200">
 <div className="text-4xl font-bold text-blue-600 mb-2">
 {countdown}
 </div>
 <div className="text-sm text-blue-700 font-medium">
 Closing in {countdown} second{countdown !== 1 ? 's' : ''}
 </div>
 </div>

 <div className="flex gap-3">
 <button
 onClick={handleManualClose}
 className="flex-1 bg-gradient-to-r from-blue-600 to-indigo-700 text-white px-6 py-3 rounded-xl hover:from-blue-700 hover:to-indigo-800 transition-all duration-200 font-semibold shadow-lg"
 >
 Close Now
 </button>

 <button
 onClick={cancelAutoClose}
 className="px-6 py-3 text-gray-600 hover:text-gray-800 transition-colors rounded-xl border border-gray-300 hover:border-gray-400"
 >
 Stay Open
 </button>
 </div>
 </div>
 </div>
 )}
 </>
 );
};

export default BookingForm;

