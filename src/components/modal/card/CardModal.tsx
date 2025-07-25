import '@app/globals.css';
import CloseBtn from '@assets/icons/close-btn.svg';
import { CheckCircle } from '@components/checkbox/CircleCheckbox';
import { CheckSquare } from '@components/checkbox/SquareCheckbox';
import { JSX } from 'react';

// 모달창 타입
interface ModalProps {
  // 배송지 추가, x 버튼 컴포넌트
  addAddressTitle?: null | { order: number; closeFn: () => void }; // 적용순서, 종료 함수

  // 받는 사람 입력창
  setReceiver?: null | { order: number }; // 적용 순서

  // 주소 추가 입력창
  addAddress?: null | { order: number }; // 적용순서

  // 받는 사람 전화번호 입력창
  addPhoneNumber?: null | { order: number }; // 적용순서

  // 기본 배송지 등록, 개인정보 수집 및 이용동의
  defaultAddressAndPersonalInform?: null | { order: number }; // 적용 순서

  // 신용/체크 카드 등록 타이틀
  addCardTitle?: null | { order: number; closeFn: () => void }; // 적용순서, 종료 함수

  // 개인/법인 체크 박스
  selectUserType?: null | { order: number };

  // 카드 번호 입력창
  inputCardNumber?: null | { order: number };

  // 카드 유효 기간 입력창
  expirationDate?: null | { order: number };

  // 카드 비밀번호, 소유지 생년월일 입력창
  cardPasswordAndBirthday?: null | { order: number };

  // 기본 결제 수단으로 등록
  defaultPayment?: null | { order: number };
}

// 최종 배열값 타입
type compoentsType = null | JSX.Element;

/* 배송지 추가 타이틀 , x 버튼 타입 */
interface AddAddressTitleProps {
  closeFn: () => void; // 모달창 닫는 함수
}

/* 신용/체크 카드 등록 타이틀 */
interface AddCardTitleProps {
  closeFn: () => void;
}

// 결제 관련 모달창
export function PaymentModal({
  addAddressTitle = null,
  setReceiver = null,
  addAddress = null,
  addPhoneNumber = null,
  defaultAddressAndPersonalInform = null,
  addCardTitle = null,
  selectUserType = null,
  inputCardNumber = null,
  expirationDate = null,
  cardPasswordAndBirthday = null,
  defaultPayment = null,
}: ModalProps) {
  const innerPadding = `p-[24px] ` + `mobile:p-[40px] ` + `tablet:p-[40px] ` + `laptop:p-[43px] `;
  const innerWidth = `w-[300px] ` + `mobile:w-[450px] ` + `tablet:w-[684px] ` + `laptop:w-[684px] `;

  // 리턴 되기전에 보여줄 컴포넌트 배열
  const compoents: compoentsType[] = [];

  //  배송지 추가 타이틀
  if (addAddressTitle) {
    compoents.splice(
      addAddressTitle.order - 1,
      0,
      <AddAddressTitle key={'addAddressTitle'} closeFn={addAddressTitle.closeFn} />,
    );
  }

  // 받는 사람 입력창 컴포넌트
  if (setReceiver) {
    compoents.splice(setReceiver.order - 1, 0, <SetReceiver key={'SetReceiver'} />);
  }

  // 받는 사람 주소 입력창 컴포넌트
  if (addAddress) {
    compoents.splice(addAddress.order - 1, 0, <AddAddress key={'AddAddress'} />);
  }

  // 받는 사람 전화 번호 입력창 컴포넌트
  if (addPhoneNumber) {
    compoents.splice(addPhoneNumber.order - 1, 0, <AddPhoneNumber key={'AddPhoneNumber'} />);
  }

  // 기본 배송지 등록, 개인정보 수집 및 이용동의
  if (defaultAddressAndPersonalInform) {
    compoents.splice(
      defaultAddressAndPersonalInform.order - 1,
      0,
      <DefaultAddressAndPersonalInform key={'DefaultAddressAndPersonalInform'} />,
    );
  }

  // 신용/체크 카드 등록 타이틀 컴포넌트
  if (addCardTitle) {
    compoents.splice(
      addCardTitle.order - 1,
      0,
      <AddCardTitle key={'addAddressTitle'} closeFn={addCardTitle.closeFn} />,
    );
  }

  //  개인/법인 체크 박스 컴포넌트
  if (selectUserType) {
    compoents.splice(selectUserType.order - 1, 0, <SelectUserType key={'SelectUserType'} />);
  }

  // 카드 번호 입력창 컴포넌트
  if (inputCardNumber) {
    compoents.splice(inputCardNumber.order - 1, 0, <InputCardNumber key={'InputCardNumber'} />);
  }

  // 카드 유효 기간 컴포넌트
  if (expirationDate) {
    compoents.splice(expirationDate.order - 1, 0, <ExpirationDate key={'ExpirationDate'} />);
  }

  // 카드 비밀번호, 소유주 생년월일 컴포넌트
  if (cardPasswordAndBirthday) {
    compoents.splice(cardPasswordAndBirthday.order - 1, 0, <CardPasswordAndBirthday key={'CardPasswordAndBirthday'} />);
  }

  // 기본 결제수단으로 등록
  if (defaultPayment) {
    compoents.splice(defaultPayment.order - 1, 0, <DefaultPayment key={'DefaultPayment'} />);
  }

  return (
    <div
      className={
        innerPadding +
        innerWidth +
        'fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] ' +
        'rounded-2xl bg-primary-50 ' +
        'flex flex-col gap-6 mobile:gap-10 '
      }
    >
      {/* 여기 나중에 정보 전달을 위해 form요소로 감싸야할 듯 */}
      {compoents}

      {/* 등록완료 버튼 */}
      <button className="w-full h-[33px] mobile:h-[56px] laptop:h-[64px] p-2 flex items-center justify-center bg-primary-800 text-white semibold-14 mobile:text-[20px] rounded-sm ">
        등록완료
      </button>
    </div>
  );
}

