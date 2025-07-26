import { PreviewCheckboxWithLabel } from '@components/button/SquareBtn';

// 이거 각각 컴포넌트 별로 사이즈 맞게 수정하기

export function Address() {
  const innerPadding = `p-[24px] ` + `mobile:p-[40px] ` + `tablet:p-[40px] ` + `laptop:p-[43px] `;
  const innerWidth = `w-[300px] ` + `mobile:w-[450px] ` + `tablet:w-[684px] ` + `laptop:w-[684px] `;

  return (
    <div className={innerPadding + innerWidth}>
      <AddAddressTitle />
      <SetReceiver />
      <AddAddress />
      <AddPhoneNumber />
      <DefaultAddressAndPersonalInform />
    </div>
  );
}

/* 배송지 추가 타이틀 */
function AddAddressTitle() {
  return (
    <div className="flex flex-row justify-between bold-16 mobile:text-[20px] laptop:text-[24px] mobile:pb-5">
      <p>배송지 추가</p>
    </div>
  );
}

/* 받는 사람 입력창 */
function SetReceiver() {
  return (
    <div className="flex flex-col gap-2.5">
      <p className="bold-14 laptop:text-[16px]">받는 사람</p>
      <input
        type="tel"
        placeholder="받는 분 성함을 입력해주세요."
        className="bg-bg border-secondary-200 border w-full h-[28px] mobile:h-[40px] laptop:h-[47px] p-2.5 rounded-sm normal-12 mobile:text-[14px] laptop:text-[16px]"
      />
    </div>
  );
}

/* 주소 추가 입력창 */
function AddAddress() {
  return (
    <div className="flex flex-col gap-2.5">
      <p className="bold-14 laptop:text-[16px]">주소</p>
      <input
        type="tel"
        placeholder="받는 분 주소를 입력해 주세요."
        className="bg-bg border-secondary-200 border w-full h-[28px] mobile:h-[40px] laptop:h-[47px] p-2.5 rounded-sm normal-12 mobile:text-[14px] laptop:text-[16px]"
      />
    </div>
  );
}

/* 받는 사람 전화번호 입력창 */
function AddPhoneNumber() {
  return (
    <div className="flex flex-col gap-2.5">
      <p className="bold-14 laptop:text-[16px]">받는 사람 휴대폰 번호</p>
      <input
        type="tel"
        placeholder="받는 분 휴대폰 번호를 입력해주세요."
        className="bg-bg border-secondary-200 border w-full h-[28px] mobile:h-[40px] laptop:h-[47px] p-2.5 rounded-sm normal-12 mobile:text-[14px] laptop:text-[16px]"
      />
    </div>
  );
}

/* 기본 배송지 등록, 개인정보 수집 및 이용 동의 */
function DefaultAddressAndPersonalInform() {
  return (
    <div className="flex flex-col gap-3 mobile:gap-6">
      <PreviewCheckboxWithLabel title={'기본 배송지로 등록'} />
      <PreviewCheckboxWithLabel title={'개인정보 수집 및 이용 동의'} />
    </div>
  );
}
