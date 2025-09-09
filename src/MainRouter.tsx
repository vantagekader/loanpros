import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { routes } from "./routes";

function MainRouter() {
  // Detect subdomain and redirect to appropriate HTML file
  React.useEffect(() => {
    const hostname = window.location.hostname;
    const search = window.location.search;
    
    // Handle subdomain redirects
    if (hostname === 'book.loanpros.io') {
      window.location.href = `/book${search}`;
      return;
    } else if (hostname === 'start.loanpros.io') {
      window.location.href = `/start.html${search}`;
      return;
    } else if (hostname === 'thanks.loanpros.io') {
      window.location.href = `/thanks.html${search}`;
      return;
    }
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        {routes.map((route, index) => (
          <Route key={route.path || index} {...route} />
        ))}
      </Routes>
    </BrowserRouter>
  );
}

export default MainRouter;
