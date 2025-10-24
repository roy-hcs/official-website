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
    <div className="w-full lg:h-[960px] h-[480px] relative">
      <div className={cn('lg:w-[1280px] w-full m-auto h-full relative')}>
        <div
          className={cn(
            'lg:w-[584px] w-full absolute text-center top-1/2 -translate-y-1/2',
            reverse ? 'left-0' : 'right-0'
          )}
        >
          <h2 className="lg:text-4xl text-3xl font-bold text-[#0a0a0a]">
            {title}
          </h2>
          <p className="lg:text-base text-sm text-[#737373] mt-[20px]">
            {description}
          </p>
        </div>
      </div>
      {dom}
    </div>
  );
};