// 추가 모달이 있다면 밑에 계속 추가해 주세요

/* 배송지 추가 타이틀 */
function AddAddressTitle({ closeFn }: AddAddressTitleProps) {
  return (
    <div className=" flex flex-row justify-between bold-16 mobile:text-[20px] laptop:text-[24px] mobile:pb-5">
      <p>배송지 추가</p>
      <button
        type="button"
        onClick={() => {
          closeFn();
        }}
      >
        <CloseBtn />
      </button>
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
      <CheckSquare prop="기본 배송지로 등록" />
      <CheckSquare prop="개인정보 수집 및 이용 동의" />
    </div>
  );
}

/* 신용/체크 카드 등록 타이틀 */
function AddCardTitle({ closeFn }: AddCardTitleProps) {
  return (
    <div className=" flex flex-row justify-between bold-16 mobile:text-[20px] laptop:text-[24px] mobile:pb-5">
      <p>신용/체크 카드 등록</p>
      <button
        type="button"
        onClick={() => {
          closeFn();
        }}
      >
        <CloseBtn />
      </button>
    </div>
  );
}

/* 개인/법인 체크 박스 */
function SelectUserType() {
  return (
    <div className="flex flex-row gap-[90px]">
      <CheckCircle prop="개인" />
      <CheckCircle prop="법인" />
    </div>
  );
}

/* 카드 번호 입력창 */
function InputCardNumber() {
  return (
    <div className="flex flex-col gap-2.5">
      <p className="bold-14 laptop:text-[16px]">카드번호</p>
      <input
        type="tel"
        placeholder="1234 5678 9012 3456"
        className="bg-bg border-secondary-200 border w-full h-[28px] mobile:h-[40px] laptop:h-[47px] p-2.5 rounded-sm normal-14 laptop:text-[16px]"
      />
    </div>
  );
}

