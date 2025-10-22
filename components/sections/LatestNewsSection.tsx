import { SectionHeader } from '@/components/common/SectionHeader';

export function LatestNewsSection() {
  return (
    <div className="w-full bg-[#f50909]">
      <SectionHeader
        title="Latest News"
        subtitle="Market intelligence, product updates, and engaging with fintech communites around the globe, just fellow us"
      />
      <div className="w-full flex justify-center">
        <div className="w-full max-w-320">
          <div className="mt-[48px] grid lg:grid-cols-3 grid-cols-1 gap-[12px]">
            <div className="relative w-full">
              <div className="pt-[91%]" />
              <div className="absolute inset-0 bg-[url('/assets/1.png')] bg-no-repeat bg-center bg-cover"></div>
            </div>
            <div className="relative w-full">
              <div className="pt-[91%]" />
              <div className="absolute inset-0 bg-[url('/assets/1.png')] bg-no-repeat bg-center bg-cover"></div>
            </div>
            <div className="relative w-full">
              <div className="pt-[91%]" />
              <div className="absolute inset-0 bg-[url('/assets/1.png')] bg-no-repeat bg-center bg-cover"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
