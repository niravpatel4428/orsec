

const TeamQualified = () => {
    const team_details = [
        {
            details: [
                `Grâce à notre équipe d'experts hautement qualifiés, nous offrons une expertise approfondie et des outils de pointe pour renforcer la résilience de nos clients face aux menaces cybernétiques. Notre engagement envers la sécurité nationale et notre volonté de contribuer à la défense de notre pays font partie intégrante de notre ADN.`,

                `Grâce à l'expertise de ses fondateurs et à leur expérience dans la gestion de projets de grande envergure, ORSEC Technologies est en mesure de mettre en œuvre des stratégies efficaces pour réduire les coûts tout en maintenant un niveau élevé de qualité et d'efficacité dans ses solutions de cybersécurité.`,

                `ORSEC Technologies bénéficie de l'expertise combinée de ses fondateurs et de sa capacité à s'adapter rapidement aux évolutions du marché de la cybersécurité. Grâce à leur vision stratégique et à leur expérience, l'entreprise est bien positionnée pour réussir et apporter des solutions de cybersécurité de qualité supérieure à ses clients, tout en réduisant les coûts liés à la mise en œuvre de ces solutions.`,
            ]
        },
        {
            details: [
                `Le caractère innovant de la solution ORSEC Technologies réside dans sa capacité à combler les lacunes de l'état de l'art et de l'état du marché en matière de détection des attaques cyber. Contrairement aux solutions existantes, notre solution est conçue pour détecter les Advanced Persistent Threats (APTs), ces attaques sophistiquées et persistantes qui restent souvent dissimulées dans les réseaux des victimes pendant une période prolongée avant de déclencher des ransomwares ou d'autres attaques destructrices. En mettant l'accent sur la surveillance en temps réel, l'analyse comportementale et l'utilisation de technologies militaires avancées, nous permettons aux organisations, notamment les administrations et les hôpitaux, de détecter et de neutraliser ces menaces invisibles plus rapidement, réduisant ainsi le risque de dommages majeurs et de pertes de données. Notre approche novatrice contribue à renforcer la résilience des infrastructures critiques et à protéger les intérêts stratégiques de notre pays face aux cyberattaques de plus en plus sophistiquées.`,

                `Notre innovation réside dans la combinaison d'une architecture multi-étapes et d'un moteur DPI sophistiqué au cœur de notre sonde. L'architecture multi-étapes permet un traitement progressif des paquets de données, tandis que le moteur DPI réalise une analyse approfondie du trafic réseau à différents niveaux, de la couche 3 à la couche 7. Cette approche technique avancée nous permet de fournir une inspection détaillée et une classification précise des protocoles et des applications réseau, ce qui nous distingue des solutions existantes sur le marché.`,

                `De plus, notre sonde DPI utilise des techniques de détection avancées telles que le suivi de flux, la correspondance de motifs d'octets et l'analyse comportementale pour repérer les comportements suspects et les attaques cyber. Nous sommes capables de détecter les APTs qui restent souvent dissimulés dans le réseau pendant des périodes prolongées avant de déclencher des ransomwares ou d'autres types d'attaques. Cette capacité à identifier les menaces émergentes et les activités anormales nous permet de fournir une protection proactive contre les cyberattaques.`
            ]
        }
    ];
    return (
        <div className="pt-24 lg:pt-28 xl:pt-32 gap-16">
            <div className="custom-container">
                <div className="flex flex-wrap flex-col gap-10">
                    {team_details.map((section, index) => (
                        <div key={index}>
                            <div className="flex flex-wrap flex-col gap-6 multiParagraph">
                                {section.details.map((para, i) => (
                                    <p key={i} className="text-xs md:text-base text-gray-medium leading-relaxed">
                                        {para}
                                    </p>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default TeamQualified
