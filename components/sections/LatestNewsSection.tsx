import { SectionHeader } from '@/components/common/SectionHeader';
import Image from 'next/image';
import Link from 'next/link';

const NewsItem = ({
  link,
  image,
  title,
  content,
}: {
  link: string;
  image: string;
  title: string;
  content: string;
}) => {
  return (
    <Link href={link}>
      <div className="border border-[#e5e5e5] bg-[#ffffff] h-full rounded-[14px] flex flex-col shadow-[0_1px_3px_0_rgba(0,0,0,0.10),0_1px_2px_-1px_rgba(0,0,0,0.10)] overflow-hidden">
        <div className="relative w-full basis-3/5 shrink-0 aspect-[1.25]">
          <Image src={image} alt={title} fill />
        </div>
        <div className="p-3 md:p-6 basis-2/5 flex flex-col justify-between">
          <h2 className="text-[#020F2C] text-base md:text-lg font-semibold">
            {title}
          </h2>
          <h3 className="text-[#656B8A] text-sm mt-2">{content}</h3>
        </div>
      </div>
    </Link>
  );
};

export function LatestNewsSection() {
  const newsItems = [
    {
      title:
        '🌍Haame is heading for Dubai & Join us at the Forex Traders Summit 2025!',
      content:
        'Forex Traders Summit Dubai 2025 As a trusted fintech infrastructure provider for brokerages and exchanges across Asia, MENA, and beyond,...',
      link: '/post/one',
      image: '/assets/home/4.png',
    },
    {
      title:
        'Decrypted Insights | How Does Haame&apos;s Email API Integration Empower Brokerages in Client Outreach?',
      content:
        'Greetings! Welcome to this edition of Haame Decrypted Insights. Recently....',
      link: '/post/two',
      image: '/assets/home/6.jpg',
    },
    {
      title: 'Shine bright! Haame shines at 2024 Singapore Fintech Festival',
      content:
        'On November 8, 2024, the Singapore Fintech Festival (SFF), which has attracted worldwide attention, came to a successful conclusion. This....',
      link: '/post/three',
      image: '/assets/home/7.avif',
    },
  ];
  return (
    <div className="w-full lg:h-[832px] h-auto">
      <div className="pt-[96px]">
        <SectionHeader
          title="Latest News"
          subtitle="Market intelligence, product updates, and engaging with fintech communites around the globe, just fellow us"
        />
      </div>
      <div className="w-full flex justify-center pt-12">
        <div className="lg:w-full w-[90%] max-w-320">
          <div className="grid lg:grid-cols-3 grid-cols-1 gap-3">
            {newsItems.map(({ link, image, title, content }) => {
              return (
                <NewsItem
                  key={title}
                  link={link}
                  image={image}
                  title={title}
                  content={content}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
