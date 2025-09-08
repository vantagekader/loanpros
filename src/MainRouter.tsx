import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";

function MainRouter() {
  // Check if we're on a subdomain that should serve static files
  const hostname = window.location.hostname;
  const isStaticSubdomain = hostname.startsWith('start.') || 
                           hostname.startsWith('book.') || 
                           hostname.startsWith('thanks.');

  // If we're on a subdomain, don't render React Router
  // This allows Netlify redirects to work properly
  if (isStaticSubdomain) {
    return null;
  }

  // Normal React routing for main domain
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
      </Routes>
    </BrowserRouter>
  );
}

export default MainRouter;
