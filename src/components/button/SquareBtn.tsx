import CheckBox from '@assets/icons/checkbox.svg';
import UnCheckBox from '@assets/icons/uncheckbox.svg';

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

// 로그인 입력
export function LoginButton() {
  const innerStyle =
    'w-[284px] h-[43px] bg-primary-800 text-white rounded-[4px] hover:opacity-[70%] normal-14 font-pretendard font-[600] ' +
    'mobile:w-[351px] mobile:h-[50px] text-[24px]';

  return <button className={innerStyle}>로그인</button>;
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
