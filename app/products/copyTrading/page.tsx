'use client';

import HeroBanner from '@/components/common/HeroBanner';
import { FAQSection } from '@/components/sections/FAQSection';
import { FeatureSection } from '@/components/sections/FeatureSection';

export default function RrhCopyTradingPage() {
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
      <div className="w-full lg:h-[910px] h-[455px] relative">
        <div className="absolute -z-1 inset-0 bg-[url('/assets/CRM/CRM_here_section_bg.png')] bg-no-repeat bg-center bg-cover"></div>
        <div
          className="absolute -z-1 inset-0 lg:bg-[url('/assets/CopyTrading/CopyTrading_hero_section_bg.png')] bg-no-repeat bg-cover"
          style={{
            backgroundPositionX: '155px',
            backgroundPositionY: '-104px',
          }}
        ></div>
        <div className="lg:pt-[208px] pt-[104px]">
          <HeroBanner
            title="Leading CRM for Brokerages & Exchanges"
            description="Create your own profit-sharing system — # Forex CRM # PAMM # CopyTrading"
          />
        </div>
      </div>
      <FeatureSection
        title="Seamless Integration & Rapid Deployment"
        description="Fully integrated within the CRM environment. Clients can access CopyTrading directly from their existing accounts — no external systems or extra logins required. Smooth, fast, and intuitive onboarding."
        dom={
          <div className="absolute -z-1 inset-0 bg-[url('/assets/CopyTrading/CopyTrading_section2_product.png')] bg-no-repeat lg:bg-[-304px_center] bg-[center_0px] lg:bg-cover bg-[length:300px_150px]"></div>
        }
      />
      <FeatureSection
        title="Full-Cycle Client Management"
        description="Covers the entire client journey — from registration, KYC, deposit, trading to reinvestment. Empower your sales and IB teams with flexible segmentation and tagging to enhance retention and conversion."
        reverse={true}
        dom={
          <div className="absolute -z-1 inset-0 bg-[url('/assets/CopyTrading/CopyTrading_section3_product.png')] bg-no-repeat lg:bg-[274px_center] bg-[center_0px] lg:bg-cover bg-[length:300px_150px]"></div>
        }
      />
      <FeatureSection
        title="Intelligent Risk Control"
        description="Advanced risk management tools protect client assets — including auto take-profit/stop-loss, position limits, and abnormal trading alerts — ensuring system security and stability"
        dom={
          <div className="absolute -z-1 inset-0  bg-[url('/assets/CopyTrading/CopyTrading_section4_product.png')] bg-no-repeat lg:bg-[-450px_center] bg-[center_0px] lg:bg-cover bg-[length:300px_150px]"></div>
        }
      />
      <FeatureSection
        title="Data-Driven Optimization for Growth"
        description="Comprehensive CopyTrading analytics — from trader performance to follower behavior and volume trends. Gain actionable insights to refine marketing and attract high-value clients."
        reverse={true}
        dom={
          <div className="absolute -z-1 inset-0 bg-[url('/assets/CopyTrading/CopyTrading_section5_product.png')] bg-no-repeat lg:bg-[506px_center] bg-[center_0px] lg:bg-cover bg-[length:300px_150px]"></div>
        }
      />
      <div className="lg:h-[960px] h-auto lg:pt-[136px] py-[24px]">
        <FAQSection questions={questions} />
      </div>
    </div>
  );
}
