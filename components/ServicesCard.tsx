import Image from "next/image";

const ServicesCard = ({
  src_big,
  src_small,
  btn_text,
}: {
  src_big: string;
  src_small: string;
  btn_text: string;
}) => {
  return (
    <div className="w-[270px] h-[430px] relative">
      <Image src={`/${src_big}`} alt="service" width={270} height={430} />
      <div>
        <div>
          <Image
            src={`/${src_small}`}
            alt="service icon"
            width={50}
            height={50}
          />
        </div>
      </div>
      <button
        type="button"
        className="absolute right-[15px] bottom-[110px] w-[110px] h-[46px] rounded-[10px] text-white text-center leading-[46px] text-[14px] font-medium bg-green"
      >
        {btn_text}
      </button>
    </div>
  );
};
export default ServicesCard;
