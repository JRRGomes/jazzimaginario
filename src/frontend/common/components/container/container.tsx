import { ReactNode } from "react";

type ContainerProps = {
  children?: ReactNode;
  className?: string;
};

const Container = (props: ContainerProps) => {
 return (
  <div className={`grid w-auto lg:w-[1000px] mx-auto justify-items-center ${props.className}`}>
    {props.children}
  </div>
 );
};

export default Container;
