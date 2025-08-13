import React from 'react'

const ContextObjectives = () => {
    const objective_blocks = [
        {
            id: '01',
            title: 'Quoi',
            details: [
                `Notre sonde ORSEC est une solution avancée de détection et d'analyse du trafic réseau. Elle utilise un moteur DPI sophistiqué pour classifier et décoder les protocoles et les applications à différents niveaux du réseau, offrant une visibilité approfondie de l'activité réseau.`,
            ],
        },
        {
            id: '02',
            title: 'Quand',
            details: [
                `La sonde ORSEC est disponible dès maintenant et peut être déployée dans les environnements réseau des clients à tout moment. Son utilisation peut commencer immédiatement pour renforcer la sécurité et la surveillance du trafic réseau.`,
            ],
        },
        {
            id: '03',
            title: 'Où',
            details: [
                `La sonde ORSEC peut être installée dans les infrastructures réseau des clients, qu'ils soient situés localement sur site ou dans des environnements cloud. Elle est conçue pour s'adapter à différents environnements et échelles, offrant une visibilité et une protection réseau où qu'elles soient nécessaires.`,
            ],
        },
    ];
    return (
        <section className='pt-16 pb-4 lg:py-24'>
            <div className="custom-container">
                <div className="flex flex-wrap flex-col gap-11">
                    <div className="flex flex-wrap items-center gap-6 md:gap-14 lg:gap-20">
                        <div className="flex-initial lg:max-w-96 w-full">
                            <h2 className="text-light text-32 lg:text-40  leading-130">
                                Contexte et objectifs
                            </h2>
                        </div>
                        <div className="flex-1">
                            <div className="flex flex-wrap gap-5 text-base text-gray-medium leading-relaxed">
                                <p>L'objectif principal de notre sonde ORSEC est de renforcer la sécurité des entreprises et des organisations en détectant les menaces et en fournissant des informations précieuses sur le trafic réseau. Elle permet d'identifier les comportements suspects, de prévenir les cyberattaques et de prendre des mesures appropriées pour protéger les infrastructures critiques.</p>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 lg:grid-rows-1 gap-4">
                        {objective_blocks.map((block, index) => (
                            <div key={index} className="flex flex-wrap flex-col gap-5 p-4 border border-[#574D63] bg-transparent rounded hover:bg-techGradient transition-all duration-300">
                                <div className="flex flex-wrap flex-col gap-2">
                                    <span className="text-light text-xs ">{block.id}</span>
                                    <h3 className="text-light text-2xl md:text-32  leading-130">{block.title}</h3>
                                </div>
                                <div className="flex flex-wrap flex-col text-base text-gray-medium gap-4">
                                    {block.details.map((para, i) => (
                                    <p key={i}>{para}</p>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContextObjectives
