import { ReactNode } from "react";

const IconContainer = ({ children }: { children: ReactNode }) => {
  return (
    <div className="w-[40px] h-[40px] rounded-[50%] bg-yellow-5 flex justify-center items-center cursor-pointer *:text-black">
      {children}
    </div>
  );
};
export default IconContainer;
