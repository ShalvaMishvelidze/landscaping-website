import Image from "next/image";
import AboutService from "./AboutService";

const About = () => {
  return (
    <section className="w-full pt-[50px] mb-[200px] max-sm:px-[50px] max-xs:px-[20px]">
      <div className="max-w-[1200px] w-full flex justify-between items-center mx-auto max-md:justify-center max-md:gap-[50px] max-sm:flex-col max-sm:gap-[20px]">
        <div className="max-sm:w-fit w-48/100 max-bg:w-3/10 relative max-bg:right-[-40px] max-sm:right-0">
          <Image
            src={"/vine.jfif"}
            alt="about"
            width={550}
            height={550}
            className="rounded-[50%] max-bg:w-[300] max-md:w-[240px] max-bg:h-[300] max-md:h-[240px] w-[550px] h-[550px] object-cover "
          />
          <Image
            src={"/vine-2.jfif"}
            alt="about"
            width={240}
            height={240}
            className="rounded-[50%] max-bg:w-[150] max-md:w-[120px] max-bg:h-[150] max-md:h-[120px] absolute left-[-80px] bottom-[-80px] max-bg:left-[-40px] max-bg:bottom-[-40px] outline-white outline-[10px] max-bg:outline-[4px] w-[240px] h-[240px] object-cover"
          />
        </div>
        <div className="max-sm:w-full w-48/100 max-bg:w-6/10 max-md:w-5/10 pt-[50px]">
          <h5 className="text-[20px] text-gold tracking-[2px] mb-[20px] leading-[20px] max-sm:text-center max-xs:mb-[10px] max-xs:text-[15px]">
            ჩვენს შესახებ
          </h5>
          <h1 className="text-[44px] max-bg:text-[28px] leading-[60px] max-bg:leading-[40px] tracking-[1px] mb-[20px] max-bg:mb-[10px] max-sm:text-center max-xs:text-[20px] max-xs:leading-[30px]">
            გაზონის და ხეების მოვლა
            <br />
            თქვენი ეზოსთვის
          </h1>
          <p className="text-[18px] font-semibold tracking-[1px] text-green leading-[20px] mb-[25px] max-xs:mb-[10px] max-sm:text-center max-xs:text-[15px] max-xs:leading-[20px] ">
            ჩვენ ვართ საუკეთესო გამწვანების კომპანია საქართველოში
          </p>
          <p className="text-gray-50 leading-[30px] mb-[30px] text-left max-sm:text-justify max-xs:mb-[10px] max-xs:text-[14px] max-xs:leading-[20px]">
            ქართული ენა არის უმაღლესი ხარისხის ორგანიზაცია“... იგი არის ეროვნული
            ძალა, მთავარი ბურჯი ეროვნებისა... განვითარებული, გაშლილი, კულტურული,
            მდიდარი, როგორც ლექსიკონით, ისე გრამატიკული ფორმებით“. გრიგოლ
            ორბელიანი, ამბობდა: „ერის ცხოვრება, მისი ისტორია დაცულ არს ენით...
          </p>
          <div className="flex max-xs:flex-col gap-[30px] max-xs:gap-[10px] items-center justify-between mb-[60px] max-bg:mb-[30px] max-xs:mb-[20px]">
            <AboutService
              src="about-service-1.svg"
              paragraph="დასუფთავება დასრულებისას"
            />
            <AboutService
              src="about-service-2.svg"
              paragraph="ქიმიურად შეწამლვა"
            />
          </div>
          <a
            href="#"
            className="block mx-auto w-[200px] h-[60px] text-center text-[24px] leading-[65px] bg-green text-white rounded-[10px]"
          >
            მეტის გაგება
          </a>
        </div>
      </div>
    </section>
  );
};
export default About;
