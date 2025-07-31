'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Search } from 'lucide-react';

export function SearchFunction() {
  const router = useRouter();
  const [keyword, setKeyword] = useState('');

  const handleSearch = (e: React.KeyboardEvent<HTMLInputElement>) => {
    // console.log('검색 텍스트 입력');
    if (e.key === 'Enter') {
      //입력한 검색어를 읽어와서 url 바꿔주기
      e.preventDefault();
      if (keyword.trim()) {
        router.push(`/products?keyword=${encodeURIComponent(keyword)}`);
      }
    }
  };

  const handleIconClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (keyword.trim()) {
      router.push(`/products?keyword=${encodeURIComponent(keyword)}`);
    }
  };
  return (
    <>
      <form className="border border-font-900 rounded-lg  flex items-center justify-between mt-2  tablet:mt-12 gap-2 text-font-400 mb-5">
        {/* 검색 바 */}
        <input
          type="text"
          onChange={e => setKeyword(e.target.value)}
          onKeyDown={handleSearch}
          placeholder="검색어를 입력해주세요."
          className="w-full px-4 h-12 mobile:h-14 normal-14 tablet:text-[16px] outline-none"
        />
        <button type="submit" onClick={handleIconClick} className=" pr-[18px] cursor-pointer">
          <Search className=" hover:text-font-900 w-4 h-4 tablet:w-5 tablet:h-5" />
        </button>
      </form>
    </>
  );
}
