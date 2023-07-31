import { ReactNode } from "react";

interface ThProps {
  children: ReactNode;
}

export function Th({ children }: ThProps) {
  return <th className="p-2">{children}</th>;
}
