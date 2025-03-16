import ServicesCard from "./ServicesCard";

const Services = () => {
  return (
    <section className="w-full bg-yellow-5 mb-[400px] max-md:mb-[800px] max-xs:mb-[1650px] max-bg:px-[50px] max-xs:px-[20px]">
      <div className="max-w-[1200px] w-full h-[410px] mx-auto flex flex-wrap flex-col items-center justify-start relative">
        <div className="text-[20px] tracking-[2px] text-gold font-semibold mt-[40px]">
          ჩვენი სერვისები
        </div>
        <h1 className="mt-[20px] text-[52px] max-md:text-[38px] max-xs:text-[26px]">
          რას გთავაზობთ ჩვენ
        </h1>
        <div className="w-full flex justify-between items-center absolute bottom-[-250px] max-md:grid max-md:grid-cols-2 max-md:gap-[20px] max-md:top-[200px] max-xs:grid-cols-1">
          <ServicesCard
            heading="ბუჩქების მოვლა"
            src_big="bush-trees.jfif"
            src_small="service-1.svg"
          />
          <ServicesCard
            heading="ქიმიური შეწამვლა"
            src_big="chemical-watering.jfif"
            src_small="service-2.svg"
          />
          <ServicesCard
            heading="გაზონის გაკრეჭა"
            src_big="lawn-3.jfif"
            src_small="service-3.svg"
          />
          <ServicesCard
            heading="ხეების მოვლა"
            src_big="pine.jfif"
            src_small="service-4.svg"
          />
        </div>
      </div>
    </section>
  );
};
export default Services;
