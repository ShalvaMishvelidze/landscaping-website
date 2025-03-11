import Image from "next/image";

const Projects = () => {
  return (
    <section className="mb-[350px]">
      <div className="w-[1200px] flex flex-col items-center mx-auto">
        <h4 className="text-[20px] text-gold tracking-[2px] mb-[10px]">
          Recently Completed
        </h4>
        <h1 className="text-[52px] tracking-[1px] mb-[40px]">
          Explore Projects
        </h1>
        <Image
          className="cursor-pointer"
          src={"/projects.png"}
          width={1200}
          height={440}
          alt="projects"
        />
      </div>
    </section>
  );
};
export default Projects;
