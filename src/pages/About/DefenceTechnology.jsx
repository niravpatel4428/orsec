import React from 'react';
import defence_img1 from '../../assets/defence-img1.jpg';
import defence_img2 from '../../assets/defence-img2.jpg';
import defence_img3 from '../../assets/defence-img3.jpg';
import defence_img4 from '../../assets/defence-img4.jpg';
import defence_img5 from '../../assets/defence-img5.jpg';

const DefenceTechnology = () => {
    return (
        <section className='relative pt-40 pb-32 md:pt-80 md:pb-72 lg:py-96'>
            <div className="relative -z-1">
                <img src={defence_img1} alt="defence-img" className="absolute left-[50%] -translate-x-40 max-[370px]: -translate-x-36 sm:-translate-x-72 md:-translate-x-80 lg:-translate-x-[475px] xl:-translate-x-[600px] -translate-y-16 sm:-translate-y-16 md:-translate-y-48 lg:-translate-y-60 max-w-full w-24 max-[370px]:w-20 md:w-44 lg:w-60 xl:w-64" />
                <img src={defence_img2} alt="defence-img" className="absolute left-[50%] translate-x-20 max-[370px]: translate-x-16 sm:translate-x-44 md:-translate-x-20 lg:-translate-x-12 -translate-y-20 sm:-translate-y-20 md:-translate-y-64 max-w-full w-24 max-[370px]:w-20 md:w-48" />
                <img src={defence_img3} alt="defence-img" className="absolute left-[50%] -translate-x-[30px] max-[370px]:-translate-x-[35px] sm:-translate-x-10 md:translate-x-40 lg:translate-x-56 xl:translate-x-80 2xl:translate-x-96 -translate-y-32 sm:-translate-y-32 md:-translate-y-40 max-w-full w-20 md:w-44 lg:w-60 xl:w-64" />
                <img src={defence_img4} alt="defence-img" className="absolute left-[50%] -translate-x-36 sm:-translate-x-72 md:-translate-x-80 lg:-translate-x-[400px] translate-y-[440px] sm:translate-y-60 md:translate-y-64 lg:translate-y-[335px] max-w-full w-24 md:w-48 lg:w-56" />
                <img src={defence_img5} alt="defence-img" className="absolute left-[50%] translate-x-14 max-[370px]:translate-x-8 sm:translate-x-40 md:translate-x-40 translate-y-[440px] sm:translate-y-60 md:translate-y-64 lg:translate-y-[335px] max-w-full w-24 md:w-48 lg:w-56" />
            </div>
            <div className="absolute left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%]"></div>
            <div className="relative">
                <div className="custom-container">
                    <div className="max-w-80 sm:max-w-1200 w-full mx-auto text-center">
                        <div className="flex flex-wrap flex-col gap-7 md:gap-9 lg:gap-12">
                            <h2 className="text-light text-4xl max-[370px]:text-2xl md:text-32 lg:text-40 leading-130 max-w-[760px] w-full mx-auto">Une technologie de défense… désormais à votre portée.</h2>

                            <div className="flex flex-wrap flex-col gap-5 lg:text-2xl leading-150 text-white">
                                <p>Notre objectif principal est de <span className='text-gray-light'>protéger notre pays</span>, en particulier les Organisations d'Importance Vitale, les hôpitaux, les administrations et les entités essentielles, <span className='text-gray-light'>contre les cyberattaques</span>. Nous mettons l'accent sur l'innovation et utilisons des <span className='text-gray-light'>technologies militaires</span> pour fournir des solutions avancées et sur mesure.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default DefenceTechnology
