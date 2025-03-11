import Image from "next/image";

const AboutService = ({
  src,
  paragraph,
}: {
  src: string;
  paragraph: string;
}) => {
  return (
    <div className="w-48/100 flex gap-[30px] items-center justify-start">
      <Image src={`/${src}`} alt="about service" width={64} height={64} />
      <p className="text-[20px] font-medium leading-[28px]">{paragraph}</p>
    </div>
  );
};
export default AboutService;
