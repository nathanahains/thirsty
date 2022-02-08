import React from "react";
import IconProps from "./interfaces";

const ChevronLeft = ({
  height = "20px",
  width = "20px",
  fill = "currentColor",
}: IconProps) => {
  return (
    <svg
      height={height}
      width={width}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className="svg-inline--fa fa-chevron-left fa-w-8"
      data-icon="chevron-left"
      data-prefix="far"
      viewBox="0 0 256 512"
    >
      <path
        fill={fill}
        d="M231.293 473.899l19.799-19.799c4.686-4.686 4.686-12.284 0-16.971L70.393 256 251.092 74.87c4.686-4.686 4.686-12.284 0-16.971L231.293 38.1c-4.686-4.686-12.284-4.686-16.971 0L4.908 247.515c-4.686 4.686-4.686 12.284 0 16.971L214.322 473.9c4.687 4.686 12.285 4.686 16.971-.001z"
      ></path>
    </svg>
  );
};

export default ChevronLeft;
