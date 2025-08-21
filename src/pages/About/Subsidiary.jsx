import { Link } from "react-router";
import subsidiary_img from "../../assets/subsidiary-img.jpg";

const Subsidiary = () => {
  return (
    <section className="pb-16 lg:pb-20">
      <div className="custom-container">
        <div className="flex flex-wrap flex-col lg:flex-row-reverse gap-8 lg:gap-16">
          <div className="flex-1">
            <img
              src={subsidiary_img}
              alt="subsidiary-image"
              className="w-full max-w-full h-full min-h-80 object-cover rounded-lg"
            />
          </div>
          <div className="flex-1">
            <div className="flex flex-wrap flex-col gap-6">
              <h2 className="text-light text-2xl md:text-32 lg:text-40 leading-130 animated-title">
                <span>
                  Filiale du Groupe
                  <p className="inline-block text-gray-light">SYLink</p>
                </span>
              </h2>
              <div className="flex flex-wrap flex-col gap-4 text-base text-gray-medium leading-150 bottomFade">
                <p className="leading-[inherit]">
                  L'acquisition d'ORSEC Technologies par le
                  <Link className="text-white">Groupe SYLink</Link>, annoncée le
                  26 février 2024, marque une étape significative dans
                  l'industrie de la cybersécurité française. Cette intégration
                  stratégique renforce la position de SYLink en tant que leader
                  innovant, en ajoutant les sondes DPI d'ORSEC, spécialisées
                  dans la détection de menaces et l'analyse de trafic réseau, à
                  son portefeuille. Cette collaboration promet d'enrichir
                  l'offre de SYLink avec des technologies avancées pour la
                  classification et le décodage des protocoles et applications
                  réseau, essentielles pour une analyse approfondie et la
                  prévention des cyberattaques. Avec l'appui de plus de 350
                  partenaires à travers la France, SYLink étend son influence et
                  son efficacité, promettant une valeur ajoutée significative
                  pour ses clients grâce à cette synergie.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Subsidiary;
