import { cn } from '@/lib/utils';
import React from 'react';

export const FeatureSection = ({
  title,
  description,
  dom,
  reverse = false,
}: {
  title: string;
  description: string;
  dom: React.ReactNode;
  reverse?: boolean;
}) => {
  return (
    <div className="w-full h-[960px] relative">
      <div className={cn('w-[1280px] m-auto h-full relative')}>
        <div
          className={cn(
            'lg:w-[584px] absolute top-1/2 -translate-y-1/2',
            reverse ? 'left-0' : 'right-0'
          )}
        >
          <h2 className="text-4xl font-bold text-[#0a0a0a]">{title}</h2>
          <p className="text-base text-[#737373] mt-[20px]">{description}</p>
        </div>
      </div>
      {dom}
    </div>
  );
};
