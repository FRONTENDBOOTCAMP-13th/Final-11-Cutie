export function BuyerInfo() {
  return (
    <>
      <div className="flex flex-col gap-5 max-w-[632px]">
        <p className="bold-24">후원자 정보</p>
        <div className="bg-bg-200 p-5 border border-font-400 rounded-lg">
          <ul className="flex flex-col gap-[18px]">
            <li className="bold-14">
              이름<span className="ml-[57px] font-medium text-font-400">홍길동</span>
            </li>
            <li className="bold-14 flex items-baseline">
              <div>
                연락처
                <span className="ml-[45px] font-medium text-font-400">010-1234-5678</span>
              </div>
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
