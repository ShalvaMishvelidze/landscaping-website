import Image from "next/image";

const FooterContact = ({
  paragraph,
  src,
}: {
  paragraph: string;
  src: string;
}) => {
  return (
    <div className="flex justify-start items-center gap-[10px] max-xs:w-full">
      <Image src={src} alt="phone" width={20} height={20} />
      <p className="w-[130px] max-xs:w-full leading-[26px] text-gray-50 text-[15px] cursor-pointer">
        {paragraph}
      </p>
    </div>
  );
};
export default FooterContact;
