'use client';

import CheckBox from '@assets/icons/checkbox.svg';
import UnCheckBox from '@assets/icons/uncheckbox.svg';
import { CheckIcon, X } from 'lucide-react';
import { useState } from 'react';

type CheckCircleProps = {
  label: string;
};

type ChangeBtnProps = {
  label: string;
  className?: string;
};

type loginBtnProps = {
  label: string;
};

type SignUpBtnProps = {
  label: string;
  onClick?: () => void;
};

type CheckboxBtnProps = {
  checked: boolean;
  onToggle: () => void;
};

//체크박스 버튼 컴포넌트
export function CheckboxBtn({ checked, onToggle }: CheckboxBtnProps) {
  return (
    <button
      className={`w-[18px] h-[18px] cursor-pointer ${checked ? 'text-primary-800' : 'text-secondary-200'}`}
      onClick={onToggle}
    >
      {checked ? <CheckBox className="w-full h-full" /> : <UnCheckBox className="w-full h-full" />}
    </button>
  );
}

// 미리보기 가능한 체크박스 붙어있는 라벨
export function PreviewCheckboxWithLabel({ title }: { title: string }) {
  const [checked, setChecked] = useState(false);

  const toggle = () => {
    setChecked(prev => !prev);
  };

  return (
    <div className="flex flex-col gap-2">
      {/* 체크박스와 라벨 */}
      <div className="flex items-center gap-2">
        <button
          type="button"
          className={`w-[18px] h-[18px] text-secondary-200 cursor-pointer mt-[5px] hover:text-primary-800`}
          onClick={toggle}
        >
          {checked ? <CheckBox className="w-full h-full text-primary-800" /> : <UnCheckBox className="w-full h-full" />}
        </button>
        <span className="medium-14 leading-none">{title}</span>
      </div>

      {/* 호버된 체크박스와 라벨
      <div className="flex items-center gap-2">
        <button className="w-[18px] h-[18px] text-primary-800 mt-[5px]">
          <CheckBox className="w-full h-full" />
        </button>
        <span className="medium-16 leading-none">{title}</span>
      </div> */}
    </div>
  );
}

//실질적으로 사용하는 체크박스 붙어있는 라벨
type CheckboxWithLabelProps = {
  checked: boolean;
  onChange: (checked: boolean) => void;
  label: React.ReactNode;
};

export function CheckboxWithLabel({ checked, onChange, label }: CheckboxWithLabelProps) {
  return (
    <label className="flex items-start gap-2 w-full cursor-pointer">
      <input
        type="checkbox"
        checked={checked}
        onChange={e => onChange(e.target.checked)}
        className="mt-1 accent-primary-800"
      />
      <div className="w-full">{label}</div>
    </label>
  );
}

//호버되는 다음 버튼 컴포넌트
export function NextButton() {
  return (
    <div className="flex justify-center gap-4">
      <button className="px-[32px] py-[12px] medium-14 laptop:text-[16px]  bg-secondary-200  hover:bg-primary-800  text-white ">
        다음
      </button>
      <button className="px-[32px] py-[12px] medium-14 laptop:text-[16px] bg-primary-800  text-white">다음</button>
    </div>
  );
}

//회색 변경 버튼
export function ChangeButton({ label, className = '' }: ChangeBtnProps) {
  return (
    <>
      <button
        className={`bg-bg cursor-pointer flex items-center justify-center medium-14 px-[11px] py-[4px] border border-font-400 rounded-[4px] text-font-400 hover:bg-primary-800 hover:text-white hover:border-primary-800 ${className}`}
      >
        {label}
      </button>
    </>
  );
}

//파란색 변경 버튼
export function ChangeButtonPrimary({ label, className = '' }: ChangeBtnProps) {
  return (
    <>
      <button
        className={`bg-bg flex w-full items-center justify-center medium-14 px-[11px] py-[4px] border border-primary-800 rounded-[4px] text-primary-800 hover:bg-primary-800 hover:text-white hover:border-primary-800 cursor-pointer ${className}`}
      >
        {label}
      </button>
    </>
  );
}

/* 채워진 파란색 버튼 */
export function ChangeButtonFill({ label, className = '' }: ChangeBtnProps) {
  return (
    <div>
      <button
        className={`flex items-center justify-center medium-14 px-[31px] py-[8px] border bg-primary-800 rounded-[4px] text-white ${className}`}
      >
        {label}
      </button>
    </div>
  );
}

//프로필 편집 버튼 컴포넌트
export function ProfileEditButton() {
  return (
    <div>
      {/* 흰색 배경 */}
      <button className="flex items-center justify-center px-[18px] py-[9px] border bg-white text-primary-800 rounded-[8px] hover:bg-primary-800 hover:text-white semibold-14">
        프로필 편집
      </button>
      {/* 파란배경 */}
      <button className="flex items-center justify-center px-[18px] py-[9px] border bg-primary-800 text-white rounded-[8px] semibold-14">
        프로필 편집
      </button>
    </div>
  );
}

