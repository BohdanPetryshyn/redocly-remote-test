import React from 'react';

export const Facebook = ({ color }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="32"
    height="32"
    viewBox="0 0 31 31">
    <g fill-rule="evenodd" fill="transparent" transform="translate(2 2)">
      <circle
        className="stroke"
        cx="13.469"
        cy="13.469"
        r="13.469"
        stroke-width="2"
        stroke={color}></circle>
      <path
        className="foreground"
        d="M12.141 20.003h2.426v-6.169h1.693l.181-2.064h-1.874v-1.177c0-.487.1-.68.56-.68h1.314V7.77H14.76c-1.806 0-2.62.807-2.62 2.352v1.648h-1.261v2.09h1.262v6.143z"
        fill={color}></path>
    </g>
  </svg>
);
