import { Search } from 'lucide-react';

type inputboxProps = {
  placeholder: string;
};

// 아이디 입력(기본)
export function InputIdDefault({ placeholder }: inputboxProps) {
  return (
    <input
      type="text"
      className="bg-bg normal-14 text-font-900 w-[331px] mobile:w-[461px] tablet:w-[554px] laptop:text-[16px] px-[15px] py-[19px] border-[1.5px] border-font-400 rounded-[8px] box-content"
      placeholder={placeholder}
    />
  );
}

// 아이디 입력(480px)
export function InputIdMobile() {
  return (
    <input
      type="text"
      className="w-[284px] px-[15px] py-[19px] border-[2px] border-font-400 rounded-[8px] box-content font-pretendard"
      placeholder="아이디 입력"
    />
  );
}

// 문의하기 검색 바 (반응형 o)
export function InputSearchQuestion() {
  return (
    <>
      <div className="flex bg-bg border border-font-400 justify-between items-center w-[245px] px-3 py-2.5 rounded-md mobile:w-[331px] mobile:px-5 tablet:py-3.5 tablet:w-[547px] tablet:px-6 laptop:w-[603px] laptop:py-[18px] laptop:rounded-lg">
        <p className="normal-14 text-font-400 tablet:text-[16px]">펀드림의 궁금한 점을 검색해 보세요.</p>
        <Search className="stroke-font-400 w-3.5 h-3.5 tablet:w-6 tablet:h-6" />
      </div>
    </>
  );
}
