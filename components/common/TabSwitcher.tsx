import React from 'react';

interface TabSwitcherProps {
  tabs: string[];
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export default function TabSwitcher({ tabs, activeTab, onTabChange }: TabSwitcherProps) {
  return (
    <div className="relative inline-flex p-2 rounded-xl bg-gradient-to-r from-[#0154fc] to-[#4deeff] left-1/2 transform -translate-x-1/2 before:content-[''] before:absolute before:-left-0.5 before:-right-0.5 before:bottom-0 before:h-full before:bg-white before:opacity-90 before:-z-10">
      {tabs.map((tab) => (
        <button
          key={tab}
          className={`py-3 px-8 cursor-pointer transition-all text-nowrap duration-500 lg:leading-6 rounded-xl lg:text-base text-xs leading-4 font-bold ${
            activeTab === tab 
              ? 'bg-white text-[#0154fc]' 
              : 'text-[#656B8A]'
          }`}
          onClick={() => onTabChange(tab)}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}