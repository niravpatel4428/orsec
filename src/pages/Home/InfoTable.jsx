const InfoItem = ({ number, title, description, icon }) => {
  return (
    <div className="w-[48%] max-md:rounded md:w-full p-4 md:pt-10 md:px-5 lg:px-8 pb-6 max-md:border border-t border-[#574D63] flex max-md:flex-col justify-between">
      <div className="flex max-md:flex-col gap-2 md:gap-8 lg:gap-10 xl:gap-14">
        <span className="text-white text-xs md:text-sm ">{number}</span>
        <div className="w-full max-w-56 xl:max-w-80">
          <p className="text-white text-sm md:text-base lg:text-xl xl:text-2xl  !leading-tight">
            {title}
          </p>
        </div>
      </div>
      <div className="flex max-md:flex-col max-md:justify-between md:gap-8">
        <div className="max-md:my-9 max-md:mx-auto size-[74px] md:size-12 xl:size-[60px]">
          <img src={icon} alt="icon" className="object-contain w-full h-full" />
        </div>
        <div className="w-full max-w-64 xl:max-w-[363px]">
          <p className="text-gray-light text-10 md:text-sm xl:text-base  leading-normal">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

const InfoTable = ({infoItems}) => {
  return (
    <section className="relative py-14 md:py-20 xl:py-24">
      <div className="custom-container">
        <div className="flex flex-wrap md:flex-col gap-2">
          {infoItems.map((item, index) => (
            <InfoItem
              key={index}
              number={item.number}
              title={item.title}
              description={item.description}
              icon={item.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default InfoTable;
