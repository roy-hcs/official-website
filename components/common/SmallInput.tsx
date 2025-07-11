import { ChangeEvent, useState } from 'react';

interface SmallInputProps {
  onOpen?: () => void;
}

export default function SmallInput({ onOpen }: SmallInputProps) {
  const [email, setEmail] = useState('');

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  return (
    <div className="p-1 w-[418px] h-[56px] bg-gradient-to-b from-[rgba(77,238,255,0.1)] to-[rgba(115,59,255,0.1)] rounded-[12px] flex items-center justify-center max-[750px]:w-full max-[750px]:mb-3">
      <div className="flex-1 h-full bg-white box-border rounded-[12px] overflow-hidden flex p-1">
        <input
          type="text"
          placeholder="Enter your Email"
          value={email}
          onChange={handleEmailChange}
          className="border-none outline-none flex-1 pl-3 placeholder:text-base placeholder:font-semibold placeholder:text-[#8f96bd]"
        />
        <div
          className="w-[134px] h-full text-base font-semibold text-white bg-black rounded-[12px] cursor-pointer flex items-center justify-center"
          onClick={onOpen}
        >
          Get A Demo
        </div>
      </div>
    </div>
  );
}
