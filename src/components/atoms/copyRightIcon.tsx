import React from "react";
import { IconProps } from "@/libs";

const CopyRightIcon: React.FC<IconProps> = ({
  height = "16",
  width = "16",
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_1_1108)">
        <path
          d="M8.00004 14.6663C11.6819 14.6663 14.6667 11.6816 14.6667 7.99967C14.6667 4.31778 11.6819 1.33301 8.00004 1.33301C4.31814 1.33301 1.33337 4.31778 1.33337 7.99967C1.33337 11.6816 4.31814 14.6663 8.00004 14.6663Z"
          stroke="#4B5563"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M10 6.23567C9.64172 5.82948 9.16823 5.54201 8.64254 5.41154C8.11685 5.28106 7.5639 5.31376 7.05725 5.50528C6.5506 5.69679 6.11429 6.03805 5.80636 6.48365C5.49843 6.92924 5.3335 7.45804 5.3335 7.99967C5.3335 8.54131 5.49843 9.07011 5.80636 9.5157C6.11429 9.9613 6.5506 10.3026 7.05725 10.4941C7.5639 10.6856 8.11685 10.7183 8.64254 10.5878C9.16823 10.4573 9.64172 10.1699 10 9.76367"
          stroke="#4B5563"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_1_1108">
          <rect width="16" height="16" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default CopyRightIcon;