/* 카드 유효기간 입력 */
function ExpirationDate() {
  return (
    <div className="flex flex-col gap-2.5 ">
      <p className="bold-14 laptop:text-[16px]">카드유효기간</p>
      {/* 월, 연도 선택 */}
      <div className="flex gap-6">
        {/* 월 드롭다운 */}
        <div className="">
          <select
            name="birthMonth"
            id="birthMonth"
            className="w-[103px] h-[35px] bg-bg border border-secondary-200 rounded-sm normal-14 laptop:text-[16px] p-[5px] mobile:h-[47px] laptop:h-[59px]"
          >
            <option value="1">1월</option>
            <option value="2">2월</option>
            <option value="3">3월</option>
            <option value="4">4월</option>
            <option value="5">5월</option>
            <option value="6">6월</option>
            <option value="7">7월</option>
            <option value="8">8월</option>
            <option value="9">9월</option>
            <option value="10">10월</option>
            <option value="11">11월</option>
            <option value="12">12월</option>
          </select>
        </div>
        {/* 연도 드롭다운 */}
        <div className="">
          <select
            name="birthMonth"
            id="birthMonth"
            className="w-[103px] h-[35px] bg-bg border border-secondary-200 rounded-sm normal-14 laptop:text-[16px] p-[5px] mobile:h-[47px] laptop:h-[59px]"
          >
            <option value="2025">2025</option>
            <option value="2024">2024</option>
            <option value="2023">2023</option>
            <option value="2022">2022</option>
            <option value="2021">2021</option>
            <option value="2020">2020</option>
            <option value="2019">2019</option>
            <option value="2018">2018</option>
            <option value="2017">2017</option>
            <option value="2016">2016</option>
            <option value="2015">2015</option>
            <option value="2014">2014</option>
            <option value="2013">2013</option>
            <option value="2012">2012</option>
            <option value="2011">2011</option>
            <option value="2010">2010</option>
            <option value="2009">2009</option>
            <option value="2008">2008</option>
            <option value="2007">2007</option>
            <option value="2006">2006</option>
            <option value="2005">2005</option>
            <option value="2004">2004</option>
            <option value="2003">2003</option>
            <option value="2002">2002</option>
            <option value="2001">2001</option>
            <option value="2000">2000</option>
            <option value="1999">1999</option>
            <option value="1998">1998</option>
            <option value="1997">1997</option>
            <option value="1996">1996</option>
            <option value="1995">1995</option>
          </select>
        </div>
      </div>
    </div>
  );
}

/* 카드 비밀번호, 소유주 생년월일 */
function CardPasswordAndBirthday() {
  return (
    <div className="flex gap-6">
      {/* 카드 비밀번호 앞 2자리 */}
      <div className="flex flex-col gap-2.5">
        <p className="bold-14 laptop:text-[16px]">카드 비밀번호 앞 2자리</p>
        <input
          type="tel"
          placeholder="카드 비밀번호 앞 2자리를 입력해주세요."
          className="bg-bg border-secondary-200 border w-full h-[28px] p-2.5 rounded-sm normal-10 mobile:h-[41px] mobile:w-[241px] laptop:w-[287px] laptop:h-[49px] mobile:text-[14px] laptop:text-[16px]"
        />
      </div>
      {/* 소유주 생년월일 */}
      <div className="flex flex-col gap-2.5">
        <p className="bold-14 w-full laptop:text-[16px]">소유주 생년월일</p>
        <input
          type="tel"
          placeholder="예)250808"
          className="bg-bg border-secondary-200 border w-[160px] h-[28px] p-2.5 rounded-sm normal-10 mobile:h-[40px] mobile:w-[241px] laptop:w-[287px] laptop:h-[49px] mobile:text-[14px] laptop:text-[16px]"
        />
      </div>
    </div>
  );
}

/* 기본 결제 수단으로 등록 체크 박스 */
function DefaultPayment() {
  return (
    <div className="flex flex-col gap-3 mobile:gap-6">
      <CheckSquare prop="기본 결제 수단으로 등록" />
    </div>
  );
}

///////////////////////////////////////////

// 이 파일 develop랑 merge시 충돌이 안난다면
// 주석 처리 해둔 함수 노션에서 제거해야됨

// export function ShippingAddressModal() {}
// export function CardModal({ clickPayCardButton }) {}

// 함수 이름 변경함
// Modal -> PaymentModal
