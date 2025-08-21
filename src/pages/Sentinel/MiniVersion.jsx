import React from "react";
import miniS from "../../assets/mini-sentinelle.png";
import Btn from "../../components/btn";
const MiniVersion = () => {
  return (
    <section className="relative z-2 mt-20 mb-48 md:mb-0 xl:-mb-20">
      <div className="custom-container">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-14 lg:gap-10 xl:gap-4">
          <div className="md:col-span-5">
            <div className="h-full  w-full flex md:justify-center md:items-center">
              <h5 className="text-light text-32 md:text-4xl xxl:text-40 !leading-tight animated-title">
                <span>Existe en</span> <br />
                <span>version mini</span>
              </h5>
            </div>
          </div>
          <div className="md:col-span-7">
            <div className="h-full w-full xl:pl-16">
              <div className="bg-miniGradient rounded-2xl border border-[#2D2C3C] py-16 md:py-10 xl:py-16 px-5 lg:px-10 xl:px-14">
                <div className="w-full mb-14 lg:mb-20">
                  <img
                    src={miniS}
                    alt="image1"
                    className="object-cover w-full"
                  />
                </div>

                <ul className="space-y-2 my-9 multiParagraph pl-7">
                  <li className="text-gray-medium text-base list-disc">
                    Vision 360 sur tout votre réseau
                  </li>
                  <li className="text-gray-medium text-base list-disc">
                    Solutions indétectables par les hackers
                  </li>
                  <li className="text-gray-medium text-base list-disc">
                    Informations recevables devant la justice
                  </li>
                  <li className="text-gray-medium text-base list-disc">
                    Moteur DPI 100% propriétaire (pas Open Source)
                  </li>
                  <li className="text-gray-medium text-base list-disc">
                    Des millions d&apos;attaques identifiées et bloquées / mois
                  </li>
                </ul>
                <div className="bottomFade">
                  <Btn text="Testez NMS Sentinel" href="/" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MiniVersion;
