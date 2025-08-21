import React, { useRef, useState, useEffect } from "react";

const SpotlightCard = ({ className = "", children, as: Tag = "div", outerClass }) => {
  const ref = useRef(null);
  const [coords, setCoords] = useState({ x: "-9999px", y: "-9999px" });
  const [active, setActive] = useState(false);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const onScroll = () => {
      if (!active) return;
      setCoords((c) => ({ ...c }));
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [active]);

  const handleMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();

    let clientX, clientY;
    if (e.touches && e.touches[0]) {
      clientX = e.touches[0].clientX;
      clientY = e.touches[0].clientY;
    } else {
      clientX = e.clientX;
      clientY = e.clientY;
    }

    const x = clientX - rect.left;
    const y = clientY - rect.top;

    setCoords({ x: `${x}px`, y: `${y}px` });
    if (!active) setActive(true);

    // ---- 3D tilt math ----
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * 8; // max 8deg
    const rotateY = ((x - centerX) / centerX) * -8; // max 8deg
    setTilt({ x: rotateX, y: rotateY });
  };

  const handleLeave = () => {
    setActive(false);
    setCoords({ x: "-9999px", y: "-9999px" });
    setTilt({ x: 0, y: 0 }); // reset tilt
  };

  return (
    <div
      className="relative h-full"
      style={{ perspective: "1000px" }} // parent needs perspective
    >
      <Tag
        ref={ref}
        onMouseMove={handleMove}
        onTouchMove={handleMove}
        onMouseLeave={handleLeave}
        onTouchEnd={handleLeave}
        onFocus={() => setActive(true)}
        onBlur={handleLeave}
        className={[
          "relative h-full group overflow-hidden",
          "backdrop-blur-sm transition-colors duration-300",
          className,
        ].join(" ")}
        style={{
          "--spot-x": coords.x,
          "--spot-y": coords.y,
          transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
          transition: active ? "transform 0.05s ease" : "transform 0.5s ease",
        }}
      >
        {/* Glow dots inside spotlight */}
        <div
          aria-hidden
          className={[
            "pointer-events-none absolute inset-0 transition-opacity duration-300",
            active ? "opacity-90" : "opacity-0",
          ].join(" ")}
          style={{
            backgroundImage:
              "radial-gradient(rgba(255,255,255,0.25) 1px, transparent 1px)",
            backgroundSize: "18px 18px",
            maskImage:
              "radial-gradient(240px 240px at var(--spot-x) var(--spot-y), black, transparent 70%)",
            WebkitMaskImage:
              "radial-gradient(240px 240px at var(--spot-x) var(--spot-y), black, transparent 70%)",
          }}
        />

        {/* Spotlight glow */}
        <div
          aria-hidden
          className={[
            "pointer-events-none absolute -inset-32 opacity-0 transition-opacity duration-300",
            active ? "opacity-100" : "opacity-0",
          ].join(" ")}
          style={{
            background:
              "radial-gradient(240px 240px at var(--spot-x) var(--spot-y), rgba(151,71,255,0.35), rgba(129,72,192,0.15) 30%, rgba(0,0,0,0) 70%)",
            filter: "blur(24px)",
          }}
        />

        {/* Border highlight */}
        <div
          aria-hidden
          className={[
            "pointer-events-none absolute inset-0",
            "[mask:radial-gradient(220px_220px_at_var(--spot-x)_var(--spot-y),black,transparent_70%)]",
            "bg-[radial-gradient(220px_220px_at_var(--spot-x)_var(--spot-y),rgba(194,149,253,0.6),transparent_60%)]",
            active ? "opacity-100" : "opacity-0",
            "transition-opacity duration-300",
          ].join(" ")}
          style={{ mixBlendMode: "plus-lighter" }}
        />

        {/* Content */}
        <div className={`relative h-full ${outerClass}`}>{children}</div>
      </Tag>
    </div>
  );
};

export default SpotlightCard;
