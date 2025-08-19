import { useEffect, useRef, useState } from "react";

const CustomCursor = ({ targetRef, size = 50, color = "white", blendMode = "difference" }) => {
  const cursorRef = useRef(null);
  const [isInside, setIsInside] = useState(false);

  useEffect(() => {
    const section = targetRef.current;
    const cursor = cursorRef.current;
    if (!section || !cursor) return;

    const moveCursor = (e) => {
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;
    };

    const handleEnter = () => setIsInside(true);
    const handleLeave = () => setIsInside(false);

    section.addEventListener("mousemove", moveCursor);
    section.addEventListener("mouseenter", handleEnter);
    section.addEventListener("mouseleave", handleLeave);

    return () => {
      section.removeEventListener("mousemove", moveCursor);
      section.removeEventListener("mouseenter", handleEnter);
      section.removeEventListener("mouseleave", handleLeave);
    };
  }, [targetRef]);

  return (
    <div
      ref={cursorRef}
      style={{
        position: "fixed",
        width: size,
        height: size,
        borderRadius: "50%",
        backgroundColor: color,
        mixBlendMode: blendMode,
        pointerEvents: "none",
        transform: "translate(-50%, -50%)",
        transition: "opacity 200ms ease, transform 350ms ease",
        opacity: isInside ? 1 : 0,
        zIndex: 1000,
      }}
    />
  );
};

export default CustomCursor;
