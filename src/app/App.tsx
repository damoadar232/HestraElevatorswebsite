import { Routes, Route } from "react-router";
import { ScrollToTop } from "./components/layout/ScrollToTop";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ServicesPage from "./pages/ServicesPage";
import SafetyPage from "./pages/SafetyPage";
import GalleryPage from "./pages/GalleryPage";
import RequestQuote from "./pages/RequestQuote";

// Temporarily disabled — pages preserved for future use
// import ProductsPage from "./pages/ProductsPage";
// import IndustriesPage from "./pages/IndustriesPage";
// import ProjectsPage from "./pages/ProjectsPage";
// import MaintenancePage from "./pages/MaintenancePage";
// import BlogPage from "./pages/BlogPage";
// import CareersPage from "./pages/CareersPage";
// import FAQPage from "./pages/FAQPage";
// import ContactPage from "./pages/ContactPage";

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/safety" element={<SafetyPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/request-quote" element={<RequestQuote />} />

        {/* Merged into /services */}
        {/* <Route path="/products" element={<ProductsPage />} /> */}
        {/* <Route path="/industries" element={<IndustriesPage />} /> */}
        {/* <Route path="/projects" element={<ProjectsPage />} /> */}

        {/* Merged into /safety */}
        {/* <Route path="/maintenance" element={<MaintenancePage />} /> */}

        {/* Temporarily hidden */}
        {/* <Route path="/blog" element={<BlogPage />} /> */}
        {/* <Route path="/careers" element={<CareersPage />} /> */}
        {/* <Route path="/faq" element={<FAQPage />} /> */}
        {/* <Route path="/contact" element={<ContactPage />} /> */}
      </Routes>
    </>
  );
}
