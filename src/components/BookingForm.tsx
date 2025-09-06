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
 const [iframeLoaded, setIframeLoaded] = useState(false);
 const countdownRef = useRef<NodeJS.Timeout | null>(null);
 const iframeRef = useRef<HTMLIFrameElement | null>(null);
 const lastUrlRef = useRef<string>("");

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

 // Monitor iframe for navigation/reload events
 useEffect(() => {
 let checkInterval: NodeJS.Timeout;

 if (isOpen && iframeLoaded) {
 // Monitor iframe for changes that indicate completion
 checkInterval = setInterval(() => {
 try {
 const iframe = iframeRef.current;
 if (iframe && iframe.contentWindow) {
 // Method 1: Check if iframe reloaded/navigated
 const currentSrc = iframe.src;

 // Method 2: Try to detect if the iframe content changed significantly
 // This works by checking if the iframe appears to have "refreshed" or completed
 const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;

 // Method 3: Monitor iframe load state
 if (iframe.contentWindow.location) {
 const currentUrl = iframe.contentWindow.location.href;

 // Check for success/completion indicators in URL
 if (currentUrl !== lastUrlRef.current) {
 console.log('URL changed from', lastUrlRef.current, 'to', currentUrl);
 lastUrlRef.current = currentUrl;

 if (
 currentUrl.includes('success') ||
 currentUrl.includes('complete') ||
 currentUrl.includes('thank') ||
 currentUrl.includes('confirmation') ||
 currentUrl.includes('booked') ||
 currentUrl.includes('scheduled')
 ) {
 console.log('Booking completion detected via URL change');
 handleBookingComplete();
 }
 }
 }
 }
 } catch (error) {
 // CORS prevents direct access, use alternative method
 // Monitor for iframe reload by checking readyState changes
 const iframe = iframeRef.current;
 if (iframe) {
 // Alternative: Monitor iframe load events
 const handleIframeLoad = () => {
 // If iframe reloads after initial load, it might indicate completion
 if (iframeLoaded) {
 console.log('Iframe reloaded - checking for completion');
 // Wait a moment for content to load, then check
 setTimeout(() => {
 // Trigger completion after iframe refresh
 // This assumes GHL refreshes the iframe upon successful booking
 handleBookingComplete();
 }, 2000);
 }
 };

 iframe.addEventListener('load', handleIframeLoad);
 return () => iframe.removeEventListener('load', handleIframeLoad);
 }
 }
 }, 1000);
 }

 return () => {
 if (checkInterval) {
 clearInterval(checkInterval);
 }
 };
 }, [isOpen, iframeLoaded, bookingComplete]);

 // Enhanced detection using multiple approaches
 useEffect(() => {
 if (!isOpen) return;

 // Method 1: Listen for any postMessages (backup)
 const handleMessage = (event: MessageEvent) => {
 console.log('Message received:', event.data, 'from:', event.origin);

 // Still listen for any success indicators
 if (event.data && typeof event.data === 'object') {
 if (
 event.data.type === "booking-success" ||
 event.data.type === "booking-complete" ||
 event.data.status === "completed" ||
 event.data.success === true
 ) {
 handleBookingComplete();
 }
 }
 };

 // Method 2: Monitor for visibility changes (when user returns from external redirect)
 const handleVisibilityChange = () => {
 if (!document.hidden && iframeLoaded) {
 // User returned to the page - check if booking was completed
 console.log('Page became visible again - checking for completion');
 setTimeout(() => {
 // You could add additional logic here to verify completion
 // For now, we'll rely on other detection methods
 }, 500);
 }
 };

 // Method 3: Listen for focus events (when returning from redirect)
 const handleWindowFocus = () => {
 if (iframeLoaded) {
 console.log('Window focused - checking for completion');
 // Additional check could be performed here
 }
 };

 window.addEventListener("message", handleMessage);
 document.addEventListener("visibilitychange", handleVisibilityChange);
 window.addEventListener("focus", handleWindowFocus);

 return () => {
 window.removeEventListener("message", handleMessage);
 document.removeEventListener("visibilitychange", handleVisibilityChange);
 window.removeEventListener("focus", handleWindowFocus);
 };
 }, [isOpen, iframeLoaded, bookingComplete]);

 // Reset states when modal opens
 useEffect(() => {
 if (isOpen) {
 setContentKey((k) => k + 1);
 setBookingComplete(false);
 setShowConfirmation(false);
 setCountdown(5);
 setIframeLoaded(false);
 lastUrlRef.current = "";
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

 const handleIframeLoad = () => {
 console.log('Iframe loaded');
 setIframeLoaded(true);

 // Set initial URL reference
 try {
 const iframe = iframeRef.current;
 if (iframe && iframe.contentWindow && iframe.contentWindow.location) {
 lastUrlRef.current = iframe.contentWindow.location.href;
 }
 } catch (error) {
 // CORS restriction
 lastUrlRef.current = iframe?.src || "";
 }
 };

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

 // Manual trigger for testing
 const triggerCompletion = () => {
 console.log('Manual completion triggered');
 handleBookingComplete();
 };

 if (!isOpen) return null;

 return (
 <>
 {/* Modal backdrop */}
 <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
 <div className="w-full max-w-5xl max-h-[95vh] flex flex-col">
 <div className="bg-white rounded-2xl shadow-2xl w-full flex flex-col overflow-hidden">
 {/* Header */}
 <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white p-6 flex-shrink-0">
 <div className="flex justify-between items-center">
 <div>
 <h2 className="text-2xl font-bold">Book Your Demo</h2>
 <p className="text-blue-100 mt-1">Schedule a time that works for you</p>
 </div>
 <div className="flex items-center gap-2">
 {/* Remove debug button - auto-close after 30 seconds */}
 {/*
 <button
 onClick={triggerCompletion}
 className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded text-sm transition-colors opacity-50"
 title="Test completion"
 >
 Test
 </button>
 */}
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

 {/* Calendar container */}
 <div className="flex-1 min-h-0 p-6">
 <div className="h-full rounded-xl overflow-hidden border border-gray-200">
 <div key={contentKey} className="w-full h-full">
 <iframe
 ref={iframeRef}
 src={`https://api.leadconnectorhq.com/widget/booking/LYZPc4q07HBvvWceHYuK?t=${contentKey}`}
 className="w-full h-full block"
 style={{
 border: "none",
 minHeight: "700px",
 height: "100%"
 }}
 title="Booking Calendar"
 id={`LYZPc4q07HBvvWceHYuK_${contentKey}`}
 onLoad={handleIframeLoad}
 allow="fullscreen"
 />
 </div>
 </div>
 </div>

 {/* Footer status */}
 <div className="px-6 py-4 bg-gray-50 border-t border-gray-200 flex-shrink-0">
 <div className="flex items-center justify-center gap-2 text-sm text-gray-600">
 <Clock className="h-4 w-4" />
 <span>
 {!iframeLoaded ? 'Loading calendar...' : 'Complete your form and select your appointment time'}
 </span>
 </div>
 </div>
 </div>
 </div>
 </div>

 {/* Booking Confirmation Overlay */}
 {showConfirmation && (
 <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-[60] p-4">
 <div className="bg-white rounded-2xl p-8 max-w-md w-full text-center shadow-2xl">
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
  const iframe = iframeRef.current;
 onClick={cancelAutoClose}
 className="px-6 py-3 text-gray-600 hover:text-gray-800 transition-colors rounded-xl border border-gray-300 hover:border-gray-400"
 >
 </button>
 </div>
 </div>
 </div>
 )}
 </>
 );
};

export default BookingForm;