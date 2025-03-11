import HeaderContact from "@/components/HeaderContact";
import IconContainer from "@/components/IconContainer";
import NavLink from "@/components/NavLink";
import Image from "next/image";
import { FaFacebook, FaInstagram, FaTelegram } from "react-icons/fa6";

const Header = () => {
  return (
    <header className="w-full">
      <div className="w-[1200px] mx-auto flex justify-baseline items-center px-[15px] h-[115.5px]">
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
          <HeaderContact
            src="phone.svg"
            paragraph="Call anytime"
            heading="+ 98 (000) - 9630"
          />
          <HeaderContact
            src="email.svg"
            paragraph="Send email"
            heading="ambed@agrios.com"
          />
          <HeaderContact
            src="location.svg"
            paragraph="380 St Kilda Road"
            heading="Melbourne, Australia"
          />
        </div>
      </div>
      <div className="w-full h-[60px] bg-yellow-5">
        <nav className="flex h-full justify-center items-center">
          <NavLink href="#about"> about</NavLink>
          <NavLink href="#services"> services</NavLink>
          <NavLink href="#projects"> projects</NavLink>
          <NavLink href="contact"> contact</NavLink>
        </nav>
      </div>
    </header>
  );
};
export default Header;
