import CheckBox from '@assets/icons/checkbox.svg';
import UnCheckBox from '@assets/icons/uncheckbox.svg';
import { CheckIcon } from 'lucide-react';

type CheckCircleProps = {
  prop: string;
};

//호버되는 체크박스 버튼 컴포넌트
export function CheckboxBtn() {
  return (
    <div className="flex items-center gap-2">
      <button className={`w-[18px] h-[18px] 'text-primary-800' : 'text-secondary-200'}`}>
        <UnCheckBox className="w-full h-full" />
      </button>
      <button className={`w-[18px] h-[18px] 'text-primary-800' : 'text-secondary-200'}`}>
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
      <div className="flex items-center gap-2">
        <button className={`w-[18px] h-[18px] 'text-primary-800' : 'text-secondary-200'}`}>
          <UnCheckBox className="w-full h-full" />
        </button>
        <span className="medium-16 leading-none">대표 창작자는 만 19세 이상의 성인이어야 합니다.</span>
      </div>
      {/* 호버된체크박스와 라벨이 붙어있는 컴포넌트 */}
      <div className="flex items-center gap-2">
        <button className={`w-[18px] h-[18px] 'text-primary-800' : 'text-secondary-200'}`}>
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
      <button className="px-[32px] py-[12px] medium-14  bg-secondary-200  hover:bg-primary-800  text-white ">
        다음
      </button>
      <button className="px-[32px] py-[12px] medium-14 bg-primary-800  text-white">다음</button>
    </div>
  );
}

// 로그인 입력(기본)
export function LoginButtonDefault() {
  return (
    <button className="w-[28.8125rem] h-[3.5625rem] bg-primary-800 text-white rounded-[.25rem] hover:opacity-[70%] semibold-24 font-pretendard">
      로그인
    </button>
  );
}

// 로그인 입력(480px)
export function LoginButtonMobile() {
  return (
    <button className="w-[17.75rem] h-[2.6875rem] bg-primary-800 text-white rounded-[.25rem] hover:opacity-[70%] semibold-14 font-pretendard">
      로그인
    </button>
  );
}


// 인증하기 체크박스 (체크 X)
{/* prop 값 항상 입력해야함 */}
export function UnCheckSquareBtn({ prop }: CheckCircleProps){
  return(
    <div className='flex justify-center items-center rounded-sm w-[102px] h-[36px] border border-font-400 bg-white '>
      <form className=' text-font-400 medium-12'>
        <button className='flex justify-center items-center gap-2 '>
          <CheckIcon className='w-4'/>
          { prop }
        </button>
      </form>
    </div>
  );
}

// 인증하기 체크박스 (체크 O)
{/* prop 값 항상 입력해야함 */}
export function CheckSquareBtn({ prop }: CheckCircleProps){
  return(
    <div className='flex justify-center items-center rounded-sm w-[102px] h-[36px] border border-font-900 '>
      <form className='flex text-font-900 justify-center items-center gap-2 medium-12'>
        <button className='flex justify-center items-center gap-2 '>
          <CheckIcon className='w-4 stroke-primary-800' />
          {prop}
        </button>
      </form>
    </div>
  );
}

// 펀드림에 문의 (체크 X)
export function SquareBtnWhite(){
  return(
    <button className='flex justify-center items-center rounded-sm w-[180px] h-[36px] border border-font-400 text-font-400 bg-white medium-12'>
      펀드림에 문의
    </button>
  );
}

// 펀드림에 문의 (체크 O)
export function SquareBtnBlue(){
  return(
    <button className='flex justify-center items-center rounded-sm w-[180px] h-[36px] border bg-primary-800 text-white medium-12'>
      펀드림에 문의
    </button>
  );
}