import attackers from "../../assets/attackers.png";
import Btn from "../../components/btn";
import { useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Attackers = () => {
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
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
              toggleActions: "play none none none",
            },
          }
        );
      });
    });

    return () => ctx.revert(); // cleanup on unmount
  }, []);
  return (
    <section className="relative pt-20">
      <div className="custom-container">
        <div className="xxl:pl-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-10 xl:gap-4">
            <div className="max-lg:order-2 lg:col-span-6 xl:col-span-5">
              <div className="flex flex-col gap-6 lg:gap-10">
                <h4 className="text-light text-32 xl:text-40 !leading-130 hidden md:block fade-bottom">
                  <span>Piégez les attaquants.</span>
                </h4>
                <h4 className="text-light text-32 xl:text-40 !leading-130 block md:hidden fade-bottom">
                  <span>Après un incident, réagissez vite.</span>
                </h4>

                <div className="flex items-center gap-3 fade-bottom">
                  <div className="w-18">
                    <Clock />
                  </div>
                  <p className="text-light text-base">
                    Installation clé en main en 24H.
                  </p>
                </div>

                <div className="flex flex-col gap-4 text-gray-medium text-xs md:text-sm xl:text-base description">
                  <p>
                    Installer une sonde NMS revient à laisser votre maison
                    grande ouverte, mettant en confiance les criminels, tout en
                    réagissant instantanément lorsqu&apos;ils passent le pas de
                    la porte.
                  </p>
                  <p>
                    Elle s&apos;appuie essentiellement sur la NDR (Network
                    Detection & Response) et la DPI (Deep Packet Inspection)
                    pour analyser en continu l&apos;ensemble du trafic réseau.
                  </p>
                  <p>
                    La sonde NMS utilise à la fois une détection par signatures
                    (avec des règles prédéfinies) et une analyse comportementale
                    avancée (pour repérer les attaques non référencées).
                  </p>
                  <p>
                    Elle agit également comme une Boîte Noire, en enregistrant
                    en continu les activités de votre réseau et en garantissant
                    une protection intégrale de vos données face aux tentatives
                    de suppression.
                  </p>
                </div>

                <div className="fade-bottom">
                  <Btn text="Testez NMS Sentinel" href="/" />
                </div>
              </div>
            </div>
            <div className="max-lg:order-1 lg:col-span-6 xl:col-span-7">
              <div className="h-full w-full xl:pl-16">
                <div className="border border-[#393535] rounded-lg h-full w-full ">
                  <img
                    src={attackers}
                    alt="image1"
                    className="object-cover rounded-lg h-full w-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Clock = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
    >
      <circle cx="9" cy="9" r="8.5" stroke="white" />
      <path
        d="M9 4.00049V10.0005L12 8.34172"
        stroke="white"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Attackers;
