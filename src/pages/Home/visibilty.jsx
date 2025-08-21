import React from "react";
import Btn from "../../components/btn";
import circle from "../../assets/circle-video.mp4";
import { useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const visibilityData = {
  title: "Pas de sécurité ",
  subtitle: "sans visibilité",
  paragraphs: [
    "Afin de prendre des mesures face aux attaques (bloquer, filtrer, contre-attaquer), vous devez commencer par les identifier.",
    "Ce qui n'est pas évident, car les hackers ciblent systématiquement les routeurs et les équipements pour interrompre les flux de données de sécurité, manipuler les journaux, et ainsi effacer toutes traces de leur passage.",
    "Toutes traces, ou presque…",
    "Grâce à une technologie DPI de pointe, provenant des Services de Renseignements, les solutions ORSEC Technologies parviennent à identifier et à comprendre toutes les anomalies présentes sur votre réseau.",
    "Passant de 175 jours de latence à…0.",
  ],
  buttonText: "Testez nos solutions",
  videoSrc: circle,
};

const Visibilty = () => {
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".card-detail *",
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: "power3.out",
          stagger: 0.3,
          scrollTrigger: {
            trigger: ".card-detail *",
            start: "top 75%",
            toggleActions: "play none none reverse",
          },
        }
      );
      gsap.utils.toArray(".fade-bottom").forEach((el) => {
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
              toggleActions: "play none none reverse",
            },
          }
        );
      });
    });

    return () => ctx.revert(); // cleanup on unmount
  }, []);

  return (
    <>
      <section className="relative pt-11 md:pt-10 pb-16 md:pb-14">
        <div className="custom-container">
          <div className="border border-[#2D2C3C] rounded-2xl backdrop-blur-[55px] bg-visibiltyGradient">
            <div className="grid grid-cols-12 md:gap-15">
              <div className="max-lg:order-2 col-span-12 lg:col-span-6 xxl:col-span-5">
                <div className="px-15 py-9 md:p-6 lg:p-8 xxl:p-12 lg:!pr-0">
                  <h4 className="text-light text-2xl md:text-26 lg:text-28 xl:text-32 leading-130 mb-4 md:mb-10 fade-bottom">
                    {visibilityData.title}
                    <span className="text-gray-medium">
                      {visibilityData.subtitle}
                    </span>
                  </h4>
                  <div className="flex flex-col gap-4 text-gray-medium text-xs md:text-base mb-6 text-justify card-detail">
                    {visibilityData.paragraphs.map((text, index) => (
                      <p key={index}>{text}</p>
                    ))}
                  </div>
                  <div className="fade-bottom">
                    <Btn text={visibilityData.buttonText} href="/" />
                  </div>
                </div>
              </div>
              <div className="max-lg:order-1 col-span-12 lg:col-span-6 xxl:col-span-7">
                <div className="h-full w-full flex justify-center items-center p-px lg:pr-px">
                  <video
                    className="object-contain rounded-2xl"
                    autoPlay
                    loop
                    muted
                  >
                    <source src={visibilityData.videoSrc} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Visibilty;
