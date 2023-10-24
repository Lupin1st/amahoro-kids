import { ReactNode } from 'react';

export interface SectionProps {
  children?: ReactNode | ReactNode[];
}

export default function Section({ children }: SectionProps) {
  return <div className="w-full flex flex-col items-center">{children}</div>;
}
