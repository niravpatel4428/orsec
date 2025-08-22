import blocks from "../../assets/blocks-xxl.png";
import blocksT from "../../assets/blocks-xl.png";
import blocksLT from "../../assets/blocks-lg.png";
import blocksMD from "../../assets/blocks-md.png";
import blocksSM from "../../assets/blocks-sm.png";
import audit from "../../assets/audit.png";
import shield from "../../assets/shield.png";
import sentinel from "../../assets/sentinel.png";
import blocksM from "../../assets/blocks-mobile.png";
// import blocksST from "../../assets/blocks-tablet-small.webp";
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
            duration: 0.7,
            delay: 1.6,
            ease: "power3.out",
            stagger: 0.1,
          }
        );
      });
      gsap.utils.toArray(".blur-text").forEach((el) => {
        gsap.fromTo(
          el,
          { filter: "blur(10px)", x: -15, opacity: 0 },
          {
            filter: "blur(0px)",
            x: 0,
            opacity: 1,
            duration: 1.2,
            delay: 5,
            ease: "power3.out",
            stagger: 0.1,
          }
        );
      });
      const tl = gsap.timeline({ delay: 2.3 });
      gsap.utils.toArray(".product-item").forEach((el, i) => {
        tl.fromTo(
          el,
          { filter: "blur(50px)", y: -60, opacity: 0 },
          {
            filter: "blur(0px)",
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power3.out",
          },
          "+=0.1"
        );
      });
    });

    return () => ctx.revert();
  }, []);
  return (
    <>
      <section className="relative lg:h-[900px] xl:h-[1150px] -mt-[68px] lg:-mt-20 overflow-hidden">
        {/* content top */}
        <div className="absolute top-0 lg:relative h-full w-full max-w-screen-lg xl:max-w-screen-xl xxl:max-w-screen-xxl mx-auto">
          {/* title */}
          <div className="custom-contaier">
            <div className="relative z-5 w-full max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-5xl xxl:max-w-6xl mx-auto text-center max-sm:px-5 pt-28 md:pt-36 lg:pt-32 xl:pt-36 xxl:pt-44">
              <h1 className="relative text-light text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl xxl:text-40 !leading-130 main-title">
                <span className="inline-block text-gray-light">
                  Identifiez les intrusions&nbsp;
                </span>
                sur votre réseau, grâce à des
                <br className="max-md:hidden" />
                <span>solutions venant des Services de Renseignements.</span>
              </h1>
            </div>
          </div>
          {/* details */}
          <div className="hidden lg:block">
            <div className="absolute top-1/2 translate-y-36 xl:translate-y-28 left-20 xl:left-32 xxl:left-20 z-5">
              <div className="w-full max-w-64 xl:max-w-80 xxl:max-w-[349px]">
                <div className="border-l border-accent-dark p-4 xl:p-6 backdrop-blur-md">
                  <p className="text-light text-base xl:text-lg xxl:text-22 blur-text">
                    Surveillance en temps réel, autonome et permanente.
                  </p>
                </div>
              </div>
            </div>
            <div className="absolute top-1/2 translate-y-36 xl:translate-y-28 left-1/2 -translate-x-24 z-5">
              <div className="w-full max-w-64 xl:max-w-80 xxl:max-w-[349px]">
                <div className="border-l border-accent-dark p-4 xl:p-6 backdrop-blur-md">
                  <p className="text-light text-base xl:text-lg xxl:text-22 blur-text">
                    Analyse rapide post-incident et conformité.
                  </p>
                </div>
              </div>
            </div>
            <div className="absolute top-1/2 translate-y-40 xl:translate-y-32 right-9 xl:right-14 xxl:right-6 z-5">
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

        {/* products */}
        <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 z-3 w-full lg:max-w-screen-lg xl:max-w-screen-xl xxl:max-w-screen-xxl">
          <div className="w-full relative flex justify-between">
            <div className="absolute max-[499px]:mt-[8%] max-sm:mt-[4.5%] sm:top-14 md:top-10 xl:-top-6 xxl:-top-8 left-[12%] sm:left-16 lg:left-24 xl:left-40 xxl:left-32  w-[18%] sm:w-40 md:w-44 lg:w-64 xl:w-72 xxl:w-80 product-item">
              <img src={sentinel} alt="product" className="object-cover" />
            </div>
            <div className="absolute max-[499px]:mt-[-7%] max-sm:-mt-[9%] sm:-top-14 md:-top-20 lg:-top-36 xl:-top-56 xxl:-top-64 left-1/2 -ml-[8%] sm:-ml-16 lg:-ml-24 w-[20%] sm:w-40 md:w-44 lg:w-64 xl:w-72 xxl:w-80 product-item">
              <img
                src={audit}
                alt="product"
                className="object-cover"
                style={{ transform: "rotateY(180deg)" }}
              />
            </div>
            <div className="absolute max-[499px]:mt-[-4%] max-sm:-mt-[6%] sm:-top-8 md:-top-16 lg:-top-28 xl:-top-48 xxl:-top-52 right-[7%] sm:right-10 lg:right-12 xl:right-28 xxl:right-16 w-[20%] sm:w-40 md:w-44 lg:w-64 xl:w-72 xxl:w-80 product-item">
              <img
                src={shield}
                alt="product"
                className="object-cover"
                style={{ transform: "rotateY(180deg)" }}
              />
            </div>
          </div>
        </div>

        {/* stone images */}
        <div className="relative lg:absolute top-10 md:top-0 lg:top-20 xl:top-24 xxl:top-20 lg:left-1/2 lg:-translate-x-1/2 lg:-z-1 w-full md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl xxl:max-w-screen-xxl max-lg:mx-auto h-[588px] md:h-[820px] lg:h-[900px] xl:h-[1010px] xxl:h-[1100px]">
          <img
            src={blocks}
            alt="icon"
            className="object-cover h-full w-full hidden xxl:block"
          />
          <img
            src={blocksT}
            alt="icon"
            className="h-full w-full hidden xl:block xxl:hidden"
          />
          <img
            src={blocksLT}
            alt="icon"
            className="h-full w-full hidden lg:block xl:hidden"
          />
          <img
            src={blocksMD}
            alt="icon"
            className="h-full w-full hidden md:block lg:hidden"
          />
          <img
            src={blocksSM}
            alt="icon"
            className="h-full w-full hidden sm:block md:hidden"
          />
          <img
            src={blocksM}
            alt="icon"
            className="h-full w-full block sm:hidden"
          />
        </div>

        {/* background gradient RIGHT - LEFT side */}
        <div className="absolute inset-0 h-full w-full md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl xxl:max-w-screen-xxl mx-auto">
          <div
            className="h-full w-10 absolute left-auto right-0 bottom-0"
            style={{
              background: `linear-gradient(90deg, #0000 0%, #000 100%)`,
            }}
          ></div>
          {/* background gradient LEFT side */}
          <div
            className="h-full w-10 absolute left-0 right-auto bottom-0"
            style={{
              background: `linear-gradient(90deg, #000 0%, #00000000 100%)`,
            }}
          ></div>
        </div>

        {/* background gradient TOP side */}
        <div
          className="w-full h-72 absolute top-0"
          style={{
            background: `linear-gradient(180deg, #02030C 50%, rgba(2, 3, 12, 0.00) 100%)`,
          }}
        ></div>

        {/* bacground gradient BOTTOM side */}
        <div
          className="w-full h-44 md:h-10 lg:h-56 xxl:h-64 absolute bottom-0"
          style={{
            background: `linear-gradient(180deg, rgba(2, 3, 12, 0.00) -2%, #02030C 47%)`,
          }}
        ></div>

        {/* background color */}
        <div className="absolute inset-0 -z-2 bg-black"></div>
      </section>
    </>
  );
};

export default Hero;
