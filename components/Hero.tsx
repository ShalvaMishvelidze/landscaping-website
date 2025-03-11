import HeroCard from "./HeroCard";

const Hero = () => {
  return (
    <section className="w-full bg-[url('/main-bcg.jpg')] bg-center bg-cover bg-no-repeat">
      <div className="w-[1200px] mx-auto flex justify-center items-center flex-col relative h-[800px] mb-[200px]">
        <h4 className="text-[28px] tracking-[2px] text-white leading-[30px]">
          Welcome to our site!
        </h4>
        <h1 className="text-[56px] tracking-[7px] leading-[70px] text-white mt-[20px] font-medium">
          Landscaping <br />
          Is Life
        </h1>
        <p className="text-[20px] leading-[33px] text-white tracking-[1px] mt-[20px] w-6/10">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam
          ipsam quas architecto repellendus, quisquam quod ab inventore sequi
          voluptatem beatae similique, magnam aliquid accusantium eius magni
          soluta, dolores nisi voluptatum.
        </p>
        <div className="w-full flex justify-center items-center">
          <div className="flex justify-center items-center gap-[50px] absolute bottom-[-150px]">
            <HeroCard src="feature-1.png" />
            <HeroCard src="feature-2.png" />
            <HeroCard src="feature-3.png" />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;
