import React from "react";
import ids from "../../assets/ids.svg";
import dpi from "../../assets/dpi.svg";

const securityData = [
  {
    id: 1,
    title: "IDS (détection d’intrusion de système)",
    description:
      "Un IDS, c'est comme un facteur qui vérifie l'expéditeur et le destinataire des courriers sans ouvrir les lettres, pour détecter les envois suspects sans bloquer le trafic.",
    imageSrc: ids, // Replace with your actual image path
  },
  {
    id: 2,
    title: "DPI (Deep Packet inspection)",
    description:
      "Un DPI, c'est comme un facteur qui ouvre les lettres pour lire leur contenu et vérifier qu'il n'y a rien de dangereux ou interdit à l'intérieur.",
    imageSrc: dpi, // Replace with your actual image path
  },
];

const Technologies = () => {
  return (
    <section className="pb-11 md:pb-10 pt-14 md:pt-16 xl:pt-24">
      <div className="custom-container">
        <div className="grid grid-cols-12 max-sm:gap-6 mb-8 md:mb-12">
          <div className="col-span-12 md:col-span-6">
            <p className="text-gray-medium text-base bottomFade">[Fonction]</p>
          </div>
          <div className="col-span-12 md:col-span-6">
            <div className="lg:pr-10 xl:pr-24 xxl:pr-44">
              <h3 className="text-light text-2xl md:text-26 lg:text-28 xl:text-32 leading-130 bottomFade">
                Comment fonctionnent les DPI, à l&apos;origine des solutions{" "}
                <span className="text-muted">ORSEC Technologies ?</span>
              </h3>
            </div>
          </div>
        </div>
        <div className="grid sm:grid-cols-12 gap-8 sm:gap-15">
          {securityData.map((item) => (
            <div key={item.id} className="sm:col-span-6">
              <div className="relative h-full flex flex-col gap-6">
                <div className="h-72 md:h-80 xl:h-[396px] border border-[#2D2C3C] bg-techGradient rounded-lg flex justify-center items-center p-14 sm:p-10 lg:p-20 xl:p-16">
                  <img
                    src={item.imageSrc}
                    alt={item.title}
                    className="object-contain"
                  />
                </div>
                <div className="flex flex-col gap-2 multiParagraph">
                  <h3 className="text-light text-lg md:text-xl xxl:text-23">
                    {item.title}
                  </h3>
                  <div className="hidden md:block">
                    <p className="text-gray-medium text-sm xl:text-base !leading-130">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
          {/* <div className="sm:col-span-6">
            <div className="relative h-full flex flex-col gap-6">
              <div className="h-72 md:h-80 xl:h-[396px] border border-[#2D2C3C] bg-techGradient rounded-lg flex justify-center items-center p-14 sm:p-10 lg:p-20 xl:p-16">
                <img src={ids} alt="ids" className="object-contain" />
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-light text-lg md:text-xl xxl:text-23 ">IDS (détection d’intrusion de système)</h3>
                <div className="hidden md:block">
                  <p className="text-gray-medium text-sm xl:text-base  !leading-130">
                    Un IDS, c&apos;est comme un facteur qui vérifie
                    l&apos;expéditeur et le destinataire des courriers sans
                    ouvrir les lettres, pour détecter les envois suspects sans
                    bloquer le trafic.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="sm:col-span-6">
            <div className="relative h-full flex flex-col gap-6">
              <div className="h-72 md:h-80 xl:h-[396px] border border-[#2D2C3C] bg-techGradient rounded-lg flex justify-center items-center p-14 sm:p-10 lg:p-20 xl:p-16">
                <img src={dpi} alt="dpi" className="object-contain" />
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-light text-lg md:text-xl xxl:text-23 ">DPI (Deep Packet inspection)</h3>
                <div className="hidden md:block">
                  <p className="text-gray-medium text-sm xl:text-base  !leading-130">
                    Un DPI, c&apos;est comme un facteur qui ouvre les lettres
                    pour lire leur contenu et vérifier qu&apos;il n&apos;y a
                    rien de dangereux ou interdit à l&apos;intérieur.
                  </p>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Technologies;
