import { ReactNode } from 'react';
import './styles.css';

export interface MainHeaderProps {
  children?: ReactNode | ReactNode[];
}

export default function MainHeader({ children }: MainHeaderProps) {
  return (
    <>
      <h1 className="text-6xl font-semibold pb-5">{children}</h1>
      <div className="divider border-t-2 border-sky-500 pb-8"></div>
    </>
  );
}
