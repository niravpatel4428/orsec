
import expertImg1 from '../../assets/expert-img1.webp';
import expertImg2 from '../../assets/expert-img2.webp';
import expertImg3 from '../../assets/expert-img3.webp';

const ExpertTeam = () => {
    const experts = [
        {
            name: "David",
            position: "Directeur Technique",
            image: expertImg1,
            socials: {
                linkedin: "#"
            }
        },
        {
            name: "Malena",
            position: "Presidente",
            image: expertImg2,
            socials: {
                linkedin: "#"
            }
        },
        {
            name: "Une équipe R&D dédiée",
            position: "",
            image: expertImg3,
            socials: {}
        }
    ];
    return (
        <section className='pt-14 pb-20 md:pt-16 lg:pt-20 lg:pb-24'>
            <div className="custom-container">
                <div className="flex flex-wrap flex-col gap-6 md:gap-8 lg:gap-10">
                    <h2 className="text-light text-2xl md:text-32 lg:text-40  leading-130 max-w-700 w-full">Une équipe experte et engagée pour votre <span className='text-gray-light'>sécurité numérique</span></h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 lg:grid-rows-1 gap-8 md:gap-4">
                        {experts.map((expert, index) => (
                            <div key={index} className="flex flex-wrap w-full flex-col gap-6">
                                <div className="rounded-lg h-[393px] md:h-[375px] lg:h-[400px] xl:h-[500px] border border-[#30243E]">
                                    <img
                                    src={expert.image}
                                    alt="expert-img"
                                    className="w-full max-w-full h-full object-cover rounded-[inherit]"
                                    />
                                </div>
                                <div className="flex justify-between gap-4">
                                    <div className="flex-1 flex flex-wrap flex-col gap-2">
                                        <h3 className="text-light text-xl md:text-2xl  leading-130">{expert.name}</h3>
                                        {expert.position && (
                                            <p className="text-sm text-gray-medium leading-150">{expert.position}</p>
                                        )}
                                    </div>

                                    {expert.socials?.linkedin && (
                                        <div className="flex-initial">
                                            <ul className="inline-flex flex-wrap items-center gap-2 text-white">
                                            <li>
                                                <a href={expert.socials.linkedin} className="text-inherit hover:opacity-75">
                                                <LinkedIn />
                                                </a>
                                            </li>
                                            </ul>
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ExpertTeam

const LinkedIn = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
      <rect width="24" height="24" transform="translate(0.333008)" fill="white"/>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M3.83301 5C3.83301 3.89543 4.72844 3 5.83301 3C6.36344 3 6.87215 3.21071 7.24722 3.58579C7.62229 3.96086 7.83301 4.46957 7.83301 5C7.83301 6.10457 6.93758 7 5.83301 7C4.72844 7 3.83301 6.10457 3.83301 5ZM21.333 13.41C21.3675 11.2449 19.8904 9.34762 17.783 8.85C16.3708 8.5459 14.8987 8.94467 13.833 9.92V9.5C13.833 9.22386 13.6091 9 13.333 9H10.833C10.5569 9 10.333 9.22386 10.333 9.5V19.5C10.333 19.7761 10.5569 20 10.833 20H13.333C13.6091 20 13.833 19.7761 13.833 19.5V13.86C13.8083 12.8557 14.5083 11.9787 15.493 11.78C16.0794 11.6788 16.6803 11.8439 17.1327 12.2305C17.585 12.6171 17.8417 13.185 17.833 13.78V19.5C17.833 19.7761 18.0569 20 18.333 20H20.833C21.1091 20 21.333 19.7761 21.333 19.5V13.41ZM7.83301 9.5V19.5C7.83301 19.7761 7.60915 20 7.33301 20H4.83301C4.55687 20 4.33301 19.7761 4.33301 19.5V9.5C4.33301 9.22386 4.55687 9 4.83301 9H7.33301C7.60915 9 7.83301 9.22386 7.83301 9.5Z" fill="#02030C"/>
    </svg>
  );
};