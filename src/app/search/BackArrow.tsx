'use client';
import { ArrowLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function BackArrow() {
  const router = useRouter();

  return (
    <>
      <div className="bg-bg shadow-[0_4px_4px_rgba(0,0,0,0.25)] w-full fixed z-[999]">
        <button className="cursor-pointer" onClick={() => router.back()}>
          <ArrowLeft className="m-5 tablet:w-[24px] tablet:h-[24px]" size={20} />
        </button>
      </div>
    </>
  );
}
