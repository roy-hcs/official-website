'use client';
import Image from 'next/image';
import Link from 'next/link';

const InfoColumn = ({
  title,
  links,
}: {
  title: string;
  links: { title: string; link: string }[];
}) => {
  return (
    <div className="text-left">
      <div className="font-bold text-sm md:text-base text-[#0a0a0a] mb-3 md:mb-4">
        {title}
      </div>
      {links.map(item => {
        if (item.link) {
          return (
            <Link
              href={item.link}
              key={item.title}
              className="font-normal inline-block text-sm md:text-base text-[#737373] mb-3 md:mb-4"
            >
              {item.title}
            </Link>
          );
        } else {
          return (
            <div
              key={item.title}
              className="font-normal text-sm md:text-base text-[#737373] mb-3 md:mb-4"
            >
              {item.title}
            </div>
          );
        }
      })}
    </div>
  );
};
export default function RrhFooter() {
  const companyInfo = [
    { title: 'About Us', link: '/about' },
    { title: 'Blog', link: '' },
    { title: 'Careers', link: '' },
  ];
  const resourcesInfo = [
    { title: 'Guides', link: '' },
    { title: 'Tutorials', link: '' },
    { title: 'FAQ', link: '' },
  ];
  const AccountInfo = [
    { title: 'Your Account', link: '' },
    { title: 'Setting', link: '' },
    { title: 'Accessibility', link: '' },
  ];

  return (
    <div className="w-full md:h-[890px] mx-auto bg-[url('/assets/页尾背景.png')] bg-white bg-no-repeat bg-[center_38px] bg-[length:100%] text-center">
      <div className="relative md:w-[1106px] mx-auto pt-15 md:pt-[166px] w-full px-4">
        <div className="w-full md:w-[646px] text-xl md:text-[48px] font-semibold leading-none text-[#020f2c] text-left">
          Ready to transform your brokerage operations?
        </div>
        <div className="w-full md:w-[534px] mt-4 md:mt-12 mb-6 md:mb-[138px] md:h-12 text-sm md:text-lg font-medium text-[#020f2c] text-left">
          Our team will present the solution,demonstrate demo-cases, provide a
          commercial offer
        </div>
        <Image
          src="/assets/haame-logo.png"
          alt="Haame Logo"
          width={112}
          height={28}
        />
        {/* <SmallInput /> */}

        <div className="footer-info">
          <div className="flex mt-6 md:mt-10 justify-between md:justify-start md:gap-40">
            {/* Footer Info Top Description */}
            {/* <div className="flex-none w-[296px] max-lg:w-full">
              <div className="font-bold text-sm md:text-base text-[#0a0a0a] mb-[14px]">
                Subscribe to our newsletter
              </div>
              <p className="font-normal text-sm md:text-base text-[#737373] leading-6 text-left">
                As a financial technology company headquartered in Hong Kong,
                Haame is committed to providing reliable and continuous CRM
                operation management system services to brokerages and exchanges
                around the world.
              </p>
            </div> */}

            <InfoColumn title="Company" links={companyInfo} />
            <InfoColumn title="Resources" links={resourcesInfo} />
            <InfoColumn title="Account" links={AccountInfo} />
          </div>

          {/* Footer Info Bottom */}
          <div className="flex flex-col md:flex-row justify-between py-4 md:py-0 items-center gap-2 text-xs md:text-base md:h-[140px] text-[#737373] border-t border-[#f1f5f9] box-border md:mt-10">
            <div className="text-left">
              Copyright © HAAME TECH LIMITED 2024. All Rights Reserved
            </div>
            <div className="flex justify-between md:justify-start w-full md:w-auto gap-2 ">
              <Link href="/">Privacy Policy</Link>
              <Link href="/">Terms of Service</Link>
              <Link href="/">Cookies Settings</Link>
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
