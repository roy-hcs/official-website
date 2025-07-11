import { ReactNode } from 'react';

interface ContainerWrapProps {
  children: ReactNode;
  className?: string;
}

export default function ContainerWrap({
  children,
  className = '',
}: ContainerWrapProps) {
  return (
    <div className={`max-w-[1228px] w-full mx-auto md:px-0 px-4 ${className}`}>
      {children}
    </div>
  );
}
