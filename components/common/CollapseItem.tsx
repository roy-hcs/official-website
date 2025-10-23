'use client';
import { useState } from 'react';
import { RrhDownArrow } from '@/components/icons/RrhDownArrow';
import { RrhUpArrow } from '@/components/icons/RrhUpArrow';

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
        <span className="text-[#020f2c] lg:text-sm text-xs font-[500] leading-[20px]">
          {title}
        </span>
        <span className="icon">
          {isOpen ? <RrhUpArrow /> : <RrhDownArrow />}
        </span>
      </div>
      {isOpen && (
        <div className="text-[#0A0A0A] lg:text-sm text-xs font-[400] leading-[20px] text-left pb-6">
          {content.map((item, index) => (
            <div key={index}>{item}</div>
          ))}
        </div>
      )}
      <div className="h-[1px] bg-[#E5E5E5]"></div>
    </div>
  );
}
