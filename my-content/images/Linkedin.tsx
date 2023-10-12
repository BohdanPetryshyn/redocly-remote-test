import React from 'react';

export const Linkedin = ({ color }) => (
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
        d="M17.507 18.817v-4.331c0-1.188-.447-1.851-1.378-1.851-1.012 0-1.541.69-1.541 1.851v4.331h-2.427v-8.251h2.427v1.112a2.849 2.849 0 012.463-1.364c1.733 0 2.974 1.068 2.974 3.278v5.225h-2.518zm-9.494 0v-8.251h2.53v8.25l-2.53.001zM7.77 7.963c-.003-.4.153-.786.434-1.072a1.515 1.515 0 011.066-.45c.4.003.784.165 1.066.45.28.286.437.671.434 1.072.003.401-.153.787-.434 1.073a1.515 1.515 0 01-1.066.45 1.515 1.515 0 01-1.066-.45 1.515 1.515 0 01-.434-1.073z"
        fill={color}></path>
    </g>
  </svg>
);
