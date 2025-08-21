import React, { useRef } from "react";
import { Link } from "react-router";
import plus from "../../assets/round-plus-with-bg.svg";
import solution3 from "../../assets/solution-card-3.svg";
import solution2 from "../../assets/solution-card-2.svg";
import solution1 from "../../assets/solution-card-1.svg";
import CustomCursor from "../../components/CustomCursor";
import { useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const solutions = [
  {
    image: solution1,
    linkUrl: "/sentinel",
    alt: "image-1",
    title: "NMS Sentinel",
    description:
      "NMS Sentinel est une solution permanente de détection et de protection. Elle est installée chez le client et comprend un Portail Saas ou On Premise, offrant une visibilité en temps réel et en toute autonomie.",
    tags: ["Grands Comptes", "ESN"],
  },
  {
    image: solution2,
    linkUrl: "/audit",
    alt: "image-2",
    title: "NMS Audit",
    description:
      "NMS Audit intervient ponctuellement dans les situations qui nécessitent une analyse détaillée et rapide, comme après un incident de sécurité - ou dans le cadre d'un examen de conformité.",
    tags: ["PME", "ETI", "Grands Comptes"],
  },
  {
    image: solution3,
    linkUrl: "/shield",
    alt: "image-3",
    title: "NMS Shield",
    description:
      "Afin d'assurer la protection et l'efficacité de réseaux moyennants des capacités exceptionnelles, nous mettons à disposition une solution 100% personnalisée pouvant traiter des volumes de 10G à 100G.",
    tags: ["Sécurité Nationale", "Télécom", "Datacenter"],
  },
];

const Solutions = () => {
  const sectionRef = useRef(null);
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".solutionCard-detail *",
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: "power3.out",
          stagger: 0.3,
          scrollTrigger: {
            trigger: ".solutionCard-detail *",
            start: "top 75%",
            toggleActions: "play none none reverse",
          },
        }
      );
      gsap.utils.toArray(".solutioFade-bottom").forEach((el) => {
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
    <section
      ref={sectionRef}
      className="relative pb-12 md:pb-10 pt-16 md:pt-14"
    >
      <CustomCursor targetRef={sectionRef} size={50} color="white" />

      <div className="custom-container">
        <div className="mb-10">
          <h5 className="text-light text-2xl md:text-26 lg:text-28 xl:text-32 leading-130 solutioFade-bottom">
            Découvrez nos solutions
          </h5>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {solutions.map((solution, index) => (
            <div key={index} className="relative flex flex-col gap-6 group">
              <div className="relative p-6 border bordre-white rounded-10 transition-all duration-300">
                <div className="absolute top-6 right-6 z-6">
                  <Link to={solution.linkUrl} className="size-10">
                    <img
                      src={plus}
                      alt="plus"
                      className="w-full h-full hover:opacity-70 transition-all duration-300"
                    />
                  </Link>
                </div>

                <div className="relative h-56 sm:h-80 md:h-96 lg:h-[409px] flex justify-center items-center">
                  <img
                    src={solution.image}
                    alt={solution.alt}
                    className="object-contain max-h-52 md:max-h-64 xl:max-h-72"
                  />
                </div>

                <div className="absolute bottom-6 right-6">
                  <div className="flex flex-wrap justify-end gap-2">
                    {solution.tags.map((tag, tagIndex) => (
                      <button
                        key={tagIndex}
                        className="p-2 border border-white/20 rounded-lg bg-[#1E1E1E] text-light text-10 xl:text-sm hover:bg-primary-dark transition-all duration-300"
                      >
                        {tag}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-4 solutionCard-detail">
                <p className="text-light text-[19px] !leading-tight">
                  {solution.title}
                </p>
                <p className="text-gray-medium text-xs lg:text-sm xxl:text-base ">
                  {solution.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solutions;
