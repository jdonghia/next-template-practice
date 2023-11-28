import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

interface Props extends ComponentProps<"p"> {
  text: string;
}

export function UnderlineButton({ text, className }: Props) {
  return (
    <p
      className={twMerge(
        "cursor-pointer font-inter text-lg font-semibold underline",
        className,
      )}
    >
      {text}
    </p>
  );
}
