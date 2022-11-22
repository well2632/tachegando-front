import React from "react";

function Check({ fill = "white", stroke = "white", onClick, width = 24, height = 24, className = "icon" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill={fill}
      stroke={stroke}
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      class={className}
    >
      <polyline points="20 6 9 17 4 12"></polyline>
    </svg>
  );
}

export default Check;
