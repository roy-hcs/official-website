'use client';

import { Input } from '@/components/ui/input';
import SubmitInfo from '@/components/common/SubmitInfo';
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogTrigger,
  AlertDialogCancel,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog';
import { RrhClose } from '@/components/icons/RrhClose';
export default function HeroBanner(props: {
  title: string;
  description: string;
}) {
  return (
    <>
      <div className="text-[#041433] lg:text-5xl text-4xl font-bold text-center">
        {props.title}
      </div>
      <div className="mb-8 mt-6 text-[#737373] font-normal lg:text-lg text-base leading-7 text-center">
        {props.description}
      </div>
      <div className="flex justify-center gap-2">
        <Input
          className="w-66.5 h-9 bg-[#ffffff] border border-[#E5E5E5] rounded-[8px] shadow-sm"
          placeholder="Enter your Email"
        />

        <AlertDialog>
          <AlertDialogTrigger className="rounded-[8px] bg-[#171717] shadow-sm py-[8px] px-[16px] text-[#FAFAFA] lg:text-[14px] text-[12px] font-[500] leading-[20px]">
            Get A Demo
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogCancel className="absolute top-4 right-4 h-8 w-8 rounded-full p-0 hover:bg-gray-100 border-0">
              <div className="w-[24px] h-[24px]">
                <RrhClose />
              </div>
            </AlertDialogCancel>
            <AlertDialogHeader>
              <AlertDialogTitle className="text-2xl font-semibold text-center"></AlertDialogTitle>
            </AlertDialogHeader>
            <SubmitInfo />
          </AlertDialogContent>
        </AlertDialog>
      </div>
    </>
  );
}
