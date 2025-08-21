import blocks from "../../assets/blocks.webp";
import blocksM from "../../assets/blocks-mobile.webp";
import blocksT from "../../assets/blocks-tablet.webp";
import blocksST from "../../assets/blocks-tablet-small.webp";
import { useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray(".main-title").forEach((el) => {
        gsap.fromTo(
          el,
          { filter: "blur(10px)", y: 28 },
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
      gsap.utils.toArray(".blur-text").forEach((el) => {
        gsap.fromTo(
          el,
          { filter: "blur(10px)", x: -15 },
          {
            filter: "blur(0px)",
            x: 0,
            duration: 1.2,
            delay: 1.6,
            ease: "power3.out",
            stagger: 0.1,
          }
        );
      });
    });

    return () => ctx.revert();
  }, []);
  return (
    <>
      <section className="relative lg:h-[900px] xl:h-[1150px] -mt-[68px] lg:-mt-20s">
        {/* content top */}
        <div className="absolute top-0 lg:relative h-full w-full max-w-screen-lg xl:max-w-screen-xl xxl:max-w-screen-xxl mx-auto">
          <div className="custom-contaier">
            <div className="relative z-5 w-full max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-5xl xxl:max-w-6xl mx-auto text-center max-sm:px-5 pt-28 md:pt-36 xl:pt-44">
              <h1 className="relative text-light text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl xxl:text-40 !leading-130 main-title">
                <span className="!inline-flex items-center">
                  <span className="inline-block text-gray-light">
                    Identifiez les intrusions&nbsp;
                  </span>{" "}
                  sur votre réseau, grâce à des
                </span>
                <br />
                <span>solutions venant des Services de Renseignements.</span>
              </h1>
            </div>
          </div>
          <div className="hidden lg:block">
            <div className="absolute top-1/2 translate-y-20 xl:translate-y-28 left-10 xl:left-20 z-5">
              <div className="w-full max-w-64 xl:max-w-80 xxl:max-w-[349px]">
                <div className="border-l border-accent-dark p-4 xl:p-6 backdrop-blur-md">
                  <p className="text-light text-base xl:text-lg xxl:text-22 blur-text">
                    Surveillance en temps réel, autonome et permanente.
                  </p>
                </div>
              </div>
            </div>
            <div className="absolute top-1/2 translate-y-20 xl:translate-y-28 left-1/2 -translate-x-24 z-5">
              <div className="w-full max-w-64 xl:max-w-80 xxl:max-w-[349px]">
                <div className="border-l border-accent-dark p-4 xl:p-6 backdrop-blur-md">
                  <p className="text-light text-base xl:text-lg xxl:text-22 blur-text">
                    Analyse rapide post-incident et conformité.
                  </p>
                </div>
              </div>
            </div>
            <div className="absolute top-1/2 translate-y-24 xl:translate-y-32 right-3 xl:right-14 z-5">
              <div className="w-full max-w-64 xl:max-w-80 xxl:max-w-[366px]">
                <div className="border-l border-accent-dark p-4 xl:p-6 backdrop-blur-md">
                  <p className="text-light text-base xl:text-lg xxl:text-22 blur-text">
                    Protection sur mesure pour réseaux haute performance.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* blocks images */}
        <div className="relative lg:absolute lg:top-0 lg:left-1/2 lg:-translate-x-1/2 lg:-z-1  w-full lg:max-w-screen-lg xl:max-w-screen-xl xxl:max-w-screen-xxl max-lg:mx-auto h-[588px] md:h-[820px] lg:h-[900px] xl:h-[1150px]">
          <img
            src={blocks}
            alt="icon"
            className="object-cover h-full w-full hidden lg:block"
          />
          <img
            src={blocksT}
            alt="icon"
            className="object-cover h-full w-full hidden md:block lg:hidden"
          />
          <img
            src={blocksST}
            alt="icon"
            className="object-cover h-full w-full hidden sm:block md:hidden"
          />
          <img
            src={blocksM}
            alt="icon"
            className="h-full w-full block sm:hidden"
          />
        </div>

        {/* bacground gradien RIGHT side */}
        <div className="absolute inset-0 h-full w-full lg:max-w-screen-lg xl:max-w-screen-xl xxl:max-w-screen-xxl mx-auto">
          <div
            className="h-full w-10 absolute left-auto right-0 bottom-0"
            style={{
              background: `linear-gradient(90deg, #0000 0%, #000 100%)`,
            }}
          ></div>
          {/* bacground gradien LEFT side */}
          <div
            className="h-full w-10 absolute left-0 right-auto bottom-0"
            style={{
              background: `linear-gradient(90deg, #000 0%, #00000000 100%)`,
            }}
          ></div>
        </div>

        {/* background color */}
        <div className="absolute inset-0 -z-2 bg-black"></div>

        {/* bacground gradien TOP side */}
        <div
          className="w-full h-72 absolute top-0"
          style={{
            background: `linear-gradient(180deg, #02030C 50%, rgba(2, 3, 12, 0.00) 100%)`,
          }}
        ></div>

        {/* bacground gradien BOTTOM side */}
        <div
          className="w-full h-60 md:h-10 lg:h-56 xxl:h-64 absolute bottom-0"
          style={{
            background: `linear-gradient(180deg, rgba(2, 3, 12, 0.00) -2%, #02030C 47%)`,
          }}
        ></div>
      </section>
    </>
  );
};

export default Hero;
