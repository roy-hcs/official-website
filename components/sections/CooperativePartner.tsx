import Image from 'next/image';
import partnersImages from '@/public/assets/partnerImages.json';

export default function CooperativePartner() {

  return (
    <section className="py-3 lg:py-0 bg-white lg:w-[1161px] w-auto mx-auto lg:mt-15 mt-0">
      <div className='mb-10 text-center lg:text-3xl text-2xl font-bold'>With Leading Companies</div>
      
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
              <div key={`copy-${index}`} className="inline-block min-w-[200px] mx-4">
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
    </section>
  );
}
