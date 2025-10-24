import { cn } from '@/lib/utils';
import React from 'react';

export const FeatureSection = ({
  title,
  description,
  PcImg,
  MobileImg,
  reverse = false,
}: {
  title: string;
  description: string;
  PcImg: React.ReactNode;
  MobileImg: React.ReactNode;
  reverse?: boolean;
}) => {
  return (
    <div className="w-full lg:h-[960px] relative">
      {PcImg}
      <div
        className={cn(
          'lg:w-[1280px] w-full flex flex-col md:flex-row items-center mx-auto h-full relative gap-3 md:gap-10',
          reverse ? 'md:flex-row-reverse' : ''
        )}
      >
        <div className="basis-1/2 shrink-0 grow-0"></div>
        <div
          className={cn('basis-1/2 shrink-0 grow-0 md:text-left text-center')}
        >
          <h2 className="lg:text-4xl text-3xl font-bold text-[#0a0a0a]">
            {title}
          </h2>
          <p className="lg:text-base text-sm text-[#737373] mt-[20px]">
            {description}
          </p>
        </div>
        <div className="relative h-120 -my-15 w-full md:hidden">
          {MobileImg}
        </div>
      </div>
    </div>
  );
};
