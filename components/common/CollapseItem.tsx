'use client';
import { useState } from 'react';

interface CollapseItemProps {
  title: string;
  content: string;
  defaultOpen?: boolean;
}

export default function CollapseItem({
  title,
  content,
  defaultOpen = false,
}: CollapseItemProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`collapse-item ${isOpen ? 'collapse-item-active' : ''}`}>
      <div
        className="flex justify-between items-center cursor-pointer py-6"
        onClick={toggle}
      >
        <span
          className={`font-semibold text-base leading-6 transition-colors ${
            isOpen ? 'text-[#0154fc]' : 'text-[#020f2c]'
          }`}
        >
          {title}
        </span>
        <span className="icon">
          {isOpen ? (
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18 15L12 9L6 15"
                stroke="#656B8A"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          ) : (
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18 9L12 15L6 9"
                stroke="#656B8A"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          )}
        </span>
      </div>
      {isOpen && (
        <div className="text-[#656b8a] font-normal text-sm leading-[22px] text-left pb-6">
          {content}
        </div>
      )}
      <div className="h-[1px] bg-[#d9dfeb]"></div>
    </div>
  );
}
