import { ReactNode } from 'react';

export interface CenterPageProps {
  children?: ReactNode | ReactNode[];
}

export default function CenterPage({ children }: CenterPageProps) {
  return (
    <div className="w-full flex flex-col items-center">
      <div className="max-w-7xl flex flex-col items-center space-y-12 p-8">{children}</div>
    </div>
  );
}
