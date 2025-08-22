import React from "react";
import observe from "../../assets/observe-video.gif";
import { useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const ObserveContent = ({ subTitle, description }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      <div className=""></div>
      <div className="">
        {subTitle && (
          <div className="max-w-md mb-6 lg:mb-9 xxl:mb-12">
            <h3 className="text-light text-lg md:text-xl xl:text-26 w-fit mx-auto bottomFade">
              {subTitle}
            </h3>
          </div>
        )}
        <div className="flex flex-col gap-3 lg:gap-4 text-gray-medium text-xs md:text-sm xl:text-base description">
          {description.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

const Observe = ({ title, subTitle, description, imageSrc }) => {
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray(".observe-bottom-fade").forEach((el) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 60 },
          {
            opacity: 1,
            y: 0,
            duration: 1.2,
            ease: "power3.out",
            stagger: 0.1,
            scrollTrigger: {
              trigger: el,
              start: "top 70%",
              toggleActions: "play none none none",
            },
          }
        );
        gsap.fromTo(
        ".description p",
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: "power3.out",
          stagger: 0.3,
          scrollTrigger: {
            trigger: ".description",
            start: "top 75%",
            toggleActions: "play none none none",
          },
        }
      );
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="relative mt-12 mb-24 md:mt-9 md:mb-24">
      <div className="custom-container">
        <div className="relative pt-48 md:pt-56 lg:pt-72 xxl:pt-363 max-w-[1234px] mx-auto">
          <div className="text-center mb-28 md:mb-20 lg:mb-28 xxl:mb-40">
            <h3
              className="text-light text-32 lg:text-40 !leading-130 observe-bottom-fade"
              dangerouslySetInnerHTML={{ __html: title }}
            />
          </div>

          <ObserveContent subTitle={subTitle} description={description} />
        </div>
      </div>
      <div className="absolute top-9 bottom-40 md:bottom-10 xxl:bottom-16 left-1/2 -translate-x-1/2 -z-1 w-full max-w-[1234px]">
        <img
          src={observe}
          alt="observe"
          className="object-cover h-full w-full"
        />
      </div>
      <div className="absolute top-9 bottom-40 md:bottom-10 xxl:bottom-16 left-1/2 -translate-x-1/2 right-0 -z-1 w-full max-w-[1234px] bg-observeGradient bg-no-repeat"></div>
    </section>
  );
};

export default Observe;
