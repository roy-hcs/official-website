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
      question: 'How does PAMM fundamentally operate?',
      answer:
        'By adding your manager account to the CRM, you grant read and write permissions, enabling the CRM to dynamically sync trading accounts and tickets from the trading platform, and subsequently construct multi-dimensional models and create a systematic and visual management module.',
    },
    {
      question: 'How does PAMM fundamentally operate?',
      answer:
        'By adding your manager account to the CRM, you grant read and write permissions, enabling the CRM to dynamically sync trading accounts and tickets from the trading platform, and subsequently construct multi-dimensional models and create a systematic and visual management module.',
    },
    {
      question: 'How does PAMM fundamentally operate?',
      answer:
        'By adding your manager account to the CRM, you grant read and write permissions, enabling the CRM to dynamically sync trading accounts and tickets from the trading platform, and subsequently construct multi-dimensional models and create a systematic and visual management module.',
    },
    {
      question: 'How does PAMM fundamentally operate?',
      answer:
        'By adding your manager account to the CRM, you grant read and write permissions, enabling the CRM to dynamically sync trading accounts and tickets from the trading platform, and subsequently construct multi-dimensional models and create a systematic and visual management module.',
    },
    {
      question: 'How does PAMM fundamentally operate?',
      answer:
        'By adding your manager account to the CRM, you grant read and write permissions, enabling the CRM to dynamically sync trading accounts and tickets from the trading platform, and subsequently construct multi-dimensional models and create a systematic and visual management module.',
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
