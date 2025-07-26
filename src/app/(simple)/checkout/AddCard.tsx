import { PreviewCheckboxWithLabel } from '@components/button/SquareBtn';
import { CheckCircle, UnCheckCircle } from '@components/checkbox/CircleCheckbox';
import { useState } from 'react';

// 이거 각각 컴포넌트 별로 사이즈 맞게 수정하기

export function AddCard() {
  const innerPadding = `p-[24px] ` + `mobile:p-[40px] ` + `tablet:p-[40px] ` + `laptop:p-[43px] `;
  const innerWidth = `w-[300px] ` + `mobile:w-[450px] ` + `tablet:w-[684px] ` + `laptop:w-[684px] `;

  return (
    <div className={innerPadding + innerWidth}>
      <AddCardTitle />
      <SelectUserType />
      <InputCardNumber />
      <ExpirationDate />
      <CardPasswordAndBirthday />
      <DefaultPayment />
    </div>
  );
}

/* 신용/체크 카드 등록 타이틀 */
function AddCardTitle() {
  return (
    <div className=" flex flex-row justify-between bold-16 mobile:text-[20px] laptop:text-[24px] mobile:pb-5">
      <p>신용/체크 카드 등록</p>
    </div>
  );
}

/* 개인/법인 체크 박스 */
function SelectUserType() {
  // 유저 타입
  const [userType, setUserType] = useState(true);

  // 변경
  function setType(changeType: boolean) {
    setUserType(changeType);
  }

  /* 이거 나중에 서현님이 올려 준걸로 교체하기 */

  return (
    <div className="flex flex-row gap-[90px]">
      {userType ? (
        <div onClick={() => setType(true)}>
          <CheckCircle prop="개인" />
        </div>
      ) : (
        <div onClick={() => setType(true)}>
          <UnCheckCircle prop="개인" />
        </div>
      )}
      {userType ? (
        <div onClick={() => setType(false)}>
          <UnCheckCircle prop="법인" />
        </div>
      ) : (
        <div onClick={() => setType(false)}>
          <CheckCircle prop="법인" />
        </div>
      )}
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
    <div className="grid grid-cols-[1fr_1fr] gap-6 max-[480px]:h-[70px] mobile:h-[65px] tablet:h-[70px] laptop:h-[80px]">
      {/* 카드 비밀번호 앞 2자리 */}
      <div className="flex flex-col justify-between">
        <p className="bold-14 laptop:text-[16px] max-[480px]:flex max-[480px]:flex-col">
          <span>카드 비밀번호</span>
          <span>앞 2자리</span>
        </p>
        <input
          type="tel"
          placeholder="카드 비밀번호 앞 2자리를 입력해주세요."
          className="bg-bg border-secondary-200 border w-full h-[28px] p-2.5 rounded-sm normal-10 mobile:h-[41px] laptop:h-[49px] mobile:text-[14px] laptop:text-[16px]"
        />
      </div>
      {/* 소유주 생년월일 */}
      <div className="flex flex-col justify-between">
        <p className="bold-14 w-full laptop:text-[16px]">소유주 생년월일</p>
        <input
          type="tel"
          placeholder="예)250808"
          className="bg-bg border-secondary-200 border w-full h-[28px] p-2.5 rounded-sm normal-10 mobile:h-[40px] laptop:h-[49px] mobile:text-[14px] laptop:text-[16px]"
        />
      </div>
    </div>
  );
}

/* 기본 결제 수단으로 등록 체크 박스 */
function DefaultPayment() {
  return (
    <div className="flex flex-col gap-3 mobile:gap-6">
      <PreviewCheckboxWithLabel title={'기본 결제 수단으로 등록'} />
    </div>
  );
}
