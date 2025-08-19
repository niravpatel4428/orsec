import { useEffect, useRef, } from "react";
import "./managment.css";
import gsap from "gsap";
import { ScrollTrigger, ScrollToPlugin } from "gsap/all";
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

// Tabbing Section
const Managment = ({
  tabs = [],
  heading,
  subHeading,
  description,
  functionsTitle,
  functionsList = [],
  utilitiesTitle,
  utilitiesList = [],
}) => {
  const slidesRef = useRef([]);
  const buttonsRef = useRef([]);
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const slides = slidesRef.current;
      const total = tabs.length - 1;
      const currentIndexRef = { value: 0 };

      // base state
      slides.forEach((slide, i) => {
        gsap.set(slide, {
          yPercent: i === 0 ? 0 : 100,
          rotateX: i === 0 ? 0 : -30,
          rotateY: i === 0 ? 0 : -15,
          scale: 1,
          zIndex: i, // base order; we’ll lift current in updateStack
        });
      });
      setActiveTab(0);
      updateStack(0); // prime the stack

      // build timeline: each slide animates in; no callbacks here
      const tl = gsap.timeline({
        defaults: { duration: 1, ease: "none", immediateRender: false },
        scrollTrigger: {
          trigger: containerRef.current,
          pin: true,
          scrub: 2,
          start: "top top",
          end: `+=${tabs.length * 100}%`,
          invalidateOnRefresh: true,
          anticipatePin: 1,
          onUpdate: (self) => {
            // figure out nearest slide index from progress
            const i = Math.round(tl.progress() * total);
            if (i !== currentIndexRef.value) {
              currentIndexRef.value = i;
              setActiveTab(i);
              updateStack(i);
            }
          },
        },
      });

      slides.forEach((slide, i) => {
        if (i === 0) return;

        tl.to(
          slide,
          {
            yPercent: 0,
            rotateX: 0,
            rotateY: 0,
            scale: 1,
            duration: 1,
            ease: "none",
            immediateRender: false,
            overwrite: "auto",
            onStart: () => {
              // 🔥 put this slide above all others before it animates
              gsap.set(slide, { zIndex: tabs.length + 100 });
            },
          },
          "+=0.5"
        );
      });

      // — helpers —
      function setActiveTab(index) {
        buttonsRef.current.forEach((btn, j) => {
          btn.classList.toggle("text-white", j === index);
          btn.classList.toggle("text-white/40", j !== index);
        });
      }

      // only touch previous slides to avoid fighting the timeline
      function updateStack(active) {
        slides.forEach((s, j) => {
          if (j === active) return; // active slide handled by timeline

          const depth = active - j;
          if (depth > 0 && depth <= 3) {
            gsap.to(s, {
              zIndex: tabs.length + 100 - depth, // still behind active
              scale: 1 - depth * 0.05,
              yPercent: -depth * 6,
              duration: 0.3,
              ease: "power2.out",
              overwrite: "auto",
            });
          } else if (depth > 3) {
            gsap.to(s, {
              zIndex: j, // far back
              scale: 0.85,
              yPercent: -20,
              duration: 0.3,
              ease: "power2.out",
              overwrite: "auto",
            });
          }
        });
      }
      // click → scroll + sync
      buttonsRef.current.forEach((btn, i) => {
        btn.addEventListener("click", () => {
          gsap.to(window, {
            duration: 1.2,
            scrollTo: { y: containerRef.current, offsetY: 0 },
            onComplete: () => {
              gsap.to(tl, {
                progress: i / (tabs.length - 1),
                duration: 1.2,
                ease: "power2.inOut",
                onUpdate: () => {
                  // keep everything in sync during the scrubbed jump
                  const idx = Math.round(tl.progress() * total);
                  if (idx !== currentIndexRef.value) {
                    currentIndexRef.value = idx;
                    setActiveTab(idx);
                    updateStack(idx);
                  }
                },
              });
            },
          });
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, [tabs]);
  return (
    <>
      <section className="relative py-28 overflow-hidden">
        <div className="custom-container">
          <div className="relative grid grid-cols-1 md:grid-cols-2 gap-4 mb-2 md:mb-12">
            <div>
              {heading && (
                <h4 className="text-light text-32 md:text-40 bottomFade">
                  {heading}
                  {subHeading && (
                    <span className="text-gray-medium">{subHeading}</span>
                  )}
                </h4>
              )}
            </div>

            {description && (
              <div className="flex flex-col justify-end items-end gap-2 bottomFade">
                <p className="text-gray-medium text-base">{description}</p>
              </div>
            )}
          </div>
        </div>
        {/* tabs */}
        <div ref={containerRef} className="relative block py-24">
          {/* tabbing tabs */}
          <div className="custom-container">
            <div className="border border-[#574D63] flex flex-row overflow-x-auto">
              {tabs.map((tab, index) => (
                <button
                  key={index}
                  ref={(el) => (buttonsRef.current[index] = el)}
                  className={`outline-none min-w-[168px] py-4 xl:py-8 px-5 text-center border-r border-[#574D63] inline-flex justify-center items-center text-white/40 transition-colors duration-300 `}
                >
                  <p className="text-xs font-light">{tab.label}</p>
                </button>
              ))}
            </div>
          </div>
          {/* tabs */}
          <div className="block relative mt-20 md:mt-14 xl:mt-24 w-full h-full tab-wrapper">
            <div className="relative mx-auto tab-block">
              {tabs.map((tab, index) => (
                <div
                  key={index}
                  ref={(el) => (slidesRef.current[index] = el)}
                  className="tab-slide"
                >
                  <img
                    src={tab.image}
                    alt={tab.label}
                    className="object-cover w-full h-full rounded-lg"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* ul li  */}
        <div className="relative pt-0">
          <div className="custom-container">
            <div className="grid grid-cols-12 gap-4">
              {functionsList.length > 0 && (
                <div className="col-span-6">
                  <div className="bg-tabbingCardGradient bg-no-repeat rounded-lg border border-[#2D2C3C] p-8">
                    {functionsTitle && (
                      <h5 className="text-light text-2xl md:text-32 mb-11 bottomFade">
                        {functionsTitle}
                      </h5>
                    )}

                    <ul className="text-gray-medium text-xs md:text-base pl-3 felx flex-col gap-3 lg:gap-4 multiParagraph">
                      {functionsList.map((item, idx) => (
                        <li key={idx} className="list-disc">{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              )} 
               {utilitiesList.length > 0 && (
                <div className="col-span-6">
                  <div className="bg-tabbingCardGradient bg-no-repeat rounded-lg border border-[#2D2C3C] p-8">
                    {utilitiesTitle && (
                      <h5 className="text-light text-2xl md:text-32 mb-11 bottomFade">
                        {utilitiesTitle}
                      </h5>
                    )}

                    <ul className="text-gray-medium text-xs md:text-base pl-3 felx flex-col gap-3 lg:gap-4 multiParagraph">
                      {utilitiesList.map((item, idx) => (
                        <li key={idx} className="list-disc">{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Managment;
