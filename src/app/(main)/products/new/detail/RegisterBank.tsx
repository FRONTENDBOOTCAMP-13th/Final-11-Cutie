'use client';

import { ChangeButton, ChangeButtonFill } from '@components/button/SquareBtn';
import { CheckCircle, UnCheckCircle } from '@components/checkbox/CircleCheckbox';
import React, { useEffect, useState } from 'react';
import { userProjectStroe } from 'zustand/useProjectStore';

interface BankModal {
  onClick: () => void;
}

// 창작자 계좌 등록 (전체)
export default function RegisterBank({ onClick }: BankModal) {
  // 마지막으로 선택한 계좌
  const LastIndividual = userProjectStroe(state => state.userIndividual);
  // 계좌 종류 저장 함수
  const setIndividual = userProjectStroe(state => state.setIndividual);

  const personal = '개인';
  const corporate = '사업자';
  const [type, setType] = useState(LastIndividual ? personal : corporate);

  useEffect(() => {
    if (type === personal) setIndividual(true);
    else setIndividual(false);
  }, [type]);

  const innerPadding = `p-[24px] mobile:p-[40px] tablet:p-[40px] laptop:p-[43px]`;
  const innerWidth = `w-[300px] mobile:w-[450px] tablet:w-[684px] laptop:w-[684px]`;
  const innerHeight = `min-h-[361px] mobile:min-h-[596px] tablet:min-h-[691px] laptop:min-h-[691px]`;

  const handleCancel = () => {
    onClick();
  };

  // useProjectStore에서 가져온 값
  const userBirthday = userProjectStroe(state => state.userBirthday);
  const userBank = userProjectStroe(state => state.userBank);
  const userName = userProjectStroe(state => state.userName);
  const userAccountNumber = userProjectStroe(state => state.userAccountNumber);
  const userIndividual = userProjectStroe(state => state.userIndividual);
  const userBusinessNumber = userProjectStroe(state => state.userBusinessNumber);

  const setAccountCheck = userProjectStroe(state => state.setAccountCheck);

  // 등록 완료 버튼 눌렀을때
  const inputEnd = () => {
    // 데이터 검증
    setAccountCheck(false);
    // 예금주명 체크
    const userNameCheck = /^(?:[가-힣]{2,4}|[a-zA-Z]{2,10}\s[a-zA-Z]{2,10})$/.test(userName);

    if (userIndividual && userBirthday.length < 6) {
      alert('생년월일이 잘못 입력되었습니다.');
      return;
    } else if (!userIndividual && userBusinessNumber.length !== 10) {
      alert('사업자 번호가 잘못입력 되었습니다.');
      return;
    } else if (userBank === '') {
      alert('거래 은행을 선택해주세요.');
      return;
    } else if (!userNameCheck) {
      alert('예금주명을 다시 입력해주세요.');
      return;
    } else if (userAccountNumber.length < 10) {
      alert('계좌번호를 다시 입력해주세요.');
      return;
    }

    setAccountCheck(true);
    onClick();
  };

  return (
    <div className={`${innerPadding} ${innerWidth} ${innerHeight} border rounded-2xl`}>
      <div className="flex flex-col gap-3 mobile:gap-5 tablet:gap-9 ">
        <p className="semibold-14">계좌 종류</p>

        {/* 개인/법인 선택 */}
        <div className="flex flex-row gap-[50px]">
          <button onClick={() => setType(personal)}>
            {type === personal ? <CheckCircle prop="개인" /> : <UnCheckCircle prop="개인" />}
          </button>
          <button onClick={() => setType(corporate)}>
            {type === corporate ? <CheckCircle prop="사업자" /> : <UnCheckCircle prop="사업자" />}
          </button>
        </div>

        {/* 내용 영역 */}
        <div className="pt-5">{type === personal ? <RegisterPersonalBankModal /> : <RegisterCorpBankModal />}</div>

        <CommonBankFields />

        {/* 버튼 */}
        <div className="flex gap-2.5 pt-2.5 laptop:pt-11">
          <ChangeButton
            label="취소"
            onClick={handleCancel}
            disableHover
            className="w-full h-[33px] p-2 bg-white border medium-14 rounded-xs flex items-center justify-center "
          />
          <ChangeButtonFill
            label="등록완료"
            onClick={inputEnd}
            className="w-full h-[33px] p-2 bg-primary-800 text-white medium-14 rounded-xs flex items-center justify-center"
          />
        </div>
      </div>
    </div>
  );
}

