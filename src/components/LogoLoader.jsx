import React, { useEffect, useState } from "react";
import logo from "../assets/main-logo.svg";

const LogoLoader = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate short loading delay (can be adjusted)
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500); // 1.5 seconds

    return () => clearTimeout(timer);
  }, []);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 bg-black flex items-center justify-center z-[9999] transition-opacity duration-500">
      <div className="animate-breathing">
        <img
          src={logo}
          alt="Logo"
          className="h-32 w-32 md:w-44 md:h-44 filter drop-shadow-[0_0_20px_rgba(168,85,247,0.6)]"
        />
      </div>
    </div>
  );
};

export default LogoLoader;
