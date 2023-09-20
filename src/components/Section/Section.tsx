import { ReactNode } from 'react';

export default function Section({ children }: { children: ReactNode | ReactNode[] }) {
  return <div className="w-full flex flex-col items-center">{children}</div>;
}
