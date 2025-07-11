'use client';

import { useState } from 'react';
import SubmitInfo from '@/components/common/SubmitInfo';
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogTrigger,
  AlertDialogCancel,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog';

export default function GetDemoInput() {
  const [email, setEmail] = useState('');
  return (
    <div
      className="p-1 w-[584px] h-[60px] rounded-xl box-border flex items-center justify-center max-[750px]:w-full"
      style={{
        background:
          'linear-gradient(180deg, rgba(77, 238, 255, 0.1) 0%, rgba(115, 59, 255, 0.1) 100%)',
      }}
    >
      <div className="flex-1 h-full bg-white box-border rounded-xl overflow-hidden flex p-1">
        <input
          type="text"
          placeholder="Enter your Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          className="border-none outline-none flex-1 pl-3 text-base font-semibold placeholder-[#8f96bd] placeholder:text-base placeholder:font-semibold"
        />
        <AlertDialog>
          <AlertDialogTrigger>
            <div className="w-[146px] h-full text-base font-semibold text-white bg-black rounded-xl cursor-pointer flex items-center justify-center">
              Get A Demo
            </div>
          </AlertDialogTrigger>
          <AlertDialogContent>
            {/* 右上角关闭按钮 */}
            <AlertDialogCancel className="absolute top-4 right-4 h-8 w-8 rounded-full p-0 hover:bg-gray-100 border-0">
              <div className="w-[24px] h-[24px]">
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
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
            </AlertDialogCancel>

            {/* 添加标题以满足可访问性要求 */}
            <AlertDialogHeader>
              <AlertDialogTitle className="text-2xl font-semibold text-center"></AlertDialogTitle>
            </AlertDialogHeader>

            <SubmitInfo />
          </AlertDialogContent>
        </AlertDialog>
      </div>
    </div>
  );
}
