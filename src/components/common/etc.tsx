'use client';

import '@app/globals.css';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

interface SpecialPlanName {
  title?: string;
}

type ToggleSwitchBigProps = {
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

// 특별기획/시즌기획
export function SpecialPlan({ title }: SpecialPlanName) {
  return (
    <p className="flex items-center semibold-18  h-[22px] mobile:font-bold mobile:text-[20px] mobile:w-40 mobile:h-[25px] tablet:font-bold tablet:text-[24px] tablet:w-[190px] tablet:h-[30px]  ">
      {title}
    </p>
  );
}

// 더 많은 펀딩보기
export function Addfunding({ title }: { title: string }) {
  let href = '';

  if (title === '특별기획/시즌기획') href = '/products/?custom=special-and-season';
  if (title === '인기 프로젝트') href = '/products?sort=인기순';
  else href = '/products';

  return (
    <Link
      className="flex items-center h-[20px] gap-[8px] tablet:gap-[10px]  medium-14 tablet:text-[16px] text-font-400 hover:text-primary-800 hover:fill-primary-800"
      href={href}
    >
      <p className="hidden mobile:block ">더 많은 펀딩 보기</p>
      <ChevronRight className="w-[18px] h-[18px] tablet:w-5 tablet:h-5" />
    </Link>
  );
}

//프로젝트 만들기 대제목 및 소제목

export function CreateProjectTitle({
  title,
  sub,
  titleClassName = '',
  subClassName = '',
  gap = 0,
}: {
  title?: React.ReactNode;
  sub?: string;
  titleClassName?: string;
  subClassName?: string;
  gap?: number;
}) {
  return (
    <div className={`flex flex-col gap-[${gap}px]`}>
      {/*대제목*/}
      <p className={'bold-24 text-font-900 whitespace-pre-line ' + titleClassName}>
        {/* 멋진 아이디어가 있으시군요!
        <br />
        어떤 프로젝트를 계획 중이신가요? */}
        {title}
      </p>
      {/*소제목*/}
      <p className={'medium-14 text-font-400 ' + subClassName}>
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
export function ToggleSwitchBig({ checked, onChange }: ToggleSwitchBigProps) {
  return (
    <label className=" inline-flex cursor-pointer">
      <input type="checkbox" className="sr-only peer" checked={checked} onChange={onChange} />
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

interface StarTitleProps {
  title: string;
  subTitle?: string;
  className?: string;
}

export function StarTitle({ title, subTitle, className }: StarTitleProps) {
  return (
    <span className={`flex gap-[8px] items-center ${className}`}>
      <span className="normal-14 laptop:text-[16px] font-[700]">
        {title}
        <span className="text-error">*</span>
      </span>
      <span className="normal-12 font-[400] laptop:text-[14px] text-[#686871]">{subTitle}</span>
    </span>
  );
}
