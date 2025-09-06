import { BrowserRouter, Routes, Route } from "react-router-dom";
import BookingBridge from "./components/BookingBridge";
import App from "./App";

function MainRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/booking-bridge" element={<BookingBridge />} />
      </Routes>
    </BrowserRouter>
  );
}

export default MainRouter;