import React from 'react';

interface TabSwitcherProps {
  tabs: string[];
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export default function TabSwitcher({
  tabs,
  activeTab,
  onTabChange,
}: TabSwitcherProps) {
  return (
    <div className="bg-[#F5F5F5] inline-flex py-[4px] px-[2px] rounded-[10px]">
      {tabs.map(tab => (
        <button
          key={tab}
          className={`lg:text-sm text-xs text-[#0A0A0A] font-[500] py-[4px] lg:px-[44px] px-[24px] cursor-pointer transition-all text-nowrap duration-500 rounded-[8px] leading-[20px] ${
            activeTab === tab
              ? 'bg-[#ffffff] border border-[#ffffff] shadow-[0_1px_3px_0_rgba(0,0,0,0.10),_0_1px_2px_-1px_rgba(0,0,0,0.10)]'
              : ''
          }`}
          onClick={() => onTabChange(tab)}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}
