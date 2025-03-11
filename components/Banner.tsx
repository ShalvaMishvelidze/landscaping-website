import Image from "next/image";

const Banner = () => {
  return (
    <section className="mb-[100px]">
      <Image
        src={"/banner.png"}
        alt="banner"
        width={1900}
        height={700}
        className="w-full h-[36.25vw]"
      />
    </section>
  );
};
export default Banner;
