import { Search } from 'lucide-react';
import Link from 'next/link';

export function Searchbar() {
  const inputStyle =
    'w-[150px] pl-[14px] pt-[6px] pb-[7px] pr-[36px] bg-[#D9D9D9] rounded-[10px] text-[9px] font-[400] ' +
    'tablet:w-auto tablet:pl-[20px] tablet:py-[10px] tablet:pr-[79px] tablet:text-[12px] ' +
    'laptop:text-[14px] laptop:pl-[19px] laptop:pr-[42px] ';
  const searchIconStyle = 'absolute right-[13px] top-[50%] translate-y-[-50%]';

  return (
    <>
      {/* 480px 이상일 때 검색창 제대로 보이도록 구성 */}
      <Link href={'/search'} className="relative max-[480px]:hidden">
        <input
          id="search"
          type="search"
          className={inputStyle + 'pointer-events-none'}
          placeholder="검색어를 입력해주세요."
        />
        <Search width="12" height="12" className={searchIconStyle} />
      </Link>

      {/* 320px ~ 479px 일때 검색창 버튼형식으로 구성*/}
      <button className="relative w-[25px] h-[25px] bg-[#D9D9D9] rounded-[4px] mobile:hidden">
        <Search
          width="12"
          height="12"
          className="absolute left-[50%] top-[50%] translate-y-[-50%] translate-x-[-50%]"
        />
      </button>
    </>
  );
}
