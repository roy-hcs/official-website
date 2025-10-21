import { cn } from '@/lib/utils';
import Image from 'next/image';

export const FeatureSection = ({
  title,
  description,
  image,
  link,
  linkText,
  reverse = false,
}: {
  title: string;
  description: string;
  image?: string;
  link?: string;
  linkText?: string;
  reverse?: boolean;
}) => {
  return (
    <div className="w-full">
      <div
        className={cn(
          'w-[1280px] px-6 flex gap-16 items-center m-auto',
          reverse ? 'flex-row-reverse' : 'flex-row'
        )}
      >
        <div className="basis-1/2 flex-1 bg-green-500 h-full">
          {image && (
            <Image src={image} alt={title} className="w-full h-auto " />
          )}
        </div>
        <div className="flex flex-col gap-8 basis-1/2 flex-1 outline">
          <h2 className="text-4xl font-bold text-[#0a0a0a]">{title}</h2>
          <p className="text-[#737373] text-base">{description}</p>
          {link && linkText && (
            <a href={link} className="text-[#0a0a0a] text-base font-semibold">
              {linkText}
            </a>
          )}
        </div>
      </div>
    </div>
  );
};
