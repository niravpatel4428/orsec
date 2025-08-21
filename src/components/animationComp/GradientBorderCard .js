import React from "react";

const GradientBorderCard = ({ children, innerClass, className = "" }) => {
  return (
    <div className={`relative p-[1px] ${className} overflow-hidden`}>
      {/* Animated gradient border */}
       <div className="absolute inset-0 animate-borderMove rounded-lg bg-[linear-gradient(90deg,#E5D0FF,#47A6FF,#3D0DAE,#6800AD)]" />

      {/* Inner container (content area) */}
      <div className="relative overflow-hidden rounded-lg">{children}</div>
    </div>
  );
};

export default GradientBorderCard;