// 창작자 계좌 등록 모달 (개인)
function RegisterPersonalBankModal() {
  // 마지막으로 입력한 생일 정보
  const lastBirthday = userProjectStroe(state => state.userBirthday);
  // 생일 정보 저장 함수
  const setBirthday = userProjectStroe(state => state.setBirthday);

  // 입력값
  const [value, setValue] = useState(lastBirthday);
  const [valueCheck, setValueCheck] = useState(true);
  const [errMessage, setErrMessage] = useState('');

  // 입력값 타입 체크 함수
  function InputDataCheck(birthday: string) {
    const numberCheck = /[^0-9]/.test(birthday);

    // 만약 숫자 말고 다른 값이 들어있다면
    if (numberCheck) {
      setValueCheck(false);
      setErrMessage('입력 방식이 올바르지 않습니다.');
      return;
    }

    // 만약 입력 숫자가 6자리가 넘는다면
    if (birthday.length > 6) {
      setValueCheck(false);
      setErrMessage('생년 월일은 6자리로 입력해주세요.');
      return;
    }

    setValueCheck(true);
    setValue(birthday);
    setBirthday(birthday);
  }

  return (
    <div className="flex flex-col gap-3 laptop:gap-[27px]">
      {/* 생년월일 */}

      <div>
        <p className="semibold-14 pb-2">예금주 생년월일</p>
        <input
          value={value}
          onChange={e => InputDataCheck(e.target.value)}
          onBlur={e => InputDataCheck(e.target.value)}
          type="tel"
          placeholder="250808"
          className="border rounded-xs normal-14 w-full h-[34px] p-2.5"
        />
        {!valueCheck && <span className="text-error normal-12">{errMessage}</span>}
      </div>
    </div>
  );
}

// 창작자 계좌 등록 모달 (법인)
function RegisterCorpBankModal() {
  const setBusinessNumber = userProjectStroe(state => state.setBusinessNumber);
  const businessNumber = userProjectStroe(state => state.userBusinessNumber);

  const [number, setNumber] = useState(businessNumber);
  const [err, setErr] = useState(false);
  const [errMessage, setErrMessage] = useState('');

  const NumberCheck = (num: string) => {
    const NotNum = /\D/.test(num);

    // 숫자가 아닐때
    if (NotNum) {
      setErr(true);
      setErrMessage('숫자만 입력해주세요.');
      return;
    } else if (num.length > 10) {
      setErr(true);
      setErrMessage('최대 10자 까지 입력할 수 있습니다.');
      return;
    }

    setNumber(num);
    setBusinessNumber(num);
    setErr(false);
  };

  return (
    <div className="flex flex-col gap-3 laptop:gap-[27px]">
      {/* 사업자 번호 */}
      <div>
        <p className="semibold-14 pb-2">사업자 번호</p>
        <input
          value={number}
          onChange={e => NumberCheck(e.target.value)}
          onBlur={e => NumberCheck(e.target.value)}
          type="tel"
          placeholder="예)2423424"
          className="border rounded-xs normal-14 w-full h-[34px] p-2.5"
        />
        {err && <span className="text-error normal-12">{errMessage}</span>}
      </div>
    </div>
  );
}

