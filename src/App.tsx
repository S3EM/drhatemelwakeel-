import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import ServicesList from "./pages/ServicesList";
import Articles from "./pages/Articles";
import Contact from "./pages/Contact";
import BackToTop from "./components/BackToTop";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services-list" element={<ServicesList />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/contact" element={<Contact />} />
        {/* Catch-all route to prevent 404 Page Not Found errors */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <BackToTop />
    </BrowserRouter>
  );
}
