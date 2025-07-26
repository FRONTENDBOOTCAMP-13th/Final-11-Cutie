'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function ProductTabs() {
  const pathname = usePathname();

  const tabs = [
    { label: '구매 내역', path: '/accounts' },
    { label: '펀드 페이지', path: '/accounts/fund' },
    { label: '장바구니', path: '/accounts/cart' },
    { label: '나의 후기', path: '/accounts/myReview' },
  ];

  return (
    <div className="bg-primary-50 font-pretendard w-full border-b border-primary-100">
      <nav className="flex w-full relative">
        {tabs.map(tab => (
          <Link
            key={tab.path}
            href={tab.path}
            className={`group flex-1 min-w-0 text-center px-0 py-[1.2vw]
              overflow-hidden whitespace-nowrap cursor-pointer
              text-[3.3vw] mobile:text-[14px] tablet:text-[16px] semibold-14 relative
              ${pathname === tab.path ? 'text-primary-800' : 'text-font-900'}`}
          >
            {tab.label}
            <span
              className={`absolute left-1/2 -translate-x-1/2 bottom-[2px] w-[80%] h-[0.6vw] 
                rounded-[2px] bg-primary-800 transition-opacity duration-200
                ${pathname === tab.path ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}
            />
          </Link>
        ))}
      </nav>
    </div>
  );
}
