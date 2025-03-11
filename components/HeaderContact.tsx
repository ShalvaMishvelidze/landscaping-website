import Image from "next/image";

const HeaderContact = ({
  src,
  paragraph,
  heading,
}: {
  src: string;
  paragraph: string;
  heading: string;
}) => {
  return (
    <div className="w-[218px] h-[70px] flex justify-center items-center gap-[20px] border-r-[2px] border-yellow-10 cursor-pointer">
      <Image src={`/${src}`} alt="phone" width={30} height={30} />
      <div>
        <p className="text-[12px] text-gray-50">{paragraph}</p>
        <h5 className="text-[14px] font-medium">{heading}</h5>
      </div>
    </div>
  );
};
export default HeaderContact;
