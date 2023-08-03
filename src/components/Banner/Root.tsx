import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export function Root({ children }: Props) {
  return (
    <div className="w-5/12 bg-custom-black bg-opacity-80 py-48 ps-36 backdrop-blur">
      {children}
    </div>
  );
}
