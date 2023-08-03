import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export function Navigation({ children }: Props) {
  return <div className="mt-6 flex items-center gap-9">{children}</div>;
}
