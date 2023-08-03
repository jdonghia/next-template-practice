import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export function Description({ children }: Props) {
  return <p className="text-gray-300">{children}</p>;
}
