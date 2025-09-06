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
 const iframeRef = useRef<HTMLIFrameElement | null>(null);

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

 // Enhanced message detection for GHL booking completion
 useEffect(() => {
 const handleMessage = (event: MessageEvent) => {
 // Accept messages from GHL domains and any origin (for testing)
 const allowedOrigins = [
 'leadconnectorhq.com',
 'msgsndr.com',
 'gohighlevel.com',
 'localhost',
 'local-credentialless.webcontainer-api.io'
 ];

 const isAllowedOrigin = allowedOrigins.some(domain =>
 event.origin.includes(domain) || event.origin.includes('http')
 );

 if (isAllowedOrigin) {
 // Handle object messages
 if (event.data && typeof event.data === 'object') {
 const data = event.data;

 // Check for various completion indicators
 if (
 data.type === "booking-success" ||
 data.type === "booking-complete" ||
 data.type === "booking_completed" ||
 data.type === "appointment_booked" ||
 data.type === "form_submitted" ||
 data.type === "calendar_booking_complete" ||
 data.event === "booking_completed" ||
 data.event === "appointment_scheduled" ||
 data.event === "form_completed" ||
 data.message === "booking_complete" ||
 data.message === "appointment_confirmed" ||
 (data.status && (data.status === "completed" || data.status === "success")) ||
 (data.action && data.action === "booking_complete") ||
 // Check for nested data
 (data.data && data.data.status === "completed") ||
 // Check for success flags
 data.success === true ||
 data.booked === true ||
 data.confirmed === true
 ) {
 console.log('Booking completion detected via object message:', data);
 handleBookingComplete();
 return;
 }
 }

 // Handle string messages
 if (typeof event.data === "string") {
 const message = event.data.toLowerCase();
 if (
 message.includes("booking") && (message.includes("complete") || message.includes("success") || message.includes("confirmed")) ||
 message.includes("appointment") && (message.includes("scheduled") || message.includes("booked") || message.includes("confirmed")) ||
 message.includes("form") && message.includes("submit") && message.includes("success") ||
 message.includes("calendar") && message.includes("complete") ||
 message.includes("thank") && message.includes("you") ||
 message === "booking_complete" ||
 message === "appointment_confirmed" ||
 message === "success"
 ) {
 console.log('Booking completion detected via string message:', message);
 handleBookingComplete();
 return;
 }
 }

 // Log all messages for debugging
 console.log('GHL Message received:', event.data);
 }
 };

 // Monitor iframe for URL changes (additional detection method)
 const monitorIframeChanges = () => {
 try {
 const iframe = iframeRef.current;
 if (iframe && iframe.contentWindow) {
 // Try to access iframe URL (may be blocked by CORS)
 const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
 if (iframeDoc) {
 const currentUrl = iframeDoc.URL || window.location.href;
 if (
 currentUrl.includes('success') ||
 currentUrl.includes('complete') ||
 currentUrl.includes('thank') ||
 currentUrl.includes('confirmation') ||
 currentUrl.includes('booked')
 ) {
 console.log('Booking completion detected via URL change:', currentUrl);
 handleBookingComplete();
 }
 }
 }
 } catch (error) {
 // Expected due to CORS restrictions
 }
 };

 if (isOpen) {
 window.addEventListener("message", handleMessage, true);

 // Set up periodic monitoring as backup
 const monitorInterval = setInterval(monitorIframeChanges, 2000);

 return () => {
 window.removeEventListener("message", handleMessage, true);
 clearInterval(monitorInterval);
 };
 }

 return () => {
 if (countdownRef.current) {
 clearInterval(countdownRef.current);
 }
 };
 }, [isOpen, bookingComplete]);

 // Reset states when modal opens
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

 if (!isOpen) return null;

 return (
 <>
 {/* Modal backdrop with proper scrolling */}
 <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
 <div className="w-full max-w-5xl max-h-[95vh] flex flex-col">
 <div className="bg-white rounded-2xl shadow-2xl w-full flex flex-col overflow-hidden">
 {/* Header - Fixed height */}
 <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white p-6 flex-shrink-0">
 <div className="flex justify-between items-center">
 <div>
 <h2 className="text-2xl font-bold">Book Your Demo</h2>
 <p className="text-blue-100 mt-1">Schedule a time that works for you</p>
 </div>
 <button
 onClick={handleManualClose}
 className="text-white hover:text-gray-200 transition-colors p-2"
 aria-label="Close booking form"
 >
 <X className="w-6 h-6" />
 </button>
 </div>
 </div>

 {/* Calendar container - Flexible height */}
 <div className="flex-1 min-h-0 p-6">
 <div className="h-full rounded-xl overflow-hidden border border-gray-200">
 <div key={contentKey} className="w-full h-full">
 <iframe
 ref={iframeRef}
 src="https://api.leadconnectorhq.com/widget/booking/LYZPc4q07HBvvWceHYuK"
 className="w-full h-full block"
 style={{
 border: "none",
 minHeight: "700px",
 height: "100%"
 }}
 title="Booking Calendar"
 id="LYZPc4q07HBvvWceHYuK_1757132084887"
 scrolling="yes"
 allow="fullscreen"
 />
 </div>
 </div>
 </div>

 {/* Footer status - Fixed height */}
 <div className="px-6 py-4 bg-gray-50 border-t border-gray-200 flex-shrink-0">
 <div className="flex items-center justify-center gap-2 text-sm text-gray-600">
 <Clock className="h-4 w-4" />
 <span>Complete your form and select your appointment time</span>
 </div>
 </div>
 </div>
 </div>
 </div>

 {/* Booking Confirmation Overlay */}
 {showConfirmation && (
 <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-[60] p-4">
 <div className="bg-white rounded-2xl p-8 max-w-md w-full text-center shadow-2xl animate-in fade-in duration-300">
 <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
 <CheckCircle className="h-10 w-10 text-green-600" />
 </div>

 <h3 className="text-2xl font-bold text-gray-900 mb-3">
 Appointment Confirmed!
 </h3>

 <p className="text-gray-600 mb-6 leading-relaxed">
 Your appointment has been successfully scheduled. You should receive a confirmation email shortly. This window will close automatically.
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
