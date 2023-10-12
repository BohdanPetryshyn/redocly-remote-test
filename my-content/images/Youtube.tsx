import React from 'react';

export const Youtube = ({ color }) => (
  <svg
    width="32"
    height="32"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 31 31"
    fill="transparent">
    <circle
      className="stroke"
      cx="13.469"
      cy="13.469"
      r="13.469"
      stroke-width="2"
      fill-rule="evenodd"
      transform="translate(2 2)"
      stroke={color}></circle>
    <path
      className="foreground"
      d="M20.86 14.57l-7.51-4.35c-.21-.1-.37-.16-.58-.16-.16 0-.38.05-.53.16-.32.16-.53.53-.53.9v8.77c0 .37.21.74.53.96.16.05.37.1.53.1.21 0 .37-.05.58-.1l7.51-4.41c.32-.21.53-.53.53-.9 0-.44-.21-.76-.53-.97z"
      fill={color}></path>
  </svg>
);
