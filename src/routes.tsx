import { RouteObject } from "react-router-dom";
import App from "./App";
import PrivacyPolicy from "./components/PrivacyPolicy";

// Routes specified in inverse order of path specificity
export const routes: RouteObject[] = [
  // Privacy Policy route
  {
    path: "/privacy",
    element: <PrivacyPolicy />
  },
  
  // Home route (least specific)
  {
    path: "/",
    element: <App />
  },
  
  // Catch-all route for any other paths
  {
    path: "*",
    element: <App />
  }
];