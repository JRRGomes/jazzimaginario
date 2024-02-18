import { ReactNode } from "react";

type PageTitleProps = {
  children?: ReactNode;
  className?: string;
};

const PageTitle = (props: PageTitleProps) => {
  return (
    <h1 className={`text-2xl md:text-3xl text-dark font-bold justify-self-center ${props.className}`}>
      {props.children}
    </h1>
  );
};

export default PageTitle
