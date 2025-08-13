import { useEffect, useLayoutEffect, useRef, useState } from "react";
import "./managment.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

// Register the plugin before using
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
  const [activeTab, setActiveTab] = useState(0);
  const sectionRef = useRef(null);
  const slidesRef = useRef([]);

  // GSAP scroll trigger
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: `+=${tabs.length * 100}%`,
          scrub: 0.7,
          pin: true,
          onUpdate: (self) => {
            const progress = self.progress;
            const activeIndex = Math.min(
              tabs.length - 1,
              Math.floor(progress * tabs.length)
            );
            setActiveTab(activeIndex);
          },
        },
      });

      tabs.forEach((_, index) => {
        const currentSlide = slidesRef.current[index];
        gsap.set(currentSlide, {
          position: "absolute",
          left: "50%",
          xPercent: -50,
        });

        if (index === 0) {
          // First slide visible immediately
          gsap.set(currentSlide, {
            y: "0%",
            rotateX: 0,
            opacity: 1,
          });
        } else {
          // Animate other slides normally
          tl.fromTo(
            currentSlide,
            {
              y: "100%",
              rotateX: -30,
              opacity: 0,
              transformOrigin: "center bottom",
            },
            {
              y: "0%",
              rotateX: 0,
              opacity: 1,
              duration: 1,
              ease: "power2.out",
            },
            `+=0.001`
          );
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [tabs]);

  // Animate stack on activeTab change
  useEffect(() => {
    slidesRef.current.forEach((slide, index) => {
      const diff = activeTab - index;

      if (diff >= 0 && diff <= 3) {
        gsap.to(slide, {
          zIndex: tabs.length - diff,
          top: `-${diff * 10}px`,
          width: `${100 - diff * 2}%`,
          opacity: 1,
          duration: 0.5,
          ease: "power2.out",
        });
      } else {
        gsap.to(slide, { opacity: 0, duration: 0.3 });
      }
    });
  }, [activeTab, tabs.length]);
  // Click handler for tabs
  const handleTabClick = (index) => {
    if (index === activeTab) return;
    setActiveTab(index);
  };
  return (
    <>
      <section className="relative py-28 overflow-hidden">
        <div className="custom-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-2 md:mb-12">
            <div>
              {heading && (
                <h4 className="text-light text-32 md:text-40">
                  {heading}
                  {subHeading && (
                    <span className="text-gray-medium"> {subHeading}</span>
                  )}
                </h4>
              )}
            </div>

            {description && (
              <div className="flex flex-col justify-end items-end gap-2">
                <p className="text-gray-medium text-base">{description}</p>
              </div>
            )}
          </div>
        </div>
        <div ref={sectionRef} className="relative block py-24">
          {/* tabbing tabs */}
          <div className="custom-container">
            <div className="border border-[#574D63] flex flex-row overflow-x-auto">
              {tabs.map((tab, index) => (
                <button
                  key={index}
                  onClick={() => handleTabClick(index)}
                  className={`outline-none min-w-[168px] py-4 xl:py-8 px-5 text-center border-r border-[#574D63] inline-flex justify-center items-center transition-colors duration-300 ${
                    activeTab === index
                      ? "bg-[#574D63] text-white"
                      : "text-white/40 hover:text-white"
                  }`}
                >
                  <p className="text-xs font-light">{tab.label}</p>
                </button>
              ))}
            </div>
          </div>
          {/* tabs */}
          <div className="block relative pt-20 md:pt-14 xl:pt-24 w-full tab-wrapper">
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
        {functionsList === "" && utilitiesList === "" && (
          <div className="relative pt-14 md:pt-20 xxl:pt-24">
            <div className="custom-container">
              <div className="grid grid-cols-12 gap-4">
                {functionsList === "" && (
                  <div className="col-span-6">
                    <div className="bg-tabbingCardGradient bg-no-repeat rounded-lg border border-[#2D2C3C] p-8">
                      {functionsTitle && (
                        <h5 className="text-light text-2xl md:text-32 mb-11">
                          {functionsTitle}
                        </h5>
                      )}

                      <ul className="text-gray-medium text-xs md:text-base felx flex-col gap-3 lg:gap-4">
                        {functionsList.map((item, idx) => (
                          <li key={idx}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
                {utilitiesList === "" && (
                  <div className="col-span-6">
                    <div className="bg-tabbingCardGradient bg-no-repeat rounded-lg border border-[#2D2C3C] p-8">
                      {utilitiesTitle && (
                        <h5 className="text-light text-2xl md:text-32 mb-11">
                          {utilitiesTitle}
                        </h5>
                      )}

                      <ul className="text-gray-medium text-xs md:text-base felx flex-col gap-3 lg:gap-4">
                        {utilitiesList.map((item, idx) => (
                          <li key={idx}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </section>
    </>
  );
};

export default Managment;
