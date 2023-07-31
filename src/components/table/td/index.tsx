import { ReactNode } from "react";

interface TdProps {
  children: ReactNode;
}

export function Td({ children }: TdProps) {
  return (
    <td className="border-r p-2 font-medium border-neutral-500 text-center xl:text-base">
      {children}
    </td>
  );
}
