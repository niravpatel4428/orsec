import React from "react";
import Btn from "../../components/btn";
import machine from "../../assets/audit-hero-machine.png";
import LightRays from "../../components/animationComp/Rays";
import { useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray(".about-main-title").forEach((el) => {
        gsap.fromTo(
          el,
          { filter: "blur(10px)", y: 30 },
          {
            filter: "blur(0px)",
            y: 0,
            duration: 1.2,
            delay: 1.6,
            ease: "power3.out",
            stagger: 0.1,
          }
        );
      });
      gsap.fromTo(
        ".fade-text",
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          delay: 1.9,
          ease: "power3.out",
          stagger: 0.2,
        }
      );
    });

    return () => ctx.revert();
  }, []);
  return (
    <section className="relative overflow-hidden md:min-h-screen flex items-center justify-center lg:min-h-screen pt-28 pb-20 md:pt-36 md:pb-28 lg:py-36  -mt-[68px] lg:-mt-20">
      <div className="custom-container">
        <div className="w-full max-w-[1180px] mx-auto">
          <div className="flex max-md:flex-col-reverse items-center max-md:gap-6">
            <div className="w-full max-w-96 sm:max-w-lg md:max-w-96 lg:max-w-lg xl:max-w-2xl">
              <img
                src={machine}
                alt="machine"
                className="object-cover h-full w-full"
              />
            </div>
            <div className="w-full md:max-w-md xl:max-w-xl lg:px-5 text-center">
              <div className="flex flex-col justify-center items-center gap-6 xl:gap-10">
                <h1 className="text-light text-32 md:text-5xl lg:text-6xl xl:text-7xl leading-130 font-bold about-main-title">
                  <span>NMS Audit</span>
                </h1>
                <div className="space-y-2 text-light text-xs md:text-xl lg:text-2xl fade-text">
                  <p>
                    Établissez une vue d&apos;ensemble instantanée de votre
                    réseau.
                  </p>
                </div>
                <div className="absolute max-sm:bottom-10 max-md:bottom-14 md:relative fade-text">
                  <Btn text="Testez NMS Audit" href="/" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* background effect */}
      <LightRays
        raysOrigin="bottom-center"
        raysColor="#8D3BEB"
        raysSpeed={1.5}
        lightSpread={1.2}
        rayLength={1.4}
        followMouse={true}
        mouseInfluence={0.7}
        noiseAmount={0}
        distortion={3}
        className="custom-rays -mt-2"
      />
      <div className="absolute bottom-0 w-full h-36 -z-1 bg-bottomGradient bg-no-repeat"></div>
    </section>
  );
};

export default Hero;
