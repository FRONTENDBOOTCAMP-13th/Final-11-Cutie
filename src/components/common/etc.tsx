// 기타 컴포넌트 목록입니다. 필요한 부분 복붙 통해서 작업하기~
import '@app/globals.css';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

// 특별기획/시즌기획(기본)
export function SpecialPlanDefault() {
  return <p className="bold-24 w-[190px] h-[30px]">특별기획/시즌기획</p>;
}

// 특별기획/시즌기획(768px)
export function SpecialPlanTablet() {
  return <p className="bold-20 w-[160px] h-[25px]">특별기획/시즌기획</p>;
}

// 특별기획/시즌기획(480px)
export function SpecialPlanMobile() {
  return <p className="semibold-18 w-[140px] h-[22px]">특별기획/시즌기획</p>;
}

// 더 많은 펀딩보기(1440, 1280)
export function AddfundingDefault() {
  return (
    <div className="flex gap-[10px] h-[20px] medium-16 text-font-400 hover:text-primary-800 hover:fill-primary-800">
      <Link href="#">더 많은 펀딩 보기</Link>
      <ArrowRight className="w-[20px] h-[20px]" />
    </div>
  );
}

// 더 많은 펀딩보기(768, 480)
export function AddfundingTablet() {
  return (
    <div className="flex gap-[8px] h-[20px] medium-14 text-font-400 hover:text-primary-800 hover:fill-primary-800">
      <Link href="#">더 많은 펀딩 보기</Link>
      <ArrowRight className="w-[18px] h-[18px]" />
    </div>
  );
}

//프로젝트 만들기 대제목 및 소제목
export function CreateProjectTitle({ title, sub }: { title?: string; sub?: string }) {
  return (
    <div className="flex flex-col gap-4">
      {/*대제목*/}
      <p className="bold-24 text-font-900">
        {/* 멋진 아이디어가 있으시군요!
        <br />
        어떤 프로젝트를 계획 중이신가요? */}
        {title}
      </p>
      {/*소제목*/}
      <p className="medium-14 text-font-400">
        {/* 나중에 변경 가능하니 너무 걱정마세요. */}
        {sub}
      </p>
    </div>
  );
}

// 보기
export function See() {
  return <span className="underline normal-24 text-[#6A6A6A] hover:text-font-900">보기</span>;
}

// 토글 스위치 (0~480: 28x15 9,  36X20 18)
export function ToggleSwitchBig() {
  return (
    <label className=" inline-flex cursor-pointer">
      <input type="checkbox" className="sr-only peer" />
      <div
        className="relative w-7 h-4 after:h-3 after:w-3 peer-checked:after:translate-x-[14px] peer-checked:bg-primary-800 peer-focus:outline-none after:content-[''] after:absolute 
        after:top-1/2 after:-translate-y-1/2 after:left-[1px]  bg-secondary-200 rounded-full peer 
        after:bg-white  after:rounded-full after:transition-all
        tablet:w-9 tablet:h-5 tablet:after:h-[18px] tablet:after:w-[18px]
        tablet:peer-checked:after:translate-x-4 "
      />
    </label>
  );
}
