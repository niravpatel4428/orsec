import { useEffect, useRef, useState } from "react";

const CustomCursor = ({
  targetRef,
  size = 50,
  color = "white",
  blendMode = "difference",
  smoothness = 0.15, // smaller = smoother/laggier trail
}) => {
  const cursorRef = useRef(null);
  const [isInside, setIsInside] = useState(false);

  // Store mouse position & animated position
  const mouse = useRef({ x: 0, y: 0 });
  const pos = useRef({ x: 0, y: 0 });
  const rafId = useRef(null);

  useEffect(() => {
    const section = targetRef.current;
    const cursor = cursorRef.current;
    if (!section || !cursor) return;

    const moveCursor = (e) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    };

    const handleEnter = () => setIsInside(true);
    const handleLeave = () => setIsInside(false);

    section.addEventListener("mousemove", moveCursor);
    section.addEventListener("mouseenter", handleEnter);
    section.addEventListener("mouseleave", handleLeave);

    // Animation loop for smooth trailing
    const animate = () => {
      pos.current.x += (mouse.current.x - pos.current.x) * smoothness;
      pos.current.y += (mouse.current.y - pos.current.y) * smoothness;

      cursor.style.left = `${pos.current.x}px`;
      cursor.style.top = `${pos.current.y}px`;

      rafId.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      section.removeEventListener("mousemove", moveCursor);
      section.removeEventListener("mouseenter", handleEnter);
      section.removeEventListener("mouseleave", handleLeave);
      cancelAnimationFrame(rafId.current);
    };
  }, [targetRef, smoothness]);

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
        transition: "opacity 200ms ease",
        opacity: isInside ? 1 : 0,
        zIndex: 1000,
      }}
    />
  );
};

export default CustomCursor;
