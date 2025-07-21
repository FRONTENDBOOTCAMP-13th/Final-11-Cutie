import CheckBox from '@assets/icons/checkbox.svg';
import UnCheckBox from '@assets/icons/uncheckbox.svg';

import { CheckIcon, X } from 'lucide-react';

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

//호버되는 체크박스 버튼 컴포넌트
export function CheckboxBtn() {
  return (
    <div className="flex items-center gap-2">
      <button className="w-[18px] h-[18px] text-secondary-200">
        <UnCheckBox className="w-full h-full" />
      </button>
      <button className="w-[18px] h-[18px] text-primary-800">
        <CheckBox className="w-full h-full" />
      </button>
    </div>
  );
}

//호버체크박스와 라벨이 붙어있는 컴포넌트
export function CheckboxWithLabel() {
  return (
    <div className="flex flex-col gap-2">
      {/* 빈체크박스와 라벨이 붙어있는 컴포넌트 */}
      <div className="flex items-center gap-2 ">
        <button className="w-[18px] h-[18px] text-secondary-200 mt-[5px]">
          <UnCheckBox className="w-full h-full" />
        </button>
        <span className="medium-16 leading-none">대표 창작자는 만 19세 이상의 성인이어야 합니다.</span>
      </div>
      {/* 호버된체크박스와 라벨이 붙어있는 컴포넌트 */}
      <div className="flex items-center gap-2">
        <button className="w-[18px] h-[18px] text-primary-800 mt-[5px]">
          <CheckBox className="w-full h-full" />
        </button>
        <span className="medium-16 leading-none">대표 창작자는 만 19세 이상의 성인이어야 합니다.</span>
      </div>
    </div>
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
    <div>
      <button
        className={`bg-bg cursor-pointer flex items-center justify-center medium-14 px-[11px] py-[4px] border border-font-400 rounded-[4px] text-font-400 hover:bg-primary-800 hover:text-white hover:border-primary-800 ${className}`}
      >
        {label}
      </button>
    </div>
  );
}

//파란색 변경 버튼
export function ChangeButtonPrimary({ label, className = '' }: ChangeBtnProps) {
  return (
    <div>
      <button
        className={`bg-bg flex items-center justify-center medium-14 px-[11px] py-[4px] border border-primary-800 rounded-[4px] text-primary-800 hover:bg-primary-800 hover:text-white hover:border-primary-800 cursor-pointer ${className}`}
      >
        {label}
      </button>
    </div>
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
        className="flex flex-1 items-center justify-center px-[6px] py-[19px] w-full h-15 bg-primary-800/70 text-white rounded-lg hover:bg-primary-800 hover:text-white medium-14 tablet:text-[16px] cursor-pointer"
      >
        {label}
      </button>
    </>
  );
}

// 로그인 입력
export function LoginButton({ label }: loginBtnProps) {
  const innerStyle =
    'w-full h-[40px] bg-primary-800 text-white rounded-[4px] hover:opacity-[70%] cusor-pointer semibold-14 font-pretendard font-[600]' +
    'mobile:h-[57px] tablet:h-[57px] mobile:text-[20px] mobile:rounded-[8px] tablet:text-[24px]';

  return (
    <button type="submit" className={innerStyle}>
      {label}
    </button>
  );
}

// 소개 & 리뷰
export function ReviewTab() {
  /* 전체 박스 */
  const innerStyle =
    'flex justify-center items-center w-[432px] h-[50px] normal-14 ' +
    'mobile:w-[688px] mobile:h-[80px] mobile:text-[24px] ' +
    'tablet:w-[1100px] ' +
    'laptop:w-[1200px]';
  /* 프로젝트 소개 */
  const projectStyle = 'flex-1 h-full font-[700] border-b-[1px] border-secondary-200 bg-bg';
  /* 리뷰 */
  const reviewStyle = 'flex-1 h-full font-[400] border-b-[1px] border-secondary-200 bg-bg';

  return (
    <div className={innerStyle}>
      <button className={projectStyle}>프로젝트 소개</button>
      <button className={reviewStyle}>리뷰</button>
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
    <div className="flex justify-center items-center rounded-sm w-[102px] h-[36px] border border-font-400 bg-white ">
      <button className="flex justify-center items-center gap-2 text-font-400 medium-14 ">
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
