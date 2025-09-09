import { RouteObject } from "react-router-dom";
import App from "./App";
import BookPage from "./pages/BookPage";
import StartPage from "./pages/StartPage";
import ThanksPage from "./pages/ThanksPage";
import SubdomainRedirectHandler from "./components/SubdomainRedirectHandler";

// Routes specified in inverse order of path specificity
export const routes: RouteObject[] = [
  // Subdomain redirect handlers (most specific)
  {
    path: "/book-loanpros-io/:path*",
    element: <SubdomainRedirectHandler targetPath="/book" />
  },
  {
    path: "/start-loanpros-io/:path*",
    element: <SubdomainRedirectHandler targetPath="/start" />
  },
  {
    path: "/thanks-loanpros-io/:path*",
    element: <SubdomainRedirectHandler targetPath="/thanks" />
  },
  
  // Direct page routes
  {
    path: "/book",
    element: <BookPage />
  },
  {
    path: "/start", 
    element: <StartPage />
  },
  {
    path: "/thanks",
    element: <ThanksPage />
  },
  
  // Home route (least specific)
  {
    path: "/",
    element: <App />
  }
];