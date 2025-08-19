import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import LogoLoader from "./LogoLoader"; 
function RouteChangeLoader({ children }) {
  const location = useLocation();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500); 

    return () => clearTimeout(timer);
  }, [location]);

  return (
    <>
      {loading && <LogoLoader />}
      {children}
    </>
  );
}

export default RouteChangeLoader;
