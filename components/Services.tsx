import ServicesCard from "./ServicesCard";

const Services = () => {
  return (
    <section className="w-full h-[410px] bg-yellow-5 mb-[400px]">
      <div className="w-[1200px] mx-auto flex flex-col items-center justify-center relative">
        <div className="text-[20px] tracking-[2px] text-gold font-semibold mt-[10px]">
          Our Services
        </div>
        <h1 className="mt-[20px] text-[52px]">What We Offer</h1>
        <div className="w-full flex justify-between items-center absolute bottom-[-50px]">
          <ServicesCard
            src_big="service-1.png"
            src_small="service-1.svg"
            btn_text="Read More"
          />
          <ServicesCard
            src_big="service-2.png"
            src_small="service-2.svg"
            btn_text="Read More"
          />
          <ServicesCard
            src_big="service-3.png"
            src_small="service-3.svg"
            btn_text="Read More"
          />
          <ServicesCard
            src_big="service-4.png"
            src_small="service-4.svg"
            btn_text="Read More"
          />
        </div>
      </div>
    </section>
  );
};
export default Services;
