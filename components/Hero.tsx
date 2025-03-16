import HeroCard from "./HeroCard";

const Hero = () => {
  return (
    <section className="w-full bg-[url('/blured-vine.jpg')] bg-center bg-cover bg-no-repeat  max-md:px-[50px] max-xs:px-[20px]">
      <div className="max-w-[1200px] w-full mx-auto flex justify-center items-center flex-col relative h-[800px] max-md:h-[600px] mb-[250px]">
        <h4 className="text-[28px] max-md:text-[20px] max-md:tracking-[0.5px] max-md:leading-[24px] tracking-[2px] text-white leading-[30px] max-sm:font-bold max-sm:text-[18px] max-sm:leading-[20px] max-sm:tracking-[0.5px] max-xs:text-[14px] max-xs:leading-[16px] max-xs:tracking-[0.5px]">
          მობრძანდით ჩვენს საიტზე!
        </h4>
        <h1 className="text-[54px] max-md:text-[40px] max-md:tracking-[2.5px] max-md:leading-[55px] max-md:mt-[10px] tracking-[7px] leading-[70px] text-white mt-[20px] font-bold text-center max-sm:text-[28px] max-sm:leading-[30px] max-sm:tracking-[1px] max-xs:text-[20px] max-xs:leading-[24px] max-xs:tracking-[1px]">
          გამწვანება არის
          <br /> აუცილებელი სიცოცხლისთვის
        </h1>
        <p className="text-[20px] leading-[33px] text-white tracking-[1px] mt-[40px] max-w-[900px] text-justify max-md:mt-[15px] max-md:leading-[24px] max-xs:text-[13px] max-xs:leading-[20px]">
          ქართული ენით ყველაფერი გამოითქმება, რაც დედამიწაზე შეიძლება გამოითქვას
          რაგინდარა ენით. აზრი არ მოიპოვება არც ერთ ენაზე, რუსეთის ან დასავლეთის
          ევროპისა, რომ არა თუ ქართველმა სავსებით ვერ გამოთქვას, არამედ მხატვრულ
          ყალიბში ვერ ჩამოასხას. ქართული ენა, განსაკუთრებით, ცოცხალი ქართული
          ენა, მაღალმხატვრულად გამოსახავს ყოველ აზრს და დაუმახინჯებლად და
          შეურყვნელად გადმოსცემს, ისე მდიდრულია ქართული ენა. შეიძლება ითქვას,
          შინაგანი თვისებებით იგი მსოფლიო ენაა
        </p>
        <div className="w-full flex justify-center items-center gap-[50px] max-md:gap-[20px] absolute bottom-[-250px] max-md:bottom-[-200px] max-xs:bottom-[-100px]">
          <HeroCard
            heading="გაზონის გაკრეჭა"
            paragraph="აქ უნდა ეწეროს რამე პარარა ტექსტი ამ საქმეზე"
            src="lawn.jfif"
          />
          <HeroCard
            heading="მურჩის დაყრა"
            paragraph="აქ უნდა ეწეროს რამე პარარა ტექსტი ამ საქმეზე"
            src="red-filling.jfif"
          />
          <HeroCard
            heading="ბუჩქების გაკრეჭა"
            paragraph="აქ უნდა ეწეროს რამე პარარა ტექსტი ამ საქმეზე"
            src="trimmed-bushes.jfif"
          />
        </div>
      </div>
    </section>
  );
};
export default Hero;
