'use client';

import SubmitInfo from '@/components/common/SubmitInfo';
import { PAMMIconConnector } from '@/components/icons/PAMMIconConnector';
import { PAMMIconFour } from '@/components/icons/PAMMIconFour';
import { PAMMIconOne } from '@/components/icons/PAMMIconOne';
import { PAMMIconThree } from '@/components/icons/PAMMIconThree';
import { PAMMIconTwo } from '@/components/icons/PAMMIconTwo';
import { RrhClose } from '@/components/icons/RrhClose';
import { FAQSection } from '@/components/sections/FAQSection';
import { USPItem, USPSection } from '@/components/sections/USPSection';
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogTrigger,
  AlertDialogCancel,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog';
import { Input } from '@/components/ui/input';

function HeroSection() {
  const USPs: USPItem[] = [
    {
      title: 'Investor deposits funds and selects investment manager',
      Icon: <PAMMIconOne />,
    },
    {
      title: 'Funds pooled into shared account',
      Icon: <PAMMIconTwo />,
    },
    {
      title: 'Investment manager executes trades',
      Icon: <PAMMIconThree />,
    },
    {
      title:
        'Profits and losses automatically allocated according to investment ratio',
      Icon: <PAMMIconFour />,
    },
  ];
  return (
    <div className="w-full md:h-[910px] relative">
      <div className="absolute inset-0 -z-1 before:absolute before:inset-0 before:bg-[url('/assets/PAMMHeroSectionGridBg.png'),url('/assets/PAMMHeroSectionProduct.png')] hidden md:block before:bg-no-repeat before:bg-[center_0] before:bg-contain"></div>
      <div className="flex justify-center">
        <div className="md:pt-[192px] h-auto">
          <div className="lg:w-[672px] w-full">
            <div className="text-[#020F2c] text-4xl md:text-5xl font-bold text-center">
              PAMM Fund Management
            </div>
            <div className="mb-8 mt-6 text-[#737373] font-normal md:text-lg text-base leading-7 text-center">
              Percentage Allocation Management Module, or simply known as PAMM,
              is a kind of funding mode for asset management. Funds are
              aggregated within a master trading account and are traded by the
              fund manager, with profits and losses distributed proportionally
              among the investors.
            </div>
            <div className="flex justify-center gap-2 mb-23">
              <Input
                className="w-66.5 h-9 bg-white border border-[#E5E5E5] rounded-[8px] shadow-sm"
                placeholder="Enter your Email"
              />
              <AlertDialog>
                <AlertDialogTrigger className="rounded-[8px] bg-[#171717] shadow-sm py-[8px] px-[16px] text-[#FAFAFA] lg:text-[14px] text-[12px] font-[500] leading-[20px]">
                  Get A Demo
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogCancel className="absolute top-4 right-4 h-8 w-8 rounded-full p-0 hover:bg-gray-100 border-0">
                    <div className="w-[24px] h-[24px]">
                      <RrhClose />
                    </div>
                  </AlertDialogCancel>
                  <AlertDialogHeader>
                    <AlertDialogTitle className="text-2xl font-semibold text-center"></AlertDialogTitle>
                  </AlertDialogHeader>
                  <SubmitInfo />
                </AlertDialogContent>
              </AlertDialog>
            </div>
          </div>
        </div>
      </div>

      <USPSection USPs={USPs} connector={<PAMMIconConnector />} />
    </div>
  );
}

