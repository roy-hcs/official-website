'use client';
import { useState } from 'react';
import CollapseItem from '@/components/common/CollapseItem';
import TabSwitcher from '@/components/common/TabSwitcher';

export default function OurProduction() {
  const [activeTab, setActiveTab] = useState('CRM');
  const tabs = ['CRM', 'PAMM', 'Copy Trading'];
  // 手风琴当前展开索引；-1 表示全部收起
  const [activeAccordion, setActiveAccordion] = useState<number>(0);

  return (
    <section className="w-full bg-white">
      <div className="w-full max-w-[1302px] mx-auto px-4">
        <h2 className="text-2xl lg:text-5xl font-semibold text-center text-[#020f2c] lg:mt-[174px] mt-3 mb-3 lg:mb-6">
          Products We Offer
        </h2>
        <p className="lg:text-lg text-center text-[#020f2c] lg:w-3xl w-auto text-xs mx-auto font-normal">
          Interface Design · Business Processes · Operational Models — All
          Tailored to You
        </p>

        <div className="lg:mt-[58px] lg:mb-[72px] my-6">
          <TabSwitcher
            tabs={tabs}
            activeTab={activeTab}
            onTabChange={setActiveTab}
          />
        </div>

        <div className="flex flex-col lg:flex-row lg:mb-[166px] lg:p-0 p-3 mb-6">
          {/* Left Side - Content */}
          <div className="flex-1 lg:mr-[120px] mb-10 lg:mb-0">
            <h3 className="text-xl font-medium text-[#020f2c] mb-[50px] text-left leading-7">
              All-in-one CRM solution: Automate mid-backend operations, boost
              customer management efficiency, and drive revenue growth.
            </h3>

            <div className="mb-8">
              {[
                {
                  title: 'Basic Business',
                  content: [
                    'Dashboard: Comprehensive operational data statistics display board.',
                    'Wallet: Supports wallet system.',
                    'KYC: Built in Basci version KYC function, and can also directly use Sumsubs KYC verification service.',
                    'Customer follow-up: A complete customer follow-up system allows you to follow up on customers KYC, account opening, and deposits.',
                    'Customer tags: Allow customization of personalized tags based on customer information and behavior, combined with email and marketing functions, to operate customers from multiple dimensions.',
                  ],
                },
                {
                  title: 'IB Management',
                  content: [
                    'Customer Promotion Link: Through the link, promote customers and limit account opening groups and leverage.',
                    'Proxy promotion: Promote subordinate agents through links. In addition to restricting the opening of subordinate agents, it is also possible to control the scope of business conducted by subordinate agents.',
                  ],
                },
                {
                  title: 'Reports',
                  content: [
                    'Capital Report: Overview of wallet funds, trading account funds, and fund operations.',
                    'Trading Report: Overview of trading order data.',
                    'Commission Report: Trading rebates, handling fee rebates, and deposit rebates.',
                    'IB Report: Overview of IB business development and tracking of new IB customer business progress.',
                  ],
                },
                {
                  title: 'Rebates',
                  content: [
                    'Supports trading rebates, handling fee rebates, and deposit rebates.',
                    'Customizable multi-level rebates with support for various rebate models. Allows for the definition of groups and varieties, and supports un',
                    'Different agent business lines can set rebate parameters separately to ensure rebates.',
                  ],
                },
              ].map((item, idx) => (
                <CollapseItem
                  key={item.title}
                  title={item.title}
                  content={item.content}
                  open={activeAccordion === idx}
                  onToggle={() =>
                    setActiveAccordion(prev => (prev === idx ? -1 : idx))
                  }
                />
              ))}
            </div>

            <button className="bg-black text-white w-[130px] h-[50px] rounded-[14px] font-semibold flex items-center justify-center mt-6 transition-colors">
              <span className="text-base font-semibold">read more</span>
            </button>
          </div>

          {/* Right Side - Image */}
          <div className="flex-none w-full lg:w-[718px] h-[538px] rounded-[24px] overflow-hidden relative">
            <div className="absolute inset-0 bg-gradient-to-r from-[#4deeff] via-[#0154fc] to-[#733bff]">
              <div
                className="absolute inset-0 bg-cover bg-no-repeat"
                style={{
                  backgroundImage: `url('/assets/官网产品图 _crm.png')`,
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
