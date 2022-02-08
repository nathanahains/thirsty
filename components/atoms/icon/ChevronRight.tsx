import React from "react";
import IconProps from "./interfaces";

const ChevronRight = ({
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
      className="svg-inline--fa fa-chevron-right fa-w-8"
      data-icon="chevron-right"
      data-prefix="far"
      viewBox="0 0 256 512"
    >
      <path
        fill={fill}
        d="M24.707 38.101L4.908 57.899c-4.686 4.686-4.686 12.284 0 16.971L185.607 256 4.908 437.13c-4.686 4.686-4.686 12.284 0 16.971L24.707 473.9c4.686 4.686 12.284 4.686 16.971 0l209.414-209.414c4.686-4.686 4.686-12.284 0-16.971L41.678 38.101c-4.687-4.687-12.285-4.687-16.971 0z"
      ></path>
    </svg>
  );
};

export default ChevronRight;
