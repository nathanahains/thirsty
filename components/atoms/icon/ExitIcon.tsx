import React from "react";
import IconProps from "./interfaces";

const ExitIcon = ({
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
      className="svg-inline--fa fa-times-circle fa-w-16"
      data-icon="times-circle"
      data-prefix="fad"
      viewBox="0 0 512 512"
    >
      <g className="fa-group">
        <path
          fill={fill}
          d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm121.6 313.1a12 12 0 010 17L338 377.6a12 12 0 01-17 0L256 312l-65.1 65.6a12 12 0 01-17 0L134.4 338a12 12 0 010-17l65.6-65-65.6-65.1a12 12 0 010-17l39.6-39.6a12 12 0 0117 0l65 65.7 65.1-65.6a12 12 0 0117 0l39.6 39.6a12 12 0 010 17L312 256z"
          className="fa-secondary"
        ></path>
        <path
          fill="transparent"
          d="M377.6 321.1a12 12 0 010 17L338 377.6a12 12 0 01-17 0L256 312l-65.1 65.6a12 12 0 01-17 0L134.4 338a12 12 0 010-17l65.6-65-65.6-65.1a12 12 0 010-17l39.6-39.6a12 12 0 0117 0l65 65.7 65.1-65.6a12 12 0 0117 0l39.6 39.6a12 12 0 010 17L312 256z"
          className="fa-primary"
          opacity="0.4"
        ></path>
      </g>
    </svg>
  );
};

export default ExitIcon;
