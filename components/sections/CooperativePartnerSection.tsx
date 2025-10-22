import Image from 'next/image';
import partnersImages from '@/public/assets/partnerImages.json';

export default function CooperativePartnerSection() {
  return (
    <div className="flex justify-center">
      <div className="lg:h-[366px] h-auto bg-[#ffffff] lg:w-320 lg:py-[0] lg:px-[0] w-full py-[12px] px-[24px]">
        <div className="mt-10.5 mb-8 text-center lg:text-lg text-base text-[#656B8A] leading-7">
          With Leading Companies
        </div>
        <div className="relative overflow-hidden">
          <div className="marquee">
            <div className="marquee-content">
              {partnersImages.map((item, index) => (
                <div key={index} className="inline-block min-w-[200px] mx-4">
                  <Image
                    alt={`partner-${index}`}
                    src={item}
                    width={200}
                    height={100}
                    className="object-contain"
                  />
                </div>
              ))}
              {partnersImages.map((item, index) => (
                <div
                  key={`copy-${index}`}
                  className="inline-block min-w-[200px] mx-4"
                >
                  <Image
                    alt={`partner-copy-${index}`}
                    src={item}
                    width={200}
                    height={100}
                    className="object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
