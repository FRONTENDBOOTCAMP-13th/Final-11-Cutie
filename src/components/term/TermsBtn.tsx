import '@app/globals.css';

// 약관 자세히보기 버튼 컴포넌트
export function ReadTerms() {
  return (
    <div className="flex flex-col gap-2">
      <p className="w-fit text-font-400 normal-14 tablet:text-[16px] underline hover:text-error ">자세히 보기</p>
    </div>
  );
}
