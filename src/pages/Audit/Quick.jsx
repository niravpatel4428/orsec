import React, { useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import img1 from "../../assets/Quick-img-1.png";
import Btn from "../../components/btn";

const images = [img1, img1, img1, img1, img1, img1];
const steps = [
  {
    number: "01",
    title: "Intervention",
    description:
      "Au moindre doute, contactez‑nous : un agent arrive en X h avec la valise.",
  },
  {
    number: "02",
    title: "Connexion",
    description:
      "Sur place, notre expert connecte la valise à un port miroir (SPAN) ou à un TAP ; la solution restant passive, sans agent ni déviation de trafic.",
  },
  {
    number: "03",
    title: "Analyse",
    description:
      "Une fois alimentée, la sonde capture en continu le trafic et agit comme une « boîte noire » invisible qui inspecte les paquets jusqu'à la couche 7.",
  },
  {
    number: "04",
    title: "Extraction",
    description:
      "Les données, stockées localement, se consultent via l'interface web ou s'exportent vers vos outils. À la fin de la mission, la valise est retirée sans laisser de trace.",
  },
];
const Quick = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel); // Track current slide index
    },
    created() {
      setLoaded(true);
    },
  });

  return (
    <section className="relative pt-14 md:pt-16 xl:pt-28">
      <div className="custom-container">
        <div className="md:pl-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 max-lg:gap-16 gap-15">
            <div className="max-lg:order-2 lg:col-span-6">
              <div className="flex flex-col gap-8 lg:gap-10 justify-center xl:py-3">
                <h4 className="text-light text-40 leading-130">
                  Après un incident, <br />
                  <span className="text-gray-light !leading-tight">
                    réagissez vite.
                  </span>
                </h4>

                <div className="grid grid-cols-1 lg:grid-cols-2">
                  {steps.map((step, index) => (
                    <div
                      key={index}
                      className="h-full py-2 lg:p-4 xxl:pr-14 flex flex-col gap-4 lg:border border-[#574D63]"
                    >
                      <div className="hidden lg:block space-y-2">
                        <span className="text-white text-xs">
                          {step.number}
                        </span>
                        <h4 className="text-white text-22">{step.title}</h4>
                      </div>
                      <div className="flex flex-col gap-2 text-gray-light text-sm xl:text-base">
                        <p>{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <Btn text="Testez NMS Audit" href="/" />
              </div>
            </div>
            <div className="max-lg:order-1 lg:col-span-6 lg:px-5 xxl:px-10">
              <div className="w-full h-full relative bg-[#111114] rounded-lg border border-[#393535] min-h-96">
                <div ref={sliderRef} className="keen-slider w-full h-full">
                  {images.map((image, idx) => (
                    <div
                      key={idx}
                      className="keen-slider__slide flex justify-end items-center"
                    >
                      <img
                        src={image}
                        alt={`img-${idx + 1}`}
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>

                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-full">
                  <div className="flex justify-center gap-2">
                    {loaded && instanceRef.current && (
                      <div className="flex gap-2">
                        {images.map((_, idx) => (
                          <button
                            key={idx}
                            onClick={() => {
                              instanceRef.current?.moveToIdx(idx);
                            }}
                            className={`dot rounded-full w-2 h-2 transition-all duration-300 ${
                              currentSlide === idx
                                ? "bg-[#676785]"
                                : "bg-[#3B3B4A]"
                            }`}
                          />
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Quick;
