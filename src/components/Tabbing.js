import { useEffect, useRef, } from "react";
import "./managment.css";
import gsap from "gsap";
import { ScrollTrigger, ScrollToPlugin } from "gsap/all";
import image1 from "../assets/tab-block-1.webp";
import image2 from "../assets/tab-block-2.webp";
import image3 from "../assets/tab-block-3.webp";
import image4 from "../assets/tab-block-4.webp";
// Tabbing Section
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const images = [image1, image2, image3, image4];
const tabLabels = [
  "Tableau de bord",
  "Suivi des périphériques",
  "Analyse des risques",
  "Remontée des Alertes",
];

const Tabbing = () => {
  const slidesRef = useRef([]);
  const buttonsRef = useRef([]);
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      slidesRef.current.forEach((slide, i) => {
        gsap.set(slide, {
          yPercent: 100,
          rotateX: -30,
          rotateY: -15,
          opacity: 0,
          zIndex: i,
          scale: 1,
        });
      });

      // first slide visible
      gsap.set(slidesRef.current[0], {
        yPercent: 0,
        rotateX: 0,
        rotateY: 0,
        opacity: 1,
        scale: 1,
        zIndex: images.length,
      });

      setActiveTab(0);

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          pin: true,
          scrub: 1,
          start: "top top",
          end: `+=${images.length * 100}%`,
        },
      });

      slidesRef.current.forEach((slide, i) => {
        if (i === 0) return;
        tl.to(
          slide,
          {
            yPercent: 0,
            rotateX: 0,
            rotateY: 0,
            opacity: 1,
            scale: 1,
            duration: 1,
            onStart: () => {
              gsap.set(slide, { zIndex: images.length + i });
              setActiveTab(i);

              // 🔥 handle stacking effect
              slidesRef.current.forEach((s, j) => {
                if (j < i && j >= i - 3) {
                  // last 3 slides behind
                  const depth = i - j;
                  gsap.to(s, {
                    scale: 1 - depth * 0.05, // smaller
                    yPercent: -depth * 5, // pushed up
                    opacity: 0.6, // dimmed
                    zIndex: images.length + j - depth,
                    duration: 0.6,
                  });
                } else if (j < i - 3) {
                  // older ones completely hidden
                  gsap.to(s, {
                    opacity: 0,
                    duration: 0.4,
                  });
                }
              });
            },
          },
          `+=0.5`
        );
      });

      // click buttons
      buttonsRef.current.forEach((btn, i) => {
        btn.addEventListener("click", () => {
          gsap.to(window, {
            duration: 1.5,
            scrollTo: {
              y: containerRef.current,
              offsetY: 0,
            },
            onComplete: () => {
              gsap.to(tl, {
                progress: i / (images.length - 1),
                duration: 1.5,
                ease: "power2.inOut",
                onStart: () => setActiveTab(i),
              });
            },
          });
        });
      });

      function setActiveTab(index) {
        buttonsRef.current.forEach((btn, j) => {
          btn.classList.toggle("text-white", j === index);
          btn.classList.toggle("text-white/40", j !== index);
        });
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);
  return (
    <section className="relative py-28 overflow-hidden" ref={containerRef}>
      <div className="custom-container">
        <div className="relative">
          {/* Tabs */}
          <div className="custom-container border border-[#574D63] flex flex-row overflow-x-auto">
            {tabLabels.map((label, i) => (
              <button
                key={i}
                ref={(el) => (buttonsRef.current[i] = el)}
                className="outline-none min-w-[168px] py-4 xl:py-8 px-5 text-center border-r border-[#574D63] inline-flex justify-center items-center text-white/40 transition-colors duration-300"
              >
                <p className="text-xs font-light">{label}</p>
              </button>
            ))}
          </div>

          {/* Slides */}
          <div
            className="relative mt-20 md:mt-14 xl:mt-24 w-full h-[600px] tab-wrapper"
            style={{ perspective: "100vw" }}
          >
            {images.map((src, i) => (
              <div
                key={i}
                ref={(el) => (slidesRef.current[i] = el)}
                className="absolute top-0 left-0 right-0 w-full h-full"
              >
                <img
                  src={src}
                  alt={`slide-${i}`}
                  className="object-cover w-full h-full rounded-lg"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tabbing;
