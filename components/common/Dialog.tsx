'use client';

import { ReactNode, useEffect } from 'react';
import { createPortal } from 'react-dom';

interface DialogProps {
  visible: boolean;
  title?: string;
  closeOnClickModal?: boolean;
  onClose: () => void;
  children: ReactNode;
  footer?: ReactNode;
}

export default function Dialog({
  visible,
  title = '',
  closeOnClickModal = true,
  onClose,
  children,
  footer,
}: DialogProps) {
  // Lock body scroll when dialog is open
  useEffect(() => {
    if (visible) {
      // Small delay for enter animation
      const timer = setTimeout(() => {
        document.body.style.overflow = 'hidden';
      }, 10);
      return () => clearTimeout(timer);
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [visible]);

  // Handle ESC key to close dialog
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && visible) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [visible, onClose]);

  // Handle outside click
  const handleWrapperClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget && closeOnClickModal) {
      onClose();
    }
  };

  // Create portal for dialog
  const dialogPortal = visible ? (
    <div
      className={`fixed top-0 right-0 bottom-0 left-0 overflow-auto bg-black/50 z-[2000] transition-opacity duration-300 ease-in-out ${visible ? 'opacity-100' : 'opacity-0'}`}
      onClick={handleWrapperClick}
    >
      <div
        className={`relative lg:w-1/2 mt-[15vh] lg:mx-auto mx-5 bg-white rounded-[24px] shadow-[0px_10px_23px_0px_#4a56871a,0px_41px_41px_0px_#4a568717,0px_93px_56px_0px_#4a56870d,0px_166px_66px_0px_#4a568703,0px_259px_72px_0px_#4a568700] box-border transition-all duration-300 ease-in-out ${visible ? 'translate-y-0 opacity-100' : '-translate-y-5 opacity-0'}`}
      >
        <div className="px-5 pt-5 pb-2.5">
          {title && (
            <span className="text-lg leading-6 text-[#303133]">{title}</span>
          )}
          <button
            className="absolute top-5 right-5 p-0 bg-transparent border-none text-base cursor-pointer"
            onClick={onClose}
            aria-label="Close"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18 6L6 18M6 6L18 18"
                stroke="black"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>

        <div className="py-[30px] px-5 text-sm text-[#606266] leading-[1.5]">
          {children}
        </div>

        {footer && <div className="px-5 pt-2.5 pb-5 text-right">{footer}</div>}
      </div>
    </div>
  ) : null;

  // Use client-side rendering for the portal
  if (typeof window === 'undefined') return null;

  return createPortal(dialogPortal, document.body);
}
