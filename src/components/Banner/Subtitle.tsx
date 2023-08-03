import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export function Subtitle({ children }: Props) {
  return (
    <p className="my-4 font-poppins text-6xl font-bold leading-tight text-white">
      {children}
    </p>
  );
}
