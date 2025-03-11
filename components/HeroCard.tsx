import Image from "next/image";

const HeroCard = ({ src }: { src: string }) => {
  return (
    <div className="w-[350px] h-[300px] p-[10px] flex flex-col justify-center items-center bg-white rounded-[10px] shadow-[10px] shadow-gray-200">
      <h6 className="text-[24px] mb-[30px] text-gold">feature 01</h6>
      <p className="text-[20px] font-medium w-8/10 text-center mb-[5px]">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, soluta?
      </p>
      <Image src={`/${src}`} alt="feature" width={100} height={100} />
    </div>
  );
};
export default HeroCard;
