import { ReactNode } from "react";

const FooterParagraph = ({ children }: { children: ReactNode }) => {
  return (
    <p className="w-[150px] text-[15px] text-gray-40 leading-[30px]">
      {children}
    </p>
  );
};
export default FooterParagraph;
