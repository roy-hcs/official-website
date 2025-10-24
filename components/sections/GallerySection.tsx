import { SectionHeader } from '@/components/common/SectionHeader';

export function GallerySection() {
  return (
    <div className="w-full lg:pb-[160px] pb-[80px]">
      <SectionHeader
        title="Why choose us"
        subtitle="10+ years of fintech & system development expertise. Military-grade security. Optimize operations, cut costs, and build mull asset digital trading futures for financial institutions"
      />
      <div className="w-full flex justify-center">
        <div className="w-full lg:w-320">
          <div className="mt-[48px] grid lg:grid-cols-3 lg:gap-[24px] gap-[6px] grid-cols-1">
            <div className="relative w-full">
              <div className="pt-[100%]" />
              <div className="absolute inset-0 bg-[url('/assets/home/1.png')] bg-no-repeat bg-center bg-cover"></div>
            </div>
            <div className="relative w-full">
              <div className="pt-[100%]" />
              <div className="absolute inset-0 bg-[url('/assets/home/2.png')] bg-no-repeat bg-center bg-cover"></div>
            </div>
            <div className="relative w-full">
              <div className="pt-[100%]" />
              <div className="absolute inset-0 bg-[url('/assets/home/3.png')] bg-no-repeat bg-center bg-cover"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
