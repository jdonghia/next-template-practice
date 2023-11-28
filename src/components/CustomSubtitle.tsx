import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

export function CustomSubtitle({ children, className }: ComponentProps<"p">) {
  return (
    <p className={twMerge("text-4xl font-bold text-custom-black", className)}>
      {children}
    </p>
  );
}
