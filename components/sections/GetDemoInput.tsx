'use client';

import { useState } from 'react';

interface GetDemoInputProps {
  onOpen?: () => void;
}

export default function GetDemoInput({ onOpen }: GetDemoInputProps) {
  const [email, setEmail] = useState('');

  const handleOpen = () => {
    onOpen?.();
  };

  return (
    <div className="p-1 w-[584px] h-[60px] rounded-xl box-border flex items-center justify-center max-[750px]:w-full"
         style={{
           background: 'linear-gradient(180deg, rgba(77, 238, 255, 0.1) 0%, rgba(115, 59, 255, 0.1) 100%)'
         }}>
      <div className="flex-1 h-full bg-white box-border rounded-xl overflow-hidden flex p-1">
        <input
          type="text"
          placeholder="Enter your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border-none outline-none flex-1 pl-3 text-base font-semibold placeholder-[#8f96bd] placeholder:text-base placeholder:font-semibold"
        />
        <div
          className="w-[146px] text-base font-semibold text-white bg-black rounded-xl cursor-pointer flex items-center justify-center"
          onClick={handleOpen}
        >
          Get A Demo
        </div>
      </div>
    </div>
  );
}