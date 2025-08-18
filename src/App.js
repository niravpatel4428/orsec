import { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router";
import "./App.css";
import HomePage from "./pages/Home/HomePage";
import SentinelPage from "./pages/Sentinel/SentinelPage";
import AuditPage from "./pages/Audit/AuditPage";
import AboutPage from "./pages/About/AboutPage";
import ShieldPage from "./pages/Shield/ShieldPage";
import ContactPage from "./pages/Contact/ContactPage";
import LegalNoticesPage from "./pages/LegalNotices/LegalNoticesPage";
import ScrollToTop from "./components/ScrollToTop";
// import LogoLoader from "./components/LogoLoader";
import { SimpleText, BlurTextReveal, BottomFade, MultiParagraphDetails, StepByStepShow, StepByStepBlock } from "./utils/SimpleText";

function App() {
  useEffect(() => {
    BottomFade();
    SimpleText();
    BlurTextReveal();
    MultiParagraphDetails();
    StepByStepShow();
    StepByStepBlock();
  }, []);
  return (
    <>
      {/* <LoaderProvider> */}
      {/* <LogoLoader /> */}

      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/sentinel" element={<SentinelPage />} />
          <Route path="/audit" element={<AuditPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/shield" element={<ShieldPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/legalnotices" element={<LegalNoticesPage />} />
        </Routes>
        {/* <AppContent /> */}
      </Router>
      {/* </LoaderProvider> */}
    </>
  );
}

export default App;
