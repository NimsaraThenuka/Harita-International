import { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import FoodsPage from "./pages/FoodsPage";
import VehiclesPage from "./pages/VehiclesPage";
import SoftwarePage from "./pages/SoftwarePage";
import ConsultingPage from "./pages/ConsultingPage";
import GemstonesPage from "./pages/GemstonesPage";
import NewsPage from "./pages/NewsPage";
import ContactPage from "./pages/ContactPage";
import { LanguageProvider } from "./context/LanguageContext";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      window.scrollTo(0, 0);
      document.documentElement.scrollTo(0, 0);
      document.body.scrollTo(0, 0);
    };

    handleScroll();
    const timer = setTimeout(handleScroll, 20);
    return () => clearTimeout(timer);
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/foods" element={<FoodsPage />} />
          <Route path="/vehicles" element={<VehiclesPage />} />
          <Route path="/software" element={<SoftwarePage />} />
          <Route path="/consulting" element={<ConsultingPage />} />
          <Route path="/gemstones" element={<GemstonesPage />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </LanguageProvider>
  );
}
