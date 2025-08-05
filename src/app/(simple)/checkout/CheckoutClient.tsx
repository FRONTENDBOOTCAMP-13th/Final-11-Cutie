'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import useUserStore from 'zustand/userStore';
import { CheckoutMethod } from './CheckoutMethod';
import { AgreedCheckout } from '@components/common/etc';

export default function CheckoutClient() {
  const { user } = useUserStore();
  const router = useRouter();
  const [hasHydrated, setHasHydrated] = useState(false);

  useEffect(() => {
    // 처음값 때문에 null로 인식해서 alert 두번 뜨는거 막으려고 넣어놓은 코드
    setHasHydrated(true);
  }, []);

  useEffect(() => {
    if (!hasHydrated) return; // 아직 상태 복원 안 됐으면 아무것도 하지 않음

    if (!user || !user.token?.accessToken) {
      alert('로그인이 필요한 서비스입니다.');
      router.push('/login');
    }
  }, [hasHydrated, user, router]);

  if (!hasHydrated || !user || !user.token?.accessToken) return null;

  return (
    <div className="flex flex-col min-w-[300px] items-center p-[24px] mobile:p-[0px] tablet:px-[90px] tablet:py-[0px] laptop:px-[120px] laptop:py-[0px] bg-bg text-font-900">
      <div className="w-full max-w-[1200px] flex flex-col laptop:flex-row gap-[53px] tablet:gap-[57px] laptop:gap-[57px]">
        <CheckoutMethod />
        <AgreedCheckout />
      </div>
    </div>
  );
}
