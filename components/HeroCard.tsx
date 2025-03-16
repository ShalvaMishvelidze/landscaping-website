import Image from "next/image";

const HeroCard = ({
  heading,
  paragraph,
  src,
}: {
  heading: string;
  paragraph: string;
  src: string;
}) => {
  return (
    <div className="w-[350px] h-[350px] max-md:h-[250px] max-md:w-[280px] p-[10px] flex flex-col justify-between items-center bg-white rounded-[10px] shadow-lg shadow-gray-200 max-md:gap-[8px] max-xs:h-[150px] max-xs:px-0 max-xs:pb-0">
      <h6 className="text-[24px] max-md:text-[16px] mb-[10px] text-gold max-sm:text-[13px] max-xs:text-[8px]">
        {heading}
      </h6>
      <p className="text-[20px] max-md:text-[13px] max-sm:text-[11px] font-medium w-8/10 text-center mb-[5px] max-xs:text-[7px]">
        {paragraph}
      </p>
      <Image
        className="w-[300px] h-[200px] max-md:h-[140px] max-sm:h-[100px] object-cover rounded-[10px] max-xs:rounded-[20px] max-xs:h-[70px] max-xs:p-[10px]"
        src={`/${src}`}
        alt="feature"
        width={300}
        height={200}
      />
    </div>
  );
};
export default HeroCard;
