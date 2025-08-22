import React from "react";
// import bg from "../../assets/sentinel-bg.webp";
import machine from "../../assets/sentinel-machine.png";
import Btn from "../../components/btn";
import LightRays from "../../components/animationComp/Rays";
import { useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray(".sential-main-title").forEach((el) => {
        gsap.fromTo(
          el,
          { opacity: 0, filter: "blur(10px)", y: 30 },
          {
            opacity: 1,
            filter: "blur(0px)",
            y: 0,
            duration: 1,
            delay: 1.6,
            ease: "power3.out",
            stagger: 0.1,
          }
        );
      });
      gsap.fromTo(
        ".fade-text",
        { y: "100%", opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 2,
          ease: "power3.out",
          stagger: 0.2,
        }
      );
      gsap.fromTo(
        ".product-image",
        { marginTop: -80, opacity: 0 },
        {
          marginTop: 0,
          opacity: 1,
          duration: 1,
          delay: 3,
          ease: "bounce.out",
          stagger: 0.2,
        }
      );
    });

    return () => ctx.revert();
  }, []);
  return (
    <section className="relative mim-h-screen pt-52 -mt-[68px] lg:-mt-20">
      {/* content */}
      <div className="custom-container">
        <div className="w-full max-w-[810px] mx-auto">
          <div className="flex flex-col justify-center items-center gap-6 xl:gap-9 text-center">
            <h1 className="text-light text-32 md:text-5xl lg:text-6xl xl:text-7xl leading-130 font-bold sential-main-title">
              <span>NMS Sentinel</span>
            </h1>

            <div className="space-y-2 text-light text-xs md:text-xl lg:text-2xl fade-text">
              <p>
                Soyez alerté des menaces en temps réel, pour protéger vos
                données des fuites et des suppressions.
              </p>
            </div>
            <div className="fade-text">
              <Btn text="Testez NMS Sentinel" href="/" />
            </div>
          </div>
        </div>

        <div className="w-full max-w-[940px] mx-auto h-80 md:h-96 xl:h-[530px] px-10 mt-10 product-image">
          <img src={machine} alt="icon" className="w-full h-full" />
        </div>
      </div>

      <LightRays
        raysOrigin="top-center"
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
      <div className="absolute bottom-0 w-full h-64 z-2 bg-bottomGradient bg-no-repeat"></div>
    </section>
  );
};

export default Hero;
