import React from 'react';

export const Twitter = ({ color }) => (
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
        d="M11.296 20.203a8.471 8.471 0 008.458-8.948 6.072 6.072 0 001.48-1.557 5.912 5.912 0 01-1.709.473 3.005 3.005 0 001.309-1.663 5.924 5.924 0 01-1.89.73 2.953 2.953 0 00-2.168-.95 2.999 2.999 0 00-2.9 3.693 8.42 8.42 0 01-6.132-3.143 3.03 3.03 0 00.921 4.016 2.942 2.942 0 01-1.348-.376 3 3 0 002.387 2.988 2.95 2.95 0 01-1.344.051 2.983 2.983 0 002.78 2.089 5.938 5.938 0 01-4.406 1.245 8.358 8.358 0 004.562 1.352z"
        fill={color}></path>
    </g>
  </svg>
);
