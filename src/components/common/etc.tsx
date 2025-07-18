// 기타 컴포넌트 목록입니다. 필요한 부분 복붙 통해서 작업하기~
import '@app/globals.css';
import Link from 'next/link';
import Right from '@assets/icons/chevron-right.svg';

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

// 더 많은 펀딩보기(1440, 1280)
export function AddfundingDefault() {
  return (
    <Link
      href="/"
      className="group justify-between flex w-[123px] h-[20px]  text-font-400 hover:text-primary-800 medium-14"
    >
      더 많은 펀딩 보기
      <Right className="w-[20px] h-[20px] text-font-400 group-hover:text-primary-800" />
    </Link>
  );
}

// 더 많은 펀딩보기(768, 480)
export function AddfundingTablet() {
  return (
    <Link
      href="/"
      className="group justify-between flex w-[120px] h-[16px] text-font-400 hover:text-primary-800 medium-12"
    >
      더 많은 펀딩 보기
      <Right className="w-[18px] h-[16px] text-font-400 group-hover:text-primary-800" />
    </Link>
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

// 보기
export function See() {
  return <span className="underline normal-24 text-[#6A6A6A] hover:text-font-900">보기</span>;
}

// 토글 스위치
export function ToggleSwitchBig() {
  return (
    <div>
      <input type="checkbox" className="hidden" id="" />
      <label
        className="relative block w-[33px] h-[18px] bg-secondary-200 rounded-xl cursor-pointer transition before:content-['']"
        htmlFor="toggle"
      ></label>
    </div>
  );
}
