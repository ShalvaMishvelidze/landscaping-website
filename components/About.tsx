import Image from "next/image";
import AboutService from "./AboutService";

const About = () => {
  return (
    <section className="w-full pt-[50px] mb-[200px]">
      <div className="w-[1200px] flex justify-between items-center mx-auto">
        <div className="w-48/100 relative">
          <Image
            src={"/about-img-big.png"}
            alt="about"
            width={550}
            height={550}
            className="rounded-1/2"
          />
          <Image
            src={"/about-img-small.png"}
            alt="about"
            width={240}
            height={240}
            className="rounded-1/2 absolute left-[-80px] bottom-[-80px] outline-white outline-[10px]"
          />
        </div>
        <div className="w-48/100 pt-[50px]">
          <h5 className="text-[20px] text-gold tracking-[2px] mb-[10px] leading-[20px]">
            About Us
          </h5>
          <h1 className="text-[56px] leading-[60px] tracking-[1px] mb-[20px]">
            Landscaping & Care
            <br />
            For Your Yard
          </h1>
          <p className="text-[20px] font-semibold tracking-[1.5px] text-green leading-[20px] mb-[25px]">
            We are one of the best companies for landscaping.
          </p>
          <p className="text-gray-50 leading-[30px] mb-[30px] text-justify">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam
            dolorem perspiciatis quo dicta magni saepe vitae reprehenderit
            aliquid tempore quos? Lorem ipsum dolor sit amet, consectetur
          </p>
          <div className="flex justify-between mb-[60px]">
            <AboutService
              src="about-service-1.svg"
              paragraph="We are creative"
            />
            <AboutService
              src="about-service-2.svg"
              paragraph="We offer good services"
            />
          </div>
          <a
            href="#"
            className="block mx-auto w-[200px] h-[60px] text-center leading-[60px] bg-green text-white rounded-[10px]"
          >
            Discover More
          </a>
        </div>
      </div>
    </section>
  );
};
export default About;
