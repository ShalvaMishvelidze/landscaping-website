import { ReactNode } from "react";

const FooterParagraphContainer = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex items-center justify-start gap-[10.5px]">
      {children}
    </div>
  );
};
export default FooterParagraphContainer;
