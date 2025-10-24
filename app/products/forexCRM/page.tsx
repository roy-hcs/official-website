'use client';

import HeroBanner from '@/components/common/HeroBanner';
import { CRMIconOne } from '@/components/icons/CRMIconOne';
import { CRMIconThree } from '@/components/icons/CRMIconThree';
import { CRMIconTwo } from '@/components/icons/CRMIconTwo';
import { FAQSection } from '@/components/sections/FAQSection';
import { FeatureSection } from '@/components/sections/FeatureSection';
import { USPItem, USPSection } from '@/components/sections/USPSection';
export default function RrhForexCrmPage() {
  const USPs: USPItem[] = [
    {
      title: 'Self-define Marketing',
      description:
        'We aim to provide a self-defined, flexible and streamlined rebate system for brokerages.',
      Icon: <CRMIconOne />,
    },
    {
      title: 'Manage Customers',
      description:
        'Tools or modules to manage customers and their operations promptly and efficiently.',
      Icon: <CRMIconTwo />,
    },
    {
      title: 'Control Workflows',
      description:
        'Internal control modules to help you strengthen business stability and profitability.',
      Icon: <CRMIconThree />,
    },
  ];
  const questions = [
    {
      question: 'What is a CRM system? How can it help my brokerage business?',
      answer:
        'Our CRM system is a secure and intuitive platform for managing customer accounts, deposits, withdrawals, and interactions with the broker. The system offers real-time data analysis and seamless integration with the trading platform, effectively enhancing customer retention and operational efficiency.',
    },
    {
      question: 'How can I import existing customer data into the CRM system?',
      answer:
        'Simply provide a data file in the standard format, and our technical team will ensure that the data is securely and completely imported into the system without interrupting your business, enabling a seamless migration.',
    },
    {
      question: 'Does CRM support mobile access?',
      answer:
        'Yes! Our CRM utilizes Progressive Web Application (PWA) technology, which can be installed via a browser and offers a smooth experience akin to a native app. It is compatible with iOS, Android, and desktop devices, allowing customers to manage their accounts anytime and anywhere.',
    },
    {
      question: 'What if I have customized feature requirements?',
      answer:
        'Haame adheres to the "customer success" philosophy and respects the professional needs of each broker. Our technical team will collaborate with you to customize exclusive features within a reasonable scope after careful evaluation, in order to meet your business goals.',
    },
    {
      question:
        'What features can I use to attract customers to trade and agents to grow my business?',
      answer:
        'The system supports various commission models, including trading commissions, fee commissions, and deposit commissions. You can also set up special incentive mechanisms such as deposit rewards, trading rewards, and account opening rewards. Additionally, the points mall feature allows for rewarding points based on trading and deposit scenarios, which customers can redeem for goods, helping to attract customers and agents to expand your business.',
    },
    {
      question:
        'I have customers on both MT4 and MT5 platforms. Do I need to set up separate commission rules for each platform?',
      answer:
        'No. Our CRM system supports linking a single commission rule to multiple platforms (such as MT4 and MT5), simplifying the configuration process and enhancing your operational efficiency.',
    },
  ];
  return (
    <div className="w-full h-full max-w-[1920px] mx-auto overflow-y-auto">
      <div className="w-full h-[910px] relative">
        <div className="absolute -z-1 inset-0 bg-[url('/assets/CRM/CRM_here_section_bg.png')] bg-no-repeat bg-center bg-cover"></div>
        <div
          className="absolute -z-1 inset-0 bg-[url('/assets/CRM/CRM_here_section_product.png')] bg-no-repeat bg-cover"
          style={{
            backgroundPositionX: '155px',
          }}
        ></div>
        <div className="pt-[208px]">
          <HeroBanner
            title="Leading CRM for Brokerages & Exchanges"
            description="Create your own profit-sharing system — # Forex CRM # PAMM # CopyTrading"
          />
        </div>
        <div className="pt-[176px]">
          <USPSection USPs={USPs} />
        </div>
      </div>
      <FeatureSection
        title="Real-Time Data & Reporting"
        description="Comprehensive analytics for funds and trades. Real-time dashboards enable financial monitoring and data-driven operations. IBs gain clear insights into downline performance, rebates, and trading metrics."
        dom={
          <div
            className="absolute -z-1 inset-0 bg-[url('/assets/CRM/CRM_section2_product.png')] bg-no-repeat bg-cover"
            style={{
              backgroundPositionX: '-134px',
            }}
          ></div>
        }
      />
      <FeatureSection
        title="Full-Cycle Client Management"
        description="Covers the entire client journey — from registration, KYC, deposit, trading to reinvestment. Empower your sales and IB teams with flexible segmentation and tagging to enhance retention and conversion."
        reverse={true}
        dom={
          <div
            className="absolute -z-1 inset-0 bg-[url('/assets/CRM/CRM_section3_product.png')] bg-no-repeat bg-cover"
            style={{
              backgroundPositionX: '274px',
            }}
          ></div>
        }
      />
      <FeatureSection
        title="Leading CRM for Brokerages & Exchanges"
        description="Create your own profit-sharing system — # Forex CRM # PAMM # CopyTrading"
        dom={
          <div
            className="absolute -z-1 inset-0  bg-[url('/assets/CRM/CRM_section4_product.png')] bg-no-repeat bg-cover"
            style={{
              backgroundPositionX: '-134px',
            }}
          ></div>
        }
      />
      <FeatureSection
        title="Leading CRM for Brokerages & Exchanges"
        description="Create your own profit-sharing system — # Forex CRM # PAMM # CopyTrading"
        reverse={true}
        dom={
          <div
            className="absolute -z-1 inset-0 bg-[url('/assets/CRM/CRM_section5_product.png')] bg-no-repeat bg-cover"
            style={{
              backgroundPositionX: '274px',
            }}
          ></div>
        }
      />
      <div className="h-[960px] pt-[136px]">
        <FAQSection questions={questions} />
      </div>
    </div>
  );
}
