'use client';
import Image from 'next/image';
import Link from 'next/link';
import { FaceBookIcon } from '../icons/FaceBookIcon';
import { InstagramIcon } from '../icons/InstagramIcon';
import { YoutubeIcon } from '../icons/YoutubeIcon';
import { WhatsAppIcon } from '../icons/WhatsAppIcon';
import { XIcon } from '../icons/XIcon';
import { cn } from '@/lib/utils';

const InfoColumn = ({
  title,
  links,
}: {
  title: string;
  links: { title: string; link: string }[];
}) => {
  return (
    <div className="text-left">
      <div className="font-bold text-sm md:text-base text-[#0a0a0a] mb-2 md:mb-4">
        {title}
      </div>
      <div className="flex flex-row gap-3 md:gap-0 md:flex-col">
        {links.map(item => {
          if (item.link) {
            return (
              <Link
                href={item.link}
                key={item.title}
                className="font-normal inline-block text-nowrap text-sm md:text-base text-[#737373] md:mb-3"
              >
                {item.title}
              </Link>
            );
          } else {
            return (
              <div
                key={item.title}
                className="font-normal text-sm text-nowrap md:text-base text-[#737373] md:mb-3"
              >
                {item.title}
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};

const SocialMediaIcons = ({ cls }: { cls?: string }) => {
  return (
    <div className={cn('text-[#0a0a0a] flex items-center gap-4', cls)}>
      <FaceBookIcon />
      <InstagramIcon />
      <XIcon />
      <YoutubeIcon />
      <WhatsAppIcon />
    </div>
  );
};
export default function RrhFooter() {
  const productsInfo = [
    { title: 'Forex CRM', link: '/products/forex-CRM' },
    { title: 'PAMM', link: '/products/pamm' },
    { title: 'Copytrading', link: '/products/copy-trading' },
  ];
  const companyInfo = [
    { title: 'About US', link: '/about-us' },
    { title: 'Contact US', link: '/contact-us' },
  ];
  const StatementInfo = [
    { title: 'Privacy Policy', link: '/privacy-policy' },
    { title: 'Terms of Service', link: '/terms-of-service' },
    { title: 'Cookies Settings', link: '/cookies-settings' },
  ];

  return (
    <div className="w-full md:h-[890px] mx-auto bg-[url('https://rrh-cn.oss-cn-shenzhen.aliyuncs.com/images/bg4.png')] bg-white bg-no-repeat bg-[center_38px] bg-[length:100%] text-center">
      <div className="relative md:w-[1106px] mx-auto pt-15 md:pt-[166px] w-full px-4">
        <Image
          src="/assets/haame-logo.png"
          alt="Haame Logo"
          className="block md:hidden mb-4"
          width={112}
          height={28}
        />
        <div className="w-full md:w-[646px] text-lg md:text-[48px] font-medium md:font-semibold leading-none text-[#020f2c] text-left">
          Ready to transform your brokerage operations?
        </div>
        <div className="w-full md:w-[534px] mt-4 md:mt-12 mb-4 md:mb-[138px] md:h-12 text-sm md:text-lg md:font-medium text-[#020f2c] text-left">
          Our team will present the solution,demonstrate demo-cases, provide a
          commercial offer
        </div>
        <Image
          src="/assets/haame-logo.png"
          alt="Haame Logo"
          className="hidden md:block"
          width={112}
          height={28}
        />
        {/* <SmallInput /> */}

        <div className="footer-info">
          <div className="flex flex-col md:flex-row mt-6 md:mt-10 gap-3 pb-3 md:pb-0 md:gap-40">
            {/* Footer Info Top Description */}
            <div className="flex-none w-[328px] max-lg:w-full text-left">
              <div className="mb-4 md:mb-6">
                <div className="font-bold text-sm md:text-base text-[#0a0a0a] mb-1">
                  Address:
                </div>
                <p className="font-normal text-sm md:text-base text-[#737373]">
                  FLAT/RM 917B, BLK A, 9/F, NEW MANDARIN PLAZA, NO.14 SCIENCE
                  MUSEUM ROAD, TSIMSHATSUI
                </p>
              </div>
              <div className="md:mb-6">
                <div className="font-bold text-sm md:text-base text-[#0a0a0a] mb-1">
                  Contact:
                </div>
                <a
                  href="mailto:info@haame.com"
                  className="font-normal block text-sm md:text-base text-[#737373]"
                >
                  info@haame.com
                </a>
                <a
                  href="tel:+85264445635"
                  className="font-normal block text-sm md:text-base text-[#737373]"
                >
                  +852 64445635
                </a>
              </div>
              <SocialMediaIcons cls="hidden md:flex" />
            </div>

            <InfoColumn title="Products" links={productsInfo} />
            <InfoColumn title="Resources" links={companyInfo} />
            <InfoColumn title="Account" links={StatementInfo} />
            <SocialMediaIcons cls="md:hidden flex" />
          </div>

          {/* Footer Info Bottom */}
          <div className="flex flex-col-reverse md:flex-row justify-center py-4 md:py-0 items-center gap-2 text-xs md:text-base md:h-[70px] text-[#737373] border-t border-[#f1f5f9] box-border md:mt-8">
            <div className="text-left">
              Copyright © HAAME TECH LIMITED 2024. All Rights Reserved
            </div>
          </div>
        </div>

        {/* Background Elements */}
        <div className="absolute top-0 left-[calc(646px+36px)] w-[462px] h-[406px] bg-[url('/assets/logo-立体效果-1.png')] bg-no-repeat bg-center bg-cover max-lg:hidden"></div>
        <div className="absolute top-[38px] left-[646px] w-[90px] h-[120px] bg-[url('/assets/logo-立体效果-2.png')] bg-no-repeat bg-center bg-cover max-lg:hidden"></div>
        <div className="absolute top-[350px] left-[532px] w-[64px] h-[98px] bg-[url('/assets/logo-立体效果-3.png')] bg-no-repeat bg-center bg-cover max-lg:hidden"></div>
        <div className="absolute top-[466px] left-[calc(418px+496px)] w-[64px] h-[56px] bg-[url('/assets/logo-立体效果-4.png')] bg-no-repeat bg-center bg-cover max-lg:hidden"></div>
        <div className="absolute top-[250px] left-[calc(532px+620px)] w-[44px] h-[72px] bg-[url('/assets/logo-立体效果-5.png')] bg-no-repeat bg-center bg-cover max-lg:hidden"></div>
      </div>
    </div>
  );
}
