import React from "react";

export default function CheckIcon({ fill = "#666" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="currentColor"
    >
      <path
        fill={fill}
        d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10Zm-.997-6 7.07-7.071-1.414-1.414-5.656 5.657-2.829-2.829-1.414 1.414L11.003 16Z"
      />
      <defs>
        <path fill="#fff" d="M0 0h24v24H0z" />
      </defs>
    </svg>
  );
}
