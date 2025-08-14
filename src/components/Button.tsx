import React, { type ReactElement } from "react";

export interface ButtonProps {
  variant: "primary" | "secondary";
  size: "sm" | "md" | "lg";
  text: string;
  startIcon?: ReactElement | string;
  endIcon?: ReactElement | string;
  OnClick: () => void;
}

const variantStyles = {
  primary: "bg-purple-600 text-white",
  secondary: "bg-purple-300 text-purple-600",
};

const sizeStyles = {
  sm: "w-40 h-full px-3 py-1 rounded-sm",
  md: "w-40 h-10 px-4 py-2  rounded-md",
  lg: "w-40 px-5 py-3 rounded-lg",
};

const ButtonComp = (props: ButtonProps) => {
  return (
    <div
      className={`${sizeStyles[props.size]} ${
        variantStyles[props.variant]
      } text-center flex  justify-center items-center gap-2 cursor-pointer`}
      onClick={props.OnClick}
    >
      {props.startIcon ? <span>{props.startIcon}</span> : ""} {props.text}
    </div>
  );
};

export default ButtonComp;
