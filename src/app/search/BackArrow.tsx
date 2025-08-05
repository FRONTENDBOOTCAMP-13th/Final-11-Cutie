'use client';
import { ArrowLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function BackArrow() {
  const router = useRouter();

  return (
    <>
      <button className="cursor-pointer" onClick={() => router.back()}>
        <ArrowLeft className="m-5 tablet:hidden" size={20} />
      </button>
    </>
  );
}
