import type { ReactNode } from "react";
/** Content is visible on the server and with JavaScript disabled. */
type Props = {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: string;
  duration?: number;
  stagger?: number;
};
export function Reveal({ children, className }: Props) {
  return <div className={className}>{children}</div>;
}
export const RevealGroup = Reveal;
export const RevealItem = Reveal;
