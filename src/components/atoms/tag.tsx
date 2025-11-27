import { cn } from "@/libs/utils";
import React from "react";

export type TagProps = {
  children?: React.ReactNode;
  content?: string;
  styling?: string;
};

const Tag = ({ content, children, styling }: TagProps) => {
  return (
    <div
      className={cn(
        "bg-gray-200 text-gray-600 rounded-[12px] px-5 py-1",
        styling
      )}
    >
      {children}
      {content}
    </div>
  );
};

export default Tag;
