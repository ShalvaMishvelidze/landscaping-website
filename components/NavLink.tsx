import { ReactNode } from "react";

const NavLink = ({ children, href }: { children: ReactNode; href: string }) => {
  return (
    <a
      href={href}
      className="flex justify-center items-center uppercase h-full px-[15px] max-xs:px-[10px] font-medium text-black-95 hover:bg-yellow-10 hover:text-black-90 transition-all duration-200 max-xs:text-[12px]"
    >
      {children}
    </a>
  );
};
export default NavLink;
