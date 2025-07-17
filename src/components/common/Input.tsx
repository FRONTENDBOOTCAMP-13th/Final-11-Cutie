import { Search } from 'lucide-react';

// 아이디 입력(기본)
export function InputIdDefault() {
  return (
    <input
      type="text"
      className="w-[28.8125rem] px-[.9375rem] py-[1.1875rem] border-[.125rem] border-font-400 rounded-[.5rem] box-content font-pretendard"
      placeholder="아이디 입력"
    />
  );
}

// 아이디 입력(480px)
export function InputIdMobile() {
  return (
    <input
      type="text"
      className="w-[17.75rem] px-[.9375rem] py-[1.1875rem] border-[.125rem] border-font-400 rounded-[.5rem] box-content font-pretendard"
      placeholder="아이디 입력"
    />
  );
}

// 문의하기 검색 바 (반응형 o)
export function InputSearchQuestion() {
  return (
    <>
      <div className="flex bg-bg border border-font-400 justify-between items-center w-[227px] px-3 py-2.5 rounded-md tablet:w-[331px] tablet:px-5 tablet:py-3.5 laptop:w-[547px] laptop:px-6 laptop:py-[18px] laptop:rounded-lg desktop:w-[603px]">
        <p className="normal-12 text-font-400 laptop:text-[14px]">펀드림의 궁금한 점을 검색해 보세요.</p>
        <Search className="stroke-font-400 w-3.5 h-3.5 laptop:w-6 laptop:h-6" />
      </div>
    </>
  );
}
