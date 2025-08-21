import React from "react";
import Btn from "../../components/btn";
import machine from "../../assets/shield-page-hero-machine.webp";
// import bg from "../../assets/hield-page-hero-bg.webp";
import LightRays from "../../components/animationComp/Rays";
import { useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray(".hero-main-title").forEach((el) => {
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
    <section className="relative -mt-[68px] lg:-mt-20 md:min-h-screen flex items-center justify-center pb-36 pt-36 md:pb-28 lg:pt-36 lg:pb-32">
      {/* content */}
      <div className="custom-container">
        <div className="w-full max-w-[1230px] mx-auto">
          <div className="h-full flex max-md:flex-col-reverse items-center max-md:gap-6">
            <div className="w-full md:max-w-96 lg:max-w-lg xl:max-w-2xl">
              <img
                src={machine}
                alt="machine"
                className="object-cover h-full w-full"
              />
            </div>
            <div className="w-full md:max-w-md xl:max-w-xl lg:px-5 text-center">
              <div className="flex flex-col justify-center items-center gap-6 xl:gap-10">
                <h1 className="text-light text-32 md:text-5xl lg:text-6xl xl:text-7xl leading-130 font-bold hero-main-title">
                  <span>NMS Shield</span>
                </h1>

                <div className="space-y-2 text-light text-xs md:text-xl lg:text-2xl fade-text">
                  <p>
                    L&apos;outil de cyberdéfense le plus avancé pour les
                    Datacenters, les Opérateurs et les Gouvernements.
                  </p>
                </div>

                <div className="absolute max-md:bottom-20 md:relative flex justify-center fade-text">
                  <Btn text="Testez NMS Shield" href="/" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* background effect */}
      <LightRays
        raysOrigin="left"
        raysColor="#8D3BEB"
        raysSpeed={0.2}
        lightSpread={0.9}
        rayLength={2}
        followMouse={true}
        mouseInfluence={1}
        noiseAmount={0}
        distortion={2}
        className="custom-rays -mt-2"
      />
      {/* gradient */}
      <div className="absolute bottom-0 w-full h-36 -z-1 bg-bottomGradient bg-no-repeat"></div>
    </section>
  );
};

export default Hero;
