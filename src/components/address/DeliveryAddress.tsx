import PlusIcon from '@assets/icons/plus.svg';

// 후원자 정보
export function BuyerInfo() {
  return (
    <>
      <div className="flex flex-col gap-5 max-w-[632px]">
        <p className="bold-24 text-font-900">후원자 정보</p>
        <div className="bg-bg-200 p-5 border border-font-400 rounded-lg">
          <ul className="flex flex-col gap-[18px] text-font-900">
            <li className="bold-14 ">
              이름<span className="ml-[57px] font-medium text-font-400">홍길동</span>
            </li>
            <li className="bold-14 flex items-baseline">
              <div>
                연락처
                <span className="ml-[45px] font-medium text-font-400">010-1234-5678</span>
              </div>
              {/* 버튼 컴포넌트 폴더 안 거로 교체 필요 */}
              <button
                type="button"
                className="medium-12 text-font-400 bg-bg border border-font-400 rounded-sm px-[11px] py-1 ml-auto"
              >
                인증하기
              </button>
            </li>
            <li className="bold-14">
              이메일<span className="ml-[45px] font-medium text-font-400">abc@ddd.com</span>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

// 배송지 정보
export function BuyerAddress() {
  return (
    <>
      <div className="flex flex-col gap-5 max-w-[632px]">
        <p className="bold-24 text-font-900">배송지 정보</p>
        <button
          aria-label="배송지 추가"
          type="button"
          className="flex p-5 bg-bg justify-center border border-font-400 rounded-lg gap-[5px] items-center medium-16 text-font-400  cursor-pointer"
        >
          배송지 추가
          <PlusIcon className="aria-hidden:true" />
        </button>
      </div>
    </>
  );
}

// 결제수단
export function BuyMethod() {
  return (
    <>
      <div className="flex flex-col gap-5 max-w-[632px] ">
        <p className="bold-24 text-font-900">결제 수단</p>
        <div className="flex flex-col p-5 gap-[13px] bg-bg border border-font-400 rounded-lg">
          {/* CircleCheckbox.tsx 컴포넌트로 교체 필요! 자리만 잡아둔 것 */}
          <div className="flex  border-b gap-[27px] w-full h-[37px]">
            <p className="medium-16">카드 간편결제</p>
            <p className="medium-16">네이버페이</p>
            <p className="medium-16">카카오페이</p>
          </div>
          <div className="flex justify-center h-[19px] items-center gap-[5px] p-5 medium-16 text-font-400  cursor-pointer">
            카드등록
            <PlusIcon className="aria-hidden:true" />
          </div>
        </div>
      </div>
    </>
  );
}
