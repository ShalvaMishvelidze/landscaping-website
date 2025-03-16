import { ReactNode } from "react";

const FooterArticle = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <article
      className={`flex flex-col max-xs:items-center gap-[10px] h-[240px] max-xs:w-full max-xs:h-auto ${
        className && className
      }`}
    >
      {children}
    </article>
  );
};
export default FooterArticle;
