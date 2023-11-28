import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  size?: "small" | "large";
}

export function Subtitle({ children, size = "large" }: Props) {
  const fontSizes = {
    small: "text-3xl",
    large: "text-6xl",
  };

  return (
    <p
      className={`${fontSizes[size]} my-4 font-poppins font-bold leading-tight text-white`}
    >
      {children}
    </p>
  );
}
