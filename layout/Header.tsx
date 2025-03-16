import HeaderContact from "@/components/HeaderContact";
import IconContainer from "@/components/IconContainer";
import NavLink from "@/components/NavLink";
import Image from "next/image";
import { FaFacebook, FaInstagram, FaTelegram } from "react-icons/fa6";

const Header = () => {
  return (
    <header className="w-full ">
      <div className="max-w-[1200px] w-full mx-auto flex justify-between items-center px-[15px] h-[115.5px] max-bg:px-[50px] max-xs:px-[20px]">
        <Image
          className="cursor-pointer"
          src="/logo.jpg"
          alt="logo"
          width={170}
          height={51.5}
        />
        <div className="flex">
          <div className="flex justify-center items-center gap-[10px]">
            <IconContainer>
              <FaFacebook />
            </IconContainer>
            <IconContainer>
              <FaInstagram />
            </IconContainer>
            <IconContainer>
              <FaTelegram />
            </IconContainer>
          </div>
          <div className="flex max-md:hidden">
            <HeaderContact
              src="phone.svg"
              paragraph="დაგვირეკეთ"
              heading="+995 557 65 87 98"
            />
            <HeaderContact
              src="email.svg"
              paragraph="მოგვწერეთ იმეილი"
              heading="ambed@agrios.com"
            />
            <HeaderContact
              src="location.svg"
              paragraph="ჩვენი მისამართი"
              heading="Vake, Tbilisi"
            />
          </div>
        </div>
      </div>
      <div className="w-full h-[60px] bg-yellow-5">
        <nav className="flex h-full justify-center items-center">
          <NavLink href="#about">ჩვენს შესახებ</NavLink>
          <NavLink href="#services">სერვისები</NavLink>
          <NavLink href="#projects">პროექტები</NavLink>
          <NavLink href="contact">კონტაქტი</NavLink>
        </nav>
      </div>
    </header>
  );
};
export default Header;
