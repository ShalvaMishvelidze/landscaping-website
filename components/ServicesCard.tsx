import Image from "next/image";

const ServicesCard = ({
  src_big,
  src_small,
  heading,
}: {
  src_big: string;
  src_small: string;
  heading: string;
}) => {
  return (
    <div className="w-[270px] h-[430px] max-md:w-full relative overflow-hidden rounded-[10px]">
      <Image
        className="w-full h-full object-cover"
        src={`/${src_big}`}
        alt="service"
        width={270}
        height={430}
      />
      <div className="absolute bottom-[40px] left-1/2 transform -translate-x-1/2 flex items-end justify-center rounded-[10px] w-[220px] h-[125px] px-[20px] pb-[20px]  bg-white max-md:w-9/10">
        <div className="w-[70px] h-[70px] rounded-[6px] bg-green-30 flex items-center justify-center absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <Image
            src={`/${src_small}`}
            alt="service icon"
            width={45}
            height={45}
          />
        </div>
        <h1 className="text-center text-[20px] font-bold w-[120px] leading-[25px]">
          {heading}
        </h1>
      </div>
      <button
        type="button"
        className="absolute right-[15px] bottom-[110px] w-[110px] h-[40px] rounded-[10px] text-white text-center leading-[45px] text-[12px] font-medium bg-green cursor-pointer"
      >
        მეტის წაკითხვა
      </button>
    </div>
  );
};
export default ServicesCard;