export default function RrhPammPage() {
  const questions = [
    {
      question: 'What is PAMM? Who is it suitable for?',
      answer:
        'PAMM allows investors to entrust their funds to professional fund managers, with profits and losses allocated according to the investment ratio. It is suitable for brokers who wish to attract passive investors and professional fund managers to increase trading volume.',
    },
    {
      question: 'How can investors choose reliable fund managers?',
      answer:
        'Our platform provides transparent performance metrics, including historical returns, maximum drawdown, and profit details. Customers can screen fund managers based on their risk preferences, trading strategies, and historical performance to easily match their investment goals.',
    },
    {
      question: 'What are the advantages for PAMM investors?',
      answer:
        'PAMM offers passive investment opportunities for investors to enjoy the trading strategies of professional fund managers without having to trade themselves. Haame PAMM provides transparent fund data, allowing investors to monitor the investment methods of fund managers and verify the direction of each fund.',
    },
    {
      question: 'What are the advantages for PAMM fund managers?',
      answer:
        'Fund managers can attract more investors through PAMM, expand their managed fund scale, and earn performance fees or commissions. Haame PAMM offers a high-performance trading environment (low latency <1 second), detailed performance display, and a flexible and automatic fee settlement mechanism, helping managers enhance their reputation and income.',
    },
    {
      question: 'What fees are associated with PAMM accounts?',
      answer:
        'PAMM accounts typically include performance fees and profit-sharing fees. Profit-sharing is set by the fund manager, while performance fees are set by the broker. This achieves a win-win situation for the broker, investment manager, and investors.',
    },
    {
      question: 'Can investors withdraw funds from PAMM accounts at any time?',
      answer:
        "Generally, fund managers set a lock-up period when opening PAMM products. Investors can apply for withdrawal according to the fund manager's terms at the end of the period. Funds are usually redeemed and credited after the shares are confirmed, ensuring a clear process. If the fund manager allows early redemption, investors can redeem after the shares are confirmed.",
    },
    {
      question:
        'Do investors or fund managers need to switch platforms to invest?',
      answer:
        'Not at all. Customers can directly make PAMM investments through the CRM user interface, handling all operations such as purchasing, redeeming, and settling PAMM products in one place, without the need to switch platforms, saving time and enhancing user experience.',
    },
  ];
  return (
    <div className="w-full h-full overflow-y-auto">
      <HeroSection />
      <div className="md:aspect-[2/1] w-full relative md:py-23">
        <div className="absolute inset-x-0 -inset-y-[120px] -z-1 inset-0 bg-[url('/assets/PAMMSection2Product.png')] hidden md:block bg-position-[20px_0] bg-no-repeat bg-contain"></div>
        <div className="md:w-[1200px] relative h-full mx-auto flex flex-col md:flex-row items-center">
          <div className="relative basis-1/2 shrink-0"></div>
          <div className="basis-1/2 shrink-0 flex flex-col p-3 md:p-0 gap-3 md:gap-8 text-center">
            <h3 className="text-3xl md:text-4xl font-bold text-[#0a0a0a]">
              Centralized Fund Management
            </h3>
            <div className="text-sm md:text-base text-[#737373]">
              Investors participate in the master account by purchasing fund
              shares, eliminating the need for individual sub-accounts.
            </div>
            <div className="text-sm md:text-base text-[#737373]">
              All capital is centrally managed by professional fund managers,
              ensuring efficient trading execution and risk-controlled asset
              operations.
            </div>
            <div className="relative h-120 -my-15 w-full md:hidden">
              <div className="absolute inset-0 -z-1 bg-[url('/assets/PAMMSection2Product.png')] block md:hidden bg-position-[-50_-30] bg-no-repeat bg-[length:150%]"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="md:aspect-[2/1] w-full relative md:py-23">
        <div className="absolute inset-x-0 -inset-y-[120px] -z-1 inset-0 bg-[url('/assets/PAMMSection3Product.png')] hidden md:block bg-position-[100%_0] bg-no-repeat bg-contain"></div>

        <div className="md:w-[1200px] relative h-full mx-auto flex flex-col md:flex-row items-center">
          <div className="basis-1/2 shrink-0 flex flex-col p-3 md:p-0 gap-3 md:gap-8 text-center">
            <h3 className="text-3xl md:text-4xl font-bold text-[#0a0a0a]">
              Flexible Profit-Sharing & Commission Models
            </h3>
            <div className="text-sm md:text-base text-[#737373]">
              Supports a multi-tier profit distribution structure, creating a
              transparent and sustainable income ecosystem. Fund managers, sales
              agents, and the platform share performance-based profits,
              commissions, and management fees — motivating all stakeholders for
              active participation and long-term collaboration.
            </div>
          </div>
          <div className="basis-1/2 shrink-0"></div>
          <div className="relative h-120 -my-15 w-full md:hidden">
            <div className="absolute inset-0 -z-1 bg-[url('/assets/PAMMSection3Product.png')] block md:hidden bg-position-[-120_-100] bg-no-repeat bg-[length:150%]"></div>
          </div>
        </div>
      </div>
      <div className="md:aspect-[2/1] w-full relative md:py-23">
        <div className="absolute inset-x-0 -inset-y-[120px] -z-1 inset-0 bg-[url('/assets/PAMMSection4Product.png')] hidden md:block bg-position-[100px_0] bg-no-repeat bg-contain"></div>

        <div className="md:w-[1200px] relative h-full mx-auto flex flex-col md:flex-row items-center">
          <div className="basis-1/2 shrink-0"></div>
          <div className="basis-1/2 shrink-0 flex flex-col p-3 md:p-0 gap-3 md:gap-8 text-center">
            <h3 className="text-3xl md:text-4xl font-bold text-[#0a0a0a]">
              Data-Driven Transparency & Performance Monitoring
            </h3>
            <div className="text-sm md:text-base text-[#737373]">
              Investors participate in the master account by purchasing fund
              shares, eliminating the need for individual sub-accounts.
            </div>
            <div className="relative h-120 -my-15 w-full md:hidden">
              <div className="absolute inset-0 -z-1 bg-[url('/assets/PAMMSection4Product.png')] block md:hidden bg-position-[-30_-30] bg-no-repeat bg-[length:150%]"></div>
            </div>
          </div>
        </div>
      </div>
      <FAQSection questions={questions} />
    </div>
  );
}
