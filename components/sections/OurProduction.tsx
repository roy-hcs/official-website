"use client";
import { useState } from 'react';
import CollapseItem from '@/components/common/CollapseItem';
import TabSwitcher from '@/components/common/TabSwitcher';

export default function OurProduction() {
  const [activeTab, setActiveTab] = useState('CRM');
  const tabs = ['CRM', 'PAMM', 'Copy Trading'];

  return (
    <section className="w-full bg-white">
      <div className="w-full max-w-[1302px] mx-auto px-4">
        <h2 className="text-2xl lg:text-5xl font-semibold text-center text-[#020f2c] lg:mt-[174px] mt-3 mb-3 lg:mb-6">
          Products We Offer
        </h2>
        <p className="lg:text-lg text-center text-[#020f2c] lg:w-3xl w-auto text-xs mx-auto font-normal">
          Interface Design · Business Processes · Operational Models — All Tailored to You
        </p>
        
        <div className="lg:mt-[58px] lg:mb-[72px] my-6">
          <TabSwitcher tabs={tabs} activeTab={activeTab} onTabChange={setActiveTab} />
        </div>
        
        <div className="flex flex-col lg:flex-row lg:mb-[166px] lg:p-0 p-3 mb-6">
          {/* Left Side - Content */}
          <div className="flex-1 lg:mr-[120px] mb-10 lg:mb-0">
            <h3 className="text-xl font-medium text-[#020f2c] mb-[50px] text-left leading-7">
              All-in-one CRM solution: Automate mid-backend operations, boost customer management efficiency, and drive
              revenue growth.
            </h3>
            
            <div className="mb-8">
              <CollapseItem
                title="Adopted by anyone"
                content="Monitor all market activities with real-time data analysis and actionable insights."
                defaultOpen={true}
              />
              <CollapseItem
                title="Open & extendable"
                content="Monitor all market activities with real-time data analysis and actionable insights."
              />
              <CollapseItem
                title="Al-driven workflows"
                content="Monitor all market activities with real-time data analysis and actionable insights."
              />
              <CollapseItem
                title="Dashboard anything"
                content="Monitor all market activities with real-time data analysis and actionable insights."
              />
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
                style={{ backgroundImage: `url('/assets/官网产品图 _crm.png')` }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
