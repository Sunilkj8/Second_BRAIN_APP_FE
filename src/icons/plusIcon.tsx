import React from "react";

export interface PlusIconProps {
  size: "sm" | "md" | "lg";
}

const plusIconSize = {
  sm: "size-3",
  md: "size-5",
  lg: "size-6",
};

const PlusIcon = (props: PlusIconProps) => {
  return (
    <div>
      {" "}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        className={plusIconSize[props.size]}
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M12 4.5v15m7.5-7.5h-15"
        />
      </svg>
    </div>
  );
};

export default PlusIcon;
