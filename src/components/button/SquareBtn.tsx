import CheckBox from '@assets/icons/checkbox.svg';
import UnCheckBox from '@assets/icons/uncheckbox.svg';

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
export function ChangeButton() {
  return (
    <div>
      <button className="flex items-center justify-center medium-14 px-[11px] py-[4px] border border-font-400 rounded-[4px] text-font-400 hover:bg-primary-800 hover:text-white hover:border-primary-800">
        변경
      </button>
    </div>
  );
}

//파란색 변경 버튼
export function ChangeButtonPrimary() {
  return (
    <div>
      <button className="flex items-center justify-center medium-14 px-[11px] py-[4px] border border-primary-800 rounded-[4px] text-primary-800 hover:bg-primary-800 hover:text-white hover:border-primary-800">
        변경
      </button>
    </div>
  );
}

/* 채워진 파란색 버튼 */
export function ChangeButtonFill() {
  return (
    <div>
      <button className="flex items-center justify-center medium-14 px-[31px] py-[8px] border bg-primary-800 rounded-[4px] text-white">
        변경
      </button>
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
