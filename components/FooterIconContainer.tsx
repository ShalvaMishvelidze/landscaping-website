import { ReactNode } from "react";

const FooterIconContainer = ({ children }: { children: ReactNode }) => {
  return (
    <div className="w-[40px] h-[40px] bg-yellow-99 rounded-1/2 flex justify-center items-center *:text-white">
      {children}
    </div>
  );
};
export default FooterIconContainer;
