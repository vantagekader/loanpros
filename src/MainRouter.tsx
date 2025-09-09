import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { routes } from "./routes";

function MainRouter() {
  // Detect subdomain and redirect accordingly
  React.useEffect(() => {
    const hostname = window.location.hostname;
    const pathname = window.location.pathname;
    
    // Handle subdomain redirects
    if (hostname === 'book.loanpros.io') {
      window.history.replaceState(null, '', `/book${pathname}`);
    } else if (hostname === 'start.loanpros.io') {
      window.history.replaceState(null, '', `/start${pathname}`);
    } else if (hostname === 'thanks.loanpros.io') {
      window.history.replaceState(null, '', `/thanks${pathname}`);
    }
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        {routes.map((route, index) => (
          <Route key={route.path || index} {...route} />
        ))}
        {/* Fallback redirect to home for unhandled paths */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default MainRouter;