//버튼(회원가입,프로필편집) 컴포넌트
export function SignUpProfileEditButton({ label, onClick }: SignUpBtnProps) {
  return (
    <>
      {/* 파란 배경 */}
      <button
        type="button"
        onClick={onClick}
        className="flex whitespace-nowrap items-center justify-center w-full px-[6px] py-[19px] bg-primary-800/70 text-white rounded-lg hover:bg-primary-800 hover:text-white medium-12 tablet:text-[16px] cursor-pointer"
      >
        {label}
      </button>
    </>
  );
}

// 로그인 입력
export function LoginButton({ label }: loginBtnProps) {
  const innerStyle =
    'w-full h-[40px] bg-primary-800 text-white rounded-[4px] cursor-pointer semibold-14 font-pretendard font-[600]' +
    'mobile:h-[57px] tablet:h-[57px] mobile:text-[20px] mobile:rounded-[8px] tablet:text-[24px]';

  {
    /* 데이터 서버로 전송 한 후에 페이지 이동 되도록 기능 넣어야함 */
  }
  return (
    <button type="submit" className={innerStyle}>
      {label}
    </button>
  );
}

// 소개 & 리뷰
export function ReviewTab() {
  const [isActiveTab, setActiveTab] = useState('project');

  /* 전체 박스 */
  const innerStyle =
    'bg-bg flex justify-center items-center border-b-[1px] border-secondary-200 w-full h-[50px] normal-14 ' +
    'mobile:h-[80px] mobile:text-[24px]';
  /* 프로젝트 소개 */
  const projectStyle = 'h-full w-[216px] mobile:w-[344px] tablet:w-[550px] laptop:w-[600px]  font-[700] cursor-pointer';
  /* 리뷰 */
  const reviewStyle = 'h-full w-[216px] mobile:w-[344px] tablet:w-[550px] laptop:w-[600px] font-[400] cursor-pointer';

  return (
    <div className={innerStyle}>
      <button
        className={isActiveTab === 'project' ? projectStyle : reviewStyle}
        onClick={() => setActiveTab('project')}
      >
        프로젝트 소개
      </button>
      <button className={isActiveTab === 'review' ? projectStyle : reviewStyle} onClick={() => setActiveTab('review')}>
        리뷰
      </button>
    </div>
  );
}

// 예 버튼 (흰색)
export function YesButtonWhite() {
  return (
    <div className="flex justify-center gap-1 items-center  border border-font-900 rounded-lg  py-[11px] w-[131px] h-[39px] text-font-900 bg-white hover:bg-primary-800 hover:text-white hover:border-primary-800">
      <CheckIcon size={15} strokeWidth={3} />
      <span className="medium-14">예</span>
    </div>
  );
}
// 예 버튼 (파랑)
export function YesButtonblue() {
  return (
    <div className="flex justify-center gap-1 items-center  border border-primary-800 rounded-lg  py-[11px] w-[131px] h-[39px] bg-primary-800 text-white ">
      <CheckIcon size={15} strokeWidth={3} />
      <span className="medium-14">예</span>
    </div>
  );
}
// 아니오 버튼 (흰색)
export function NoButtonWhite() {
  return (
    <div className="flex justify-center gap-1 items-center  border border-font-900 rounded-lg  py-[11px] w-[131px] h-[39px] text-font-900 bg-white hover:bg-primary-800 hover:text-white hover:border-primary-800">
      <X size={15} strokeWidth={3} />
      <span className="medium-14">아니오</span>
    </div>
  );
}
// 아니오 버튼 (파랑)
export function NoButtonblue() {
  return (
    <div className="flex justify-center gap-1 items-center  border border-primary-800 rounded-lg  py-[11px] w-[131px] h-[39px] bg-primary-800 text-white ">
      <X size={15} strokeWidth={3} />
      <span className="medium-14">아니오</span>
    </div>
  );
}

// 인증하기 체크박스 (체크 X)
{
  /* label 값 항상 입력해야함 */
}
export function UnCheckSquareBtn({ label }: CheckCircleProps) {
  return (
    <div className="flex justify-center items-center rounded-sm w-[102px] h-[36px] border border-font-400 bg-white">
      <button className="flex justify-center items-center gap-2 text-font-400 medium-14 cursor-pointer">
        <CheckIcon className="w-4" strokeWidth={3} />
        {label}
      </button>
    </div>
  );
}

// 인증하기 체크박스 (체크 O)
{
  /* label 값 항상 입력해야함 */
}
export function CheckSquareBtn({ label }: CheckCircleProps) {
  return (
    <div className="flex justify-center items-center rounded-sm w-[102px] h-[36px] border border-font-900 ">
      <button className="flex justify-center items-center gap-2 text-font-900 medium-14">
        <CheckIcon className="w-4 stroke-primary-800" strokeWidth={3} />
        {label}
      </button>
    </div>
  );
}

// 펀드림에 문의 (체크 X)
export function SquareBtnWhite() {
  return (
    <button className="flex justify-center items-center rounded-sm w-[180px] h-[36px] border border-font-400 text-font-400 bg-white medium-14 hover:bg-primary-800 hover:border-primary-800 hover:text-white">
      펀드림에 문의
    </button>
  );
}

// 펀드림에 문의 (체크 O)
export function SquareBtnBlue() {
  return (
    <button className="flex justify-center items-center rounded-sm w-[180px] h-[36px] border border-primary-800 bg-primary-800 text-white medium-14">
      펀드림에 문의
    </button>
  );
}
