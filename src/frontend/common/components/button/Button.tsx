import { ButtonHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

export declare type ButtonProps = {
  disabled?: boolean;
  children?: any;
  className?: string;
  target?: string;
  href?: string;
  onClick?: any;
  style?: any;
};

const Button = (props: ButtonProps & ButtonHTMLAttributes<HTMLButtonElement>) => {

  return (
    <a
      className={twMerge(
        "bg-secondary text-dark active:bg-pimaryActive disabled:bg-disabled hover:bg-primaryHover",
        "whitespace-nowrap transition duration-250 ease-out hover:ease-in-out",
        "flex justify-center rounded-xl py-2 px-8 text-lg cursor-pointer",
        props.className
      )
      }
      target={props.target}
      href={props.href}
      rel="noreferrer"
      onClick={props.onClick}
      type={props.type}
      style={props.style}
    >
      {props.children}
    </a>
  );
}

export { Button };
