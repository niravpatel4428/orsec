import { useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Notices = () => {
  const infoList = [
    {
      title: "Informations générales",
      detail: [
        `ORSEC Technologies SAS (RCS Rennes n° 977 515 782), dont le siège social est 5 ALL DE LA GRANDE TREILLE, 35000 RENNES, Tel. : +33 02 19 00 20 40; crée, gère et développe un site ci-après désigné « Site Internet » ou « Portail Clients » et destiné aux publiques du réseau mondial, à savoir les personnes ayant un accès Internet par son fournisseur (FAI) et naviguant sur l'adresse suivante : https://*.orsec.ai/ ou https://*.orsec.net/ ou https://*.orsec.network/ . Toute connexion au « Site Internet » ou « Portail Clients » emporte de la part de la personne qui s'y connecte, et ci-après désignée « l'utilisateur », acceptation pleine et entière des conditions générales d'utilisation ci-après stipulées. ORSEC Technologies SAS se réserve le droit de modifier à tout moment les présentes Conditions Générales d'Utilisation, sans préavis. L'utilisateur est en conséquence invité à les consulter régulièrement.`,
      ],
    },
    {
      title: "Direction de publication",
      detail: [
        `Madame Malena Moreira, PDG. Siège social, ORSEC Technologies : 5 ALL DE LA GRANDE TREILLE, 35000 RENNES (FRANCE), Téléphone : +33 02 19 00 20 40`,
      ],
    },
    {
      title: "Hébergement",
      detail: [
        `OVH - SAS au capital de 10 069 020 €, RCS Lille Métropole 424 761 419, TVA : FR 22 424 761 419, Siège social : 2 rue Kellermann - 59100 Roubaix - France`,
        `O2switch - SAS au capital de 100 000 €, RCS Clermont Ferrand 510 909 807, TVA : FR 35 510 909 807, Siège social : Chemin des Pardiaux - 63000 Clermont-Ferrand - France`,
      ],
    },
    {
      title: "Propriété intellectuelle",
      detail: [
        `L'utilisation du « Site Internet » et / ou « Portail Clients » ne confère aucun droit à l'utilisateur. Ces droits restent la propriété exclusive de SYLink Technologie SAS et de ses partenaires. Tous les textes, photos, vidéos, données, affiches, logos, marques et autres éléments reproduits sur le « Site Internet » et / ou « Portail Clients » sont réservés et protégés par le droit de la propriété intellectuelle, notamment droits d'auteur, droits voisins, droits des marques. En conséquence, l'Utilisateur ne peut en aucun cas et d'aucune manière, reproduire, représenter, diffuser, commercialiser, modifier, concéder tout ou partie de l'un quelconque des éléments reproduits sur le « Site Internet » et / ou « Portail Clients » et tout ou partie du « Site Internet » et / ou « Portail Clients » en général, sans l'accord préalable et express de ORSEC Technologies SAS. Toute utilisation illicite de tout ou partie du Site (piratage, contrefaçon, etc.) pourra donner lieu à des poursuites.`,
      ],
    },
    {
      title: "Garantie",
      detail: [
        `Sous réserve des dispositions réglementaires applicables, l'utilisateur déclare accepter expressément et sans réserve que le « Site Internet » et / ou « Portail Clients » soit fourni en l'état, accessible en fonction de sa disponibilité et sans aucune garantie expresse ou implicite de la part de ORSEC Technologies SAS et que son utilisation se fasse aux risques et périls de l'utilisateur, sous l'entière responsabilité de ce dernier. ORSEC Technologies SAS ne garantit pas que (i) le « Site Internet » et / ou « Portail Clients », les contenus et produits proposés répondront parfaitement aux besoins de l'utilisateur, (ii) le « Site Internet » et / ou « Portail Clients » sera ininterrompu et dépourvu de toutes erreurs, que ces interruptions ou erreurs seront corrigées, (iii) le « Site Internet » et / ou « Portail Clients » ne contiendra aucun virus. Tout logiciel téléchargé et/ou obtenu, de quelque manière que ce soit hors de l'utilisation du « Site Internet » et / ou « Portail Clients » est aux risques et périls de l'utilisateur et ORSEC Technologies SAS ne sera aucunement responsable des dommages, pertes de données subis par quelque matériel que ce soit de l'utilisateur. Aucun conseil ni aucune information, qu'ils soient écrits ou oraux, obtenus par l'utilisateur de ORSEC Technologies SAS ou lors de l'utilisation du « Site Internet » et / ou « Portail Clients » ne sont susceptibles de créer une quelconque garantie non expressément prévue aux présentes conditions.`,
      ],
    },
    {
      title: "Limitation de responsabilité",
      detail: [
        `Sous réserve des dispositions légales ou réglementaires applicables, ORSEC Technologies SAS ne saurait être tenue pour responsable de tout dommage direct ou indirect notamment mais non limitativement pertes de profits, de clientèles, de données, de biens incorporels pouvant intervenir du fait de l'utilisation ou de l'impossibilité d'utilisation du « Site Internet » et / ou « Portail Clients », et plus généralement de tout événement ayant un lien avec « Site Internet » et / ou « Portail Clients » et/ou tout site tiers. En particulier, la responsabilité de ORSEC Technologies SAS ne saurait être engagée en cas de piratage total ou partiel du « Site Internet » et / ou « Portail Clients » et des dommages que ce piratage pourrait entraîner à l'égard de l'utilisateur ou à l'égard d'un tiers. L'utilisateur est à ce titre invité à prendre scrupuleusement connaissance des conditions d'utilisation des plateformes, matériels, sites sur lesquels ou à partir desquels le « Site Internet » et / ou « Portail Clients » est accessible, ORSEC Technologies SAS n'étant pour sa part nullement responsable des stipulations pouvant y figurer ni des conséquences qu'elles peuvent emporter pour l'utilisateur.`,
      ],
    },
    {
      title:
        "Fermeture ou suspension du « Site Internet » et / ou « Portail Clients »",
      detail: [
        `ORSEC Technologies SAS se réserve la possibilité, lorsqu'elle le souhaite, de modifier, d'interrompre temporairement ou de façon permanente, tout ou une partie du « Site Internet » et / ou « Portail Clients », sans préavis ni indemnité quelconque. ORSEC Technologies SAS ne pourra en aucun cas être tenue pour responsable à l'égard de l'utilisateur ou à l'égard d'un tiers de toute modification, interruption ou suspension du « Site Internet » et / ou « Portail Clients ».`,
      ],
    },
    {
      title: "Obligations de l'utilisateur",
      detail: [
        `L'utilisateur s'engage, dans le cadre de son utilisation du « Site Internet » et / ou « Portail Clients », à ne se livrer à aucun acte contraire aux dispositions légales en vigueur ni à aucun acte de nature à porter préjudice, de quelque nature que ce soit à ORSEC Technologies SAS. L'utilisateur ne peut mettre à la disposition de tiers, à titre gratuit ou onéreux, les informations résultant du « Site Internet » et / ou « Portail Clients ». Pour accéder à une utilisation optimale du « Site Internet » et / ou « Portail Clients », l'utilisateur devra disposer de matériel et d'une connexion satisfaisant aux caractéristiques minimales requises. Tout traitement automatisé de données, et notamment la reproduction ou l'extraction, est interdit conformément aux dispositions applicables aux bases de données. Toute utilisation, par l'utilisateur, du « Site Internet » et / ou « Portail Clients » de manière illicite ou contraire aux présentes conditions pourra emporter suspension, à son égard et sans délai, du « Site Internet » et / ou « Portail Clients » et ce sans préjudice de toute procédure que ORSEC Technologies SAS pourrait juger utile à la défense de ses intérêts.`,
      ],
    },
    {
      title: "Droit applicable - Litiges",
      detail: [
        `Le « Site Internet » et / ou « Portail Clients » est soumis au droit français. Tout litige sera soumis aux autorités compétentes.`,
      ],
    },
    {
      title: "Informatique et liberté",
      detail: [
        `La société ORSEC Technologies, en qualité de responsable de traitement, est amenée à collecter et traiter les données personnelles des utilisateurs du site pour l’abonnement à la newsletter et la gestion de cet abonnement, pour gérer les questions et les demandes d’informations posées par les utilisateurs du site via le formulaire de contact dédié à cet effet. Ces informations sont destinées aux services habilités de la société ORSEC Technologies, ainsi que, le cas échéant, à ses sous-traitants ou prestataires. Vous êtes informés sur chaque formulaire de collecte de données à caractère personnel, du caractère obligatoire ou facultatif des réponses par la présence d’un astérisque ou d’une mention à cet effet. A défaut de renseignement des informations ayant un caractère obligatoire, votre demande pourrait ne pas être traitée ou ne pas aboutir. Conformément aux dispositions de la loi du 6 janvier 1978, vous disposez d’un droit d’interrogation, d’accès et de rectification des données vous concernant, ainsi que d’un droit d’opposition pour motif légitime à ce que les données à caractère personnel vous concernant fassent l’objet d’un traitement. Ces droits s’exercent par courrier accompagné d’une copie d’un titre d’identité signé à l'adresse postale suivante : ORSEC Technologies, 5 ALL DE LA GRANDE TREILLE, 35000 RENNES, ou par courriel à l’adresse suivante : contact@orsec.tech Vous êtes également informé de la possibilité de vous inscrire sur la liste Opposetel si vous ne souhaitez pas faire l’objet d’un démarchage téléphonique, notamment en vous rendant sur le portail Clients internet www.bloctel.fr Enfin vous avez également la possibilité de vous désabonner des communications adressées par la société ORSEC Technologies d’un simple clic sur le lien prévu en bas de page dans la dernière newsletter reçue.`,
      ],
    },
    {
      title: "Autres informations",
      detail: [
        `Ce site utilise Google Analytics, un service d’analyse de site internet fourni par Google Inc. (« Google »). Google Analytics utilise des cookies , qui sont des fichiers texte placés sur votre ordinateur, pour aider le site internet à analyser l’utilisation du site par ses utilisateurs. Les données générées par les cookies concernant votre utilisation du site (y compris votre adresse IP) seront transmises et stockées par Google sur des serveurs situés aux Etats-Unis. Google utilisera cette information dans le but d’évaluer votre utilisation du site, de compiler des rapports sur l’activité du site à destination de son éditeur et de fournir d’autres services relatifs à l’activité du site et à l’utilisation d’Internet. Google est susceptible de communiquer ces données à des tiers en cas d’obligation légale ou lorsque ces tiers traitent ces données pour le compte de Google, y compris notamment l’éditeur de ce site. Google ne recoupera pas votre adresse IP avec toute autre donnée détenue par Google. Vous pouvez désactiver l’utilisation de cookies en sélectionnant les paramètres appropriés de votre navigateur. Cependant, une telle désactivation pourrait empêcher l’utilisation de certaines fonctionnalités de ce site. En utilisant ce site internet, vous consentez expressément au traitement de vos données nominatives par Google dans les conditions et pour les finalités décrites ci-dessus.`,
      ],
    },
  ];
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray(".bottom-fade").forEach((el) => {
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
      });

      gsap.fromTo(
        ".description *",
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

    return () => ctx.revert();
  }, []);

  return (
    <>
      <section className="pt-44 md:pt-52 xl:pt-60  -mt-[68px] lg:-mt-20">
        <div className="custom-container">
          <h2 className="text-light text-center text-5xl md:text-6xl lg:text-7xl leading-130 mb-32 md:mb-16 lg:mb-28 bottom-fade">
            Mentions Légales
          </h2>

          <div className="flex flex-wrap flex-col gap-10 description">
            {infoList.map((item, index) => (
              <div key={index} className="flex flex-wrap flex-col gap-6">
                <h3 className="text-light text-2xl md:text-32  leading-130">
                  {item.title}
                </h3>
                <div className="text-base text-gray-medium flex flex-col gap-4">
                  {item.detail.map((para, idx) => (
                    <p key={idx}>{para}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Notices;