// 창작자 계좌 등록 모달 공통 필드 (은행, 예금주명, 계좌번호)
function CommonBankFields() {
  // 현재 유저가 마지막으로 선택한 은행
  const lastBank = userProjectStroe(state => state.userBank);

  // 현재 유저가 마지막으로 입력한 예금주명
  const lastName = userProjectStroe(state => state.userName);

  // 현재 유저가 마지막으로 입력한 계좌번호
  const lastAccountNumber = userProjectStroe(state => state.userAccountNumber);

  // 선택은행 저장 함수
  const setBank = userProjectStroe(state => state.setBank);
  // 예금주명 저장 함수
  const setNameSave = userProjectStroe(state => state.setName);
  // 계좌번호 저장 함수
  const setAccountNumberSave = userProjectStroe(state => state.setAccountNumber);

  // 현재 은행 입력값
  const [bankText, setBankText] = useState(lastBank);
  // 현재 선택 은행 확인
  const [selcetBank, setSelectBank] = useState(true);

  // 마지막 입력 은행 확인
  useEffect(() => {
    if (lastBank === '') setSelectBank(false);
  }, []);

  // 예금주명
  const [name, setName] = useState(lastName);
  // 예금주명 에러
  const [errName, setErrName] = useState(false);

  // 계좌번호
  const [accountNumber, setAccountNumber] = useState(lastAccountNumber);
  // 계좌번호 에러
  const [errAccountNumber, SetErrAccountNumber] = useState(false);

  // 예금주명 확인 함수
  function InputNameCheck(name: string) {
    const nameCheck = /[0-9!@#$%^&*(),.?":{}|<>[\]\\\/\-_=+~`\s]/.test(name);

    // 만약 입력값에 특수문자나 숫자가 들어갔다면
    if (nameCheck) {
      setErrName(true);
      return;
    }

    setName(name);
    setErrName(false);
    setNameSave(name);
  }

  // 예금주명 이름 양식 맞는지 확인하는 함수
  function InputNameType(name: string) {
    const check = /^(?:[가-힣]{2,4}|[a-zA-Z]{2,10}\s[a-zA-Z]{2,10})$/.test(name);

    if (!check) {
      setErrName(true);
      return;
    }

    setErrName(false);
  }

  // 은행 선택 확인 함수
  function BacnkSelectCheck(bank: string) {
    if (bank === '') {
      setSelectBank(false);
    } else {
      setSelectBank(true);
    }
    setBank(bank);
    setBankText(bank);
  }

  // 계좌번호 확인 함수
  function AccountNumberCheck(accountNumber: string) {
    const account = /[^0-9]|\s/.test(accountNumber);

    if (account) {
      SetErrAccountNumber(true);
      return;
    }

    setAccountNumber(accountNumber);
    SetErrAccountNumber(false);
    setAccountNumberSave(accountNumber);
  }

  return (
    <>
      {/* 거래 은행 */}
      <div className="flex flex-col gap-2">
        <p className="semibold-14">거래 은행</p>
        <select
          name="bank"
          id="bank"
          value={bankText}
          onChange={e => BacnkSelectCheck(e.target.value)}
          className="border w-full rounded-xs h-[34px] normal-14 text-font-400 border-font-900 pl-2"
        >
          <option value="">은행을 선택해주세요</option>
          <option value="kb">KB국민은행</option>
          <option value="shinhan">신한은행</option>
          <option value="woori">우리은행</option>
          <option value="hana">하나은행</option>
          <option value="ibk">IBK기업은행</option>
          <option value="nh">NH농협은행</option>
          <option value="kakaobank">카카오뱅크</option>
        </select>
        {!selcetBank && <span className="text-error normal-12">거래 은행을 선택해주세요.</span>}
        <p className="normal-14 text-font-400">케이뱅크와 카카오뱅크는 등록이 불가능합니다.</p>
      </div>

      {/* 예금주명 */}
      <div>
        <p className="semibold-14 pb-2">예금주명</p>
        <input
          value={name}
          onChange={e => InputNameCheck(e.target.value)}
          onBlur={e => InputNameType(e.target.value)}
          type="text"
          placeholder="케로로"
          className=" border bg-white rounded-xs normal-14 w-full h-[34px] p-2.5"
        />
        {errName && <span className="text-error normal-12">공백,숫자나 특수문자는 사용할 수 없습니다.</span>}
      </div>

      {/* 계좌번호 */}
      <div>
        <p className="semibold-14 pb-2">계좌번호</p>
        <input
          type="tel"
          value={accountNumber}
          onChange={e => AccountNumberCheck(e.target.value)}
          placeholder="숫자로만 입력해주세요"
          className="border rounded-xs normal-14 w-full h-[34px] p-2.5"
        />
        {errAccountNumber && <span className="text-error normal-12">공백,문자는 사용할 수 없습니다.</span>}
      </div>
    </>
  );
}
