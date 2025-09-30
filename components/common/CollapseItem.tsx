'use client';
import { useState } from 'react';

interface CollapseItemProps {
  title: string;
  content: string[];
  /** 非受控模式下的默认展开 */
  defaultOpen?: boolean;
  /** 受控模式：当前是否展开 */
  open?: boolean;
  /** 受控模式：点击切换时回调 */
  onToggle?: () => void;
}

export default function CollapseItem({
  title,
  content,
  defaultOpen = false,
  open,
  onToggle,
}: CollapseItemProps) {
  // 如果传入 open 表示受控模式；否则使用内部状态
  const [uncontrolledOpen, setUncontrolledOpen] = useState(defaultOpen);
  const isControlled = typeof open === 'boolean';
  const isOpen = isControlled ? open : uncontrolledOpen;

  const toggle = () => {
    if (isControlled) {
      onToggle?.();
    } else {
      setUncontrolledOpen(prev => !prev);
    }
  };

  return (
    <div className={`collapse-item ${isOpen ? 'collapse-item-active' : ''}`}>
      <div
        className="flex justify-between items-center cursor-pointer py-6"
        onClick={toggle}
      >
        <span
          className={`font-semibold text-base leading-6 transition-colors text-[#020f2c] ${
            isOpen ? '' : ''
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
          {content.map((item, index) => (
            <div key={index}>{item}</div>
          ))}
        </div>
      )}
      <div className="h-[1px] bg-[#d9dfeb]"></div>
    </div>
  );
}
