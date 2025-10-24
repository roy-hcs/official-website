import { MapPin, Phone } from 'lucide-react';

export default function ContactUsPage() {
  return (
    <div className="w-full md:w-[1200px] mx-auto p-3 md:p-0">
      <div className="flex flex-col md:flex-row gap-3 md:gap-8 md:my-20">
        <div className="basis-1/2 shrink-0 grow-1 font-bold text-[#0a0a0a]">
          <h1 className="md:text-2xl text-xl capitalize mb-4 md:mb-15">
            get in touch
          </h1>
          <div className="flex gap-4 items-center mb-10">
            <Phone />
            <a
              href="tel:+85264445635"
              className="font-normal block text-sm md:text-base"
            >
              +852 64445635
            </a>
          </div>
          <div className="flex items-start gap-4">
            <MapPin className="shrink-0" />
            <p className="font-normal text-sm md:text-base">
              FLAT/RM 917B, BLK A, 9/F, NEW MANDARIN PLAZA, NO.14 SCIENCE MUSEUM
              ROAD, TSIMSHATSUI
            </p>
          </div>
        </div>
        <div className="basis-1/2 shrink-0 grow-1"></div>
      </div>
    </div>
  );
}
