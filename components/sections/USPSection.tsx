import { cn } from '@/lib/utils';
import useEmblaCarousel from 'embla-carousel-react';

export type USPItem = {
  title: string;
  description?: string;
  Icon: React.ReactNode;
};

const USP = ({ usp }: { usp: USPItem }) => {
  return (
    <div className="flex flex-col items-center justify-center gap-5">
      <div>{usp.Icon}</div>
      <h3
        className={cn(
          'md:text-base text-sm text-[#0a0a0a] font-semibold text-center',
          !usp.description ? 'min-h-18' : ''
        )}
      >
        {usp.title}
      </h3>
      {usp.description && (
        <p className="text-[#737373] text-sm md:text-base text-center">
          {usp.description}
        </p>
      )}
    </div>
  );
};
export const USPSection = ({
  USPs,
  connector,
}: {
  USPs: USPItem[];
  connector?: React.ReactNode;
}) => {
  let renderUSPs: (
    | (USPItem & { isConnector: false })
    | { isConnector: true }
  )[] = [];
  if (connector) {
    USPs.forEach((usp, index) => {
      renderUSPs.push({ ...usp, isConnector: false });
      if (index !== USPs.length - 1) {
        renderUSPs.push({ isConnector: true });
      }
    });
  } else {
    renderUSPs = USPs.map(usp => ({ ...usp, isConnector: false }));
  }
  const [emblaRef] = useEmblaCarousel();

  return (
    <div className="md:w-[1232px] w-full mx-auto">
      <div className="hidden md:flex items-center gap-6">
        {renderUSPs.map((usp, index) => {
          if (usp.isConnector) {
            return <div key={index}>{connector}</div>;
          }
          return (
            <div key={usp.title + index} className="flex-1">
              <USP usp={usp} />
            </div>
          );
        })}
      </div>
      <div className="embla overflow-hidden block md:hidden" ref={emblaRef}>
        <div className="embla_container flex w-full">
          {USPs.map((usp, index) => {
            return (
              <div className="embla__slide grow-0 shrink-0 w-full" key={index}>
                <USP usp={usp} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
