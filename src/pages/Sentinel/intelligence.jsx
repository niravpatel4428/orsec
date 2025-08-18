import React from "react";
import icon1 from "../../assets/intelligence1.svg";
import icon2 from "../../assets/intelligence2.svg";
import icon3 from "../../assets/intelligence3.svg";
import icon4 from "../../assets/intelligence4.svg";
import icon5 from "../../assets/intelligence5.svg";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

const cards = [
  {
    id: 1,
    num: "01",
    title: "Collecter",
    desc: "On ne protège pas ce qu'on ne voit pas. Nos sondes captent tout, en continu.",
    icon: icon1,
  },
  {
    id: 2,
    num: "02",
    title: "Analyser",
    desc: "Une hausse de trafic à 2h12 ? Un comportement qui dévie ? On identifie chaque signal faible...",
    icon: icon2,
  },
  {
    id: 3,
    num: "03",
    title: "Évaluer",
    desc: "Chaque alerte passe au crible. On fait la différence entre une fausse alerte et une vraie menace...",
    icon: icon3,
  },
  {
    id: 4,
    num: "04",
    title: "Corréler",
    desc: "Un événement isolé n’a aucun sens. Mais mis en relation avec d’autres...",
    icon: icon4,
  },
  {
    id: 5,
    num: "05",
    title: "Interpréter",
    desc: "Comprendre, c’est aller plus loin que constater. On identifie les tactiques adverses. Les intentions. Et les risques concrets pour votre entreprise.",
    icon: icon5,
  },
  {
    id: 6,
    num: "04",
    title: "Corréler",
    desc: "Un événement isolé n’a aucun sens. Mais mis en relation avec d’autres...",
    icon: icon4,
  },
  {
    id: 7,
    num: "03",
    title: "Évaluer",
    desc: "Chaque alerte passe au crible. On fait la différence entre une fausse alerte et une vraie menace...",
    icon: icon3,
  },
  {
    id: 8,
    num: "04",
    title: "Corréler",
    desc: "Un événement isolé n’a aucun sens. Mais mis en relation avec d’autres...",
    icon: icon4,
  },
];

const Intelligence = () => {
  const [sliderRef] = useKeenSlider({
    loop: true,

    mode: "free-snap",
    slides: {
      perView: 4.2,
      spacing: 16,
    },

    breakpoints: {
      "(max-width: 1024px)": {
        slides: { perView: 3.4, spacing: 16 },
      },
      "(max-width: 1023px)": {
        slides: { perView: 2.2, spacing: 16 },
      },
      "(max-width: 640px)": {
        slides: { perView: 1.8, spacing: 16 },
      },
      "(max-width: 480px)": {
        slides: { perView: 1.2, spacing: 16 },
      },
    },
  });

  return (
    <>
      {/* slider style */}
      <style>
        {`
        .keen-slider .keen-slider__slide:nth-child(even) {
          margin-top: 94px;
        }
      `}
      </style>

      <section className="relative pt-24 md:pt-24 mb-20">
        <div className="custom-container">
          <div className="grid col-span-1 lg:grid-cols-12 xxl:pl-6 mb-16 xl:mb-20">
            <div className="lg:col-span-12">
              <h4 className="text-light text-32 xl:text-40 !leading-130 animated-title">
                <span> Notre méthode s&apos;inspire du cycle</span> <br />{" "}
                <span> traditionnel du renseignement.</span>
                <span className="text-gray-light uppercase"> COMINT</span>
              </h4>
            </div>
          </div>
        </div>
        <div className="pl-4 sm:pl-6">
          <div className="max-w-full sm:pl-[calc(50vw-310px)] md:pl-[calc(50vw-370px)] lg:pl-[calc(50vw-510px)] xl:pl-[calc(50vw-640px)] xxl:pl-[calc(50vw-690px)]">
            <div ref={sliderRef} className="keen-slider">
              {cards.map((card) => (
                <div key={card.id} className="keen-slider__slide group">
                  <div className="min-h-72 bg-neutral-dark group-hover:bg-gray-dark border border-[#574D63] rounded-2xl p-4 flex flex-col justify-between gap-10 transition-all duration-300">
                    <div className="w-7">
                      <img
                        src={card.icon}
                        alt={card.title}
                        className="object-contain"
                      />
                    </div>

                    <div className="flex flex-col">
                      <span className="text-white text-xs mb-2">
                        {card.num}
                      </span>
                      <h4 className="text-white text-[31px] mb-4">
                        {card.title}
                      </h4>
                      <p className="text-gray-400 text-base">{card.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Intelligence;
