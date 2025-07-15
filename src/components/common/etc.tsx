// 기타 컴포넌트 목록입니다. 필요한 부분 복붙 통해서 작업하기~
import '@app/globals.css';

// 특별기획/시즌기획(기본)
export function SpecialPlanDefault() {
  return <p className="bold-24 w-[11.875rem] h-[1.875rem]">특별기획/시즌기획</p>;
}

// 특별기획/시즌기획(768px)
export function SpecialPlanTablet() {
  return <p className="bold-20 w-[10rem] h-[1.5625rem]">특별기획/시즌기획</p>;
}

// 특별기획/시즌기획(480px)
export function SpecialPlanMobile() {
  return <p className="semibold-17 w-[8.25rem] h-[1.375rem]">특별기획/시즌기획</p>;
}

// [버그]
// 더 많은 펀딩보기(기본)
export function AddfundingDefault() {
  return (
    <div className="flex w-[123px] h-[20px] text-font-400 hover:text-primary-800">
      <p className="medium-14 w-[100px] h-[17px]">더 많은 펀딩 보기</p>
      <svg width="20" height="20" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M6.75 13.5L11.25 9L6.75 4.5"
          stroke="currentColor" // 현재 색을 부모 요소를 따름
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}

// 더 많은 펀딩보기(768px, 480px)
export function AddfundingTablet() {
  return (
    <div className="flex gap-2 text-font-400 hover:text-primary-800">
      <p className="medium-12 w-[5.875rem] h-[.75rem]">더 많은 펀딩 보기</p>
      <svg width="18" height="16" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M6.75 13.5L11.25 9L6.75 4.5"
          stroke="currentColor" // 현재 색을 부모 요소를 따름
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}

//프로젝트 만들기 대제목 및 소제목
export function CreateProjectTitle() {
  return (
    <div className="flex flex-col gap-4">
      {/*대제목*/}
      <p className="bold-24 text-font-900">
        멋진 아이디어가 있으시군요!
        <br />
        어떤 프로젝트를 계획 중이신가요?
      </p>
      {/*소제목*/}
      <p className="medium-14 text-font-400">나중에 변경 가능하니 너무 걱정마세요.</p>
    </div>
  );
}
