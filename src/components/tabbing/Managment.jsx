import { useCallback, useEffect, useRef } from "react";
import "./managment.css";
import gsap from "gsap";
import { ScrollTrigger, ScrollToPlugin } from "gsap/all";
import { useLayoutEffect } from "react";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

// Tabbing Section
const Managment = ({
  clsPt,
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
  const currentIndexRef = useRef(0);

    useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray(".title-fade").forEach((el) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 60 },
          {
            opacity: 1,
            y: 0,
            duration: 1.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 70%",
              toggleActions: "play none none none",
            },
          }
        );
      });
    });

    return () => ctx.revert();
  }, []);

  // Slide-in animation (no fade — only movement + 3D)
  const animateToSlide = useCallback(
    (targetIndex) => {
      const slides = slidesRef.current;

      slides.forEach((slide, i) => {
        const isActive = i === targetIndex;
        const depth = targetIndex - i;

        if (isActive) {
          gsap.set(slide, { zIndex: tabs.length + 100 });
          gsap.to(slide, {
            opacity: 1,
            yPercent: 0,
            rotateX: 0,
            rotateY: 0,
            scale: 1,
            duration: 0.8,
            ease: "power4.out",
            overwrite: "auto",
          });
        } else if (depth > 0 && depth <= 2) {
          gsap.set(slide, { zIndex: tabs.length + 100 - depth });
          gsap.to(slide, {
            opacity: 1,
            rotateX: 0,
            rotateY: 0,
            yPercent: -depth * 5,
            scale: 1 - depth * 0.05,
            duration: 0.6,
            ease: "power2.out",
            overwrite: "auto",
          });
        } else if (depth < 0) {
          gsap.set(slide, { zIndex: tabs.length + 100 });
          gsap.to(slide, {
            opacity: 0,
            yPercent: 100,
            rotateX: -30,
            rotateY: -15,
            scale: 1,
            duration: 0.6,
            ease: "power2.inOut",
            overwrite: "auto",
          });
        } else {
          gsap.set(slide, { zIndex: i });
          gsap.to(slide, {
            opacity: 0,
            scale: 0.85,
            duration: 0.6,
            ease: "power2.out",
            overwrite: "auto",
          });
        }
      });
    },
    [tabs]
  );

  const setActiveTab = useCallback((index) => {
    buttonsRef.current.forEach((btn, j) => {
      btn.classList.toggle("text-white", j === index);
      btn.classList.toggle("text-white/40", j !== index);
    });
  }, []);

  useEffect(() => {
    const slides = slidesRef.current;

    slides.forEach((slide) => {
      gsap.set(slide, {
        opacity: 0,
        yPercent: 100,
        rotateX: -30,
        rotateY: -15,
        scale: 1,
        zIndex: 0,
        transformOrigin: "center center",
      });
    });

    animateToSlide(0);
    setActiveTab(0);

    const scrollTrigger = ScrollTrigger.create({
      trigger: containerRef.current,
      start: "top top",
      end: `+=${tabs.length * 100}%`,
      pin: true,
      pinSpacing: true,
      anticipatePin: 1,
      onUpdate: (self) => {
        const index = Math.round(self.progress * (tabs.length - 1));
        if (index !== currentIndexRef.current) {
          currentIndexRef.current = index;
          animateToSlide(index);
          setActiveTab(index);
        }
      },
    });

    scrollTrigger.update();

    buttonsRef.current.forEach((btn, i) => {
      btn.addEventListener("click", () => {
        currentIndexRef.current = i;
        animateToSlide(i);
        setActiveTab(i);

        gsap.to(window, {
          scrollTo: { y: containerRef.current, offsetY: 0 },
          duration: 0.8,
          ease: "power2.inOut",
        });
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, [tabs, animateToSlide, setActiveTab]);

  return (
    <>
      <section className={`relative ${clsPt} overflow-hidden`}>
        <div className="custom-container">
          <div className="relative grid grid-cols-1 md:grid-cols-12 gap-4 mb-2">
            <div className="md:col-span-7">
              {heading && (
                <h4 className="text-light text-32 xl:text-4xl xxl:text-40 !leading-130 title-fade">
                  {heading}
                  {subHeading && (
                    <span className="text-gray-medium">{subHeading}</span>
                  )}
                </h4>
              )}
            </div>

            <div className="md:col-span-5">
              {description && (
                <div className="h-full flex flex-col justify-end items-end gap-2 title-fade">
                  <p className="text-gray-medium text-base">{description}</p>
                </div>
              )}
            </div>
          </div>
        </div>
        {/* tabs */}
        <div
          ref={containerRef}
          className="relative flex flex-col gap-20 pt-20 pb-10 h-full"
        >
          {/* tabbing tabs */}
          <div className="custom-container">
            <div className="border border-[#574D63] flex flex-row overflow-x-auto">
              {tabs.map((tab, i) => (
                <button
                  key={i}
                  ref={(el) => (buttonsRef.current[i] = el)}
                  className={`outline-none min-w-[168px] py-4 xl:py-8 px-5 text-center border-r border-[#574D63] inline-flex justify-center items-center text-white/40 transition-colors duration-300 `}
                >
                  <p className="text-xs font-light">{tab.label}</p>
                </button>
              ))}
            </div>
          </div>
          {/* tabs */}
          <div className="tab-wrapper">
            <div className="block relative h-full mx-auto pt-20 xl:pt-24 tab-block">
              {tabs.map((tab, i) => (
                <div
                  key={i}
                  ref={(el) => (slidesRef.current[i] = el)}
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
        <div className="relative pt-8 h-full">
          <div className="custom-container">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
              {functionsList.length > 0 && (
                <div className="lg:col-span-6">
                  <div className="bg-tabbingCardGradient bg-no-repeat rounded-lg border border-[#2D2C3C] p-8">
                    {functionsTitle && (
                      <h5 className="text-light text-2xl md:text-32 mb-11 bottomFade">
                        {functionsTitle}
                      </h5>
                    )}

                    <ul className="text-gray-medium text-xs md:text-base pl-3 felx flex-col gap-3 lg:gap-4 multiParagraph">
                      {functionsList.map((item, idx) => (
                        <li key={idx} className="list-disc">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
              {utilitiesList.length > 0 && (
                <div className="lg:col-span-6">
                  <div className="bg-tabbingCardGradient bg-no-repeat rounded-lg border border-[#2D2C3C] p-8">
                    {utilitiesTitle && (
                      <h5 className="text-light text-2xl md:text-32 mb-11 bottomFade">
                        {utilitiesTitle}
                      </h5>
                    )}

                    <ul className="text-gray-medium text-xs md:text-base pl-3 felx flex-col gap-3 lg:gap-4 multiParagraph">
                      {utilitiesList.map((item, idx) => (
                        <li key={idx} className="list-disc">
                          {item}
                        </li>
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
