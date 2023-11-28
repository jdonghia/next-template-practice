import { ComponentProps, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface Props extends ComponentProps<"div"> {
  children: ReactNode;
  background: string;
}

export function Root({ children, background, className }: Props) {
  return (
    <div className={`${background} bg-right bg-no-repeat`}>
      <div
        className={twMerge(
          "bg-custom-black bg-opacity-80 py-48 ps-36 backdrop-blur w-5/12",
          className,
        )}
      >
        {children}
      </div>
    </div>
  );
}

