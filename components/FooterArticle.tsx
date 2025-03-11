import { ReactNode } from "react";

const FooterArticle = ({ children }: { children: ReactNode }) => {
  return (
    <article className="w-[280px] flex flex-col gap-[10px] h-[284px]">
      {children}
    </article>
  );
};
export default FooterArticle;
