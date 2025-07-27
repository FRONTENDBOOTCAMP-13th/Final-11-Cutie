import { ChangeButtonFill, PreviewCheckboxWithLabel } from '@components/button/SquareBtn';

/* 배송지 추가 모달 내용 */
export function Address() {
  const innerPadding = `p-[24px] ` + `mobile:p-[40px] ` + `tablet:p-[40px] ` + `laptop:p-[43px] `;
  const innerWidth = `w-[300px] ` + `mobile:w-[450px] ` + `tablet:w-[684px] ` + `laptop:w-[684px] `;

  return (
    <div className={`${innerPadding} ${innerWidth} flex flex-col gap-[20px]`}>
      {/* 제목 */}
      <AddAddressTitle />

      <div className="flex flex-col gap-[12px]">
        {/* 받는 사람 */}
        <SetReceiver />

        {/* 주소 */}
        <AddAddress />

        {/* 받는 사람 휴대폰 */}
        <AddPhoneNumber />

        {/* 기본배송지 등록, 개인정보 수집 및 이용 동의 */}
        <DefaultAddressAndPersonalInform />
      </div>

      {/* 등록 완료 */}
      <ChangeButtonFill label={'등록 완료'} className="w-full py-[16px]" />
    </div>
  );
}

/* 배송지 추가 타이틀 */
function AddAddressTitle() {
  const style = 'mobile:pb-5';
  const textSize = 'normal-18 text-[17px] mobile:text-[20px] laptop:text-[24px]';
  const textStyle = 'font-[700]';

  return (
    <div className={`${style} ${textStyle} ${textSize}`}>
      <p>배송지 추가</p>
    </div>
  );
}

/* 받는 사람 입력창 */
function SetReceiver() {
  const sortStyle = 'flex flex-col gap-[10px]';
  const textSize = 'normal-14 laptop:text-[16px]';
  const textStyle = 'font-[600]';

  const inputStyle = 'bg-bg border-secondary-200 border rounded-sm p-[9px] mobile:p-[12px] laptop:p-[15px]';
  const inputTextSize = 'normal-12 mobile:text-[14px] laptop:text-[16px]';
  const inputTextStyle = 'font-[400]';
  const inputSize = 'w-full h-[32px] mobile:h-[43px] laptop:h-[51px]';

  return (
    <div className={`${sortStyle}`}>
      <p className={`${textStyle} ${textSize}`}>받는 사람</p>
      <input
        type="tel"
        placeholder="받는 분 성함을 입력해주세요."
        className={`${inputStyle} ${inputTextSize} ${inputTextStyle} ${inputSize}`}
      />
    </div>
  );
}

/* 주소 추가 입력창 */
function AddAddress() {
  const sortStyle = 'flex flex-col gap-[10px]';
  const textSize = 'normal-14 laptop:text-[16px]';
  const textStyle = 'font-[600]';

  const inputStyle = 'bg-bg border-secondary-200 border rounded-sm p-[9px] mobile:p-[12px] laptop:p-[15px]';
  const inputTextSize = 'normal-12 mobile:text-[14px] laptop:text-[16px]';
  const inputTextStyle = 'font-[400]';
  const inputSize = 'w-full h-[32px] mobile:h-[43px] laptop:h-[51px]';

  return (
    <div className={`${sortStyle}`}>
      <p className={`${textStyle} ${textSize}`}>주소</p>
      <input
        type="tel"
        placeholder="받는 분 주소를 입력해 주세요."
        className={`${inputStyle} ${inputTextSize} ${inputTextStyle} ${inputSize}`}
      />
    </div>
  );
}

/* 받는 사람 전화번호 입력창 */
function AddPhoneNumber() {
  const sortStyle = 'flex flex-col gap-[10px]';
  const textSize = 'normal-14 laptop:text-[16px]';
  const textStyle = 'font-[600]';

  const inputStyle = 'bg-bg border-secondary-200 border rounded-sm p-[9px] mobile:p-[12px] laptop:p-[15px]';
  const inputTextSize = 'normal-12 mobile:text-[14px] laptop:text-[16px]';
  const inputTextStyle = 'font-[400]';
  const inputSize = 'w-full h-[32px] mobile:h-[43px] laptop:h-[51px]';

  return (
    <div className={`${sortStyle}`}>
      <p className={`${textSize} ${textStyle}`}>받는 사람 휴대폰 번호</p>
      <input
        type="tel"
        placeholder="받는 분 휴대폰 번호를 입력해주세요."
        className={`${inputStyle} ${inputTextSize} ${inputTextStyle} ${inputSize}`}
      />
    </div>
  );
}

/* 기본 배송지 등록, 개인정보 수집 및 이용 동의 */
function DefaultAddressAndPersonalInform() {
  const srotStyle = 'flex flex-col gap-[10px]';

  return (
    <div className={`${srotStyle}`}>
      <PreviewCheckboxWithLabel title={'기본 배송지로 등록'} />
      <PreviewCheckboxWithLabel title={'개인정보 수집 및 이용 동의'} />
    </div>
  );
}
