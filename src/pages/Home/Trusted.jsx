import React from "react";
import trusted1 from "../../assets/trusted1.svg";
import trusted2 from "../../assets/trusted2.svg";
import trusted3 from "../../assets/trusted3.svg";
import trusted4 from "../../assets/trusted4.svg";
import trusted5 from "../../assets/trusted5.svg";
import trusted6 from "../../assets/trusted6.svg";
import { useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Trusted = () => {
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".bottomFade",
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          stagger: 0.2,
          scrollTrigger: {
            trigger: ".bottomFade",
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );

      gsap.fromTo(
        ".logo-item",
        { opacity: 0, scale: 0.8 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.8,
          ease: "power2.out",
          stagger: 0.15,
          scrollTrigger: {
            trigger: ".logo-item",
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });

    return () => ctx.revert();
  }, []);
  return (
    <section className="relative pt-16 pb-16 md:pb-20 xl:pb-24 xxl:pb-28">
      <div className="custom-container">
        <div className="mb-12">
          <h6 className="text-light text-32 leading-130 bottomFade overflow-hidden">
            Ils nous ont confié leur sécurité
          </h6>
        </div>
        <div className="flex max-md:flex-wrap justify-between items-center max-[389px]:gap-4 gap-10 lg:gap-16 xl:gap-24 md:h-[85px]">
          <div className="max-[389px]:size-28 max-sm:size-32 sm:w-1/3 md:w-1/6 flex justify-center items-center logo-item">
            <img src={trusted1} alt="trusted" className="object-contain" />
          </div>
          <div className="max-[389px]:size-28 max-sm:size-32 sm:w-1/3 md:w-1/6 flex justify-center items-center logo-item">
            <img src={trusted2} alt="trusted" className="object-contain" />
          </div>
          <div className="max-[389px]:size-28 max-sm:size-32 sm:w-1/3 md:w-1/6 flex justify-center items-center logo-item">
            <img src={trusted3} alt="trusted" className="object-contain" />
          </div>
          <div className="max-[389px]:size-28 max-sm:size-32 sm:w-1/3 md:w-1/6 flex justify-center items-center logo-item">
            <img src={trusted4} alt="trusted" className="object-contain" />
          </div>
          <div className="max-[389px]:size-28 max-sm:size-32 sm:w-1/3 md:w-1/6 flex justify-center items-center logo-item">
            <img src={trusted5} alt="trusted" className="object-contain" />
          </div>
          <div className="max-[389px]:size-28 max-sm:size-32 sm:w-1/3 md:w-1/6 flex justify-center items-center logo-item">
            <img src={trusted6} alt="trusted" className="object-contain" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Trusted;
