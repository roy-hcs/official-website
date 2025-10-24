'use client';

import HeroBanner from '@/components/common/HeroBanner';
import { FAQSection } from '@/components/sections/FAQSection';
import { FeatureSection } from '@/components/sections/FeatureSection';

export default function RrhCopyTradingPage() {
  const questions = [
    {
      question: 'What is copy trading? How does it work?',
      answer:
        "Copy trading allows customers to automatically replicate the operations of experienced traders in real time. Customers select a trader and set the investment amount, and the system synchronizes the trades in their account, enhancing the activity and trading volume of the broker's platform.",
    },
    {
      question: 'How can customers choose suitable copy trading providers?',
      answer:
        "We provide a signal provider ranking list, displaying data such as the trader's win rate, maximum drawdown, and historical returns. Customers can find traders that match their risk preferences based on the trading performance of the traders.",
    },
    {
      question: 'Is there any risk in copy trading?',
      answer:
        'Copy trading carries market risks. Customers can reduce risks by setting custom stop-losses, adjusting copy trading ratios, or diversifying investments among multiple traders, thereby reducing complaints against the broker.',
    },
    {
      question: 'Which platforms support copy trading?',
      answer:
        'Our copy trading is compatible with MT4, MT5, and our proprietary platform, ensuring ultra-low latency (<1 second) execution and seamless integration with the existing account system, providing customers with an excellent experience.',
    },
    {
      question: 'What payment methods are available for copy traders?',
      answer:
        'Copy trading supports a variety of flexible revenue models, including subscription fees (fixed periodic charges), platform management fees (charged based on the proportion of managed funds), and signal provider performance fees (split based on actual profits). All fee structures are fully transparent and disclosed to customers before they start copying, ensuring the establishment of long-term trust and promoting continuous customer participation in trading.',
    },
    {
      question: 'Do customers need to switch platforms for copy trading?',
      answer:
        'Not at all. Customers can complete all copy trading operations directly through the CRM user interface, including selecting traders, adjusting copy trading parameters, and setting risk preferences. The process is simple and smooth, eliminating the need to switch between multiple platforms, saving time and enhancing user experience, making copy trading more efficient and convenient.',
    },
    {
      question: 'What types of copy trading are supported?',
      answer:
        'It supports various copy trading methods, including copying by multiple factors, copying by fixed lots, and copying by net value ratio, meeting the investment needs of different customers, enhancing flexibility and user satisfaction.',
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
