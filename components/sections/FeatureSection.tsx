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
      {dom}
      <div
        className={cn(
          'lg:w-[1280px] w-full flex flex-col md:flex-row items-center mx-auto h-full relative gap-3 md:gap-10'
        )}
      >
        <div
          className={cn(
            'basis-1/2 shrink-0 grow-0',
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
        <div className="basis-1/2 shrink-0 grow-0"></div>
      </div>
    </div>
  );
};
