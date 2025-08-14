import {
  BrowserRouter as Router,
  Routes,
  Route,
  // useLocation,
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
import LogoLoader from "./components/LogoLoader";
// import { LoaderProvider, useLoader } from "./context/LoaderContext";
// import { useEffect } from "react";

// Show loader on route change
// const RouteChangeLoader = () => {
//   const location = useLocation();
//   const { setLoading } = useLoader();

//   useEffect(() => {
//     setLoading(true);
//     const timer = setTimeout(() => setLoading(false), 1200);
//     return () => clearTimeout(timer);
//   }, [location.pathname, setLoading]);

//   return null;
// };

// function AppContent() {
//   const { loading } = useLoader();

//   return (
//     <>
//       <ScrollToTop />
//       {loading && <LogoLoader />}
//       <RouteChangeLoader />
//       <Routes>
//         <Route path="/" element={<HomePage />} />
//         <Route path="/sentinel" element={<SentinelPage />} />
//         <Route path="/audit" element={<AuditPage />} />
//         <Route path="/about" element={<AboutPage />} />
//         <Route path="/shield" element={<ShieldPage />} />
//         <Route path="/contact" element={<ContactPage />} />
//         <Route path="/legalnotices" element={<LegalNoticesPage />} />
//       </Routes>
//     </>
//   );
// }

function App() {
  return (
    <>
      {/* <LoaderProvider> */}
      <LogoLoader />

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
