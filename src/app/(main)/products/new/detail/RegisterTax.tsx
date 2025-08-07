'use client';

import { ChangeButton, ChangeButtonFill } from '@components/button/SquareBtn';
import { CheckCircle, UnCheckCircle } from '@components/checkbox/CircleCheckbox';
import { useState } from 'react';
import { userProjectStroe } from 'zustand/useProjectStore';

interface TaxModal {
  onClick: () => void;
}

interface UserTypeSclectProps {
  type: string;
  personal: string;
  corporate: string;
  DutyTypeCheck: (text: string) => void;
}

// 창작자 세금 계산서 발행 모달
export default function RegisterTax({ onClick }: TaxModal) {
  const LastDutyType = userProjectStroe(state => state.userDutyType);
  const setDutyType = userProjectStroe(state => state.setDutyType);

  const personal = '개인';
  const corporate = '사업자';
  let LastType = '';

  if (LastDutyType) LastType = personal;
  else LastType = corporate;

  const [type, setType] = useState(LastType);

  const DutyTypeCheck = (e: string) => {
    if (e === personal) setDutyType(true);
    else setDutyType(false);

    setType(e);
  };

  const handleCancel = () => {
    onClick();
  };

  // 세금 계산서 발행 결과 저장 함수
  const setDutyCheck = userProjectStroe(state => state.setDutyCheck);

  const userEmail = userProjectStroe(state => state.userEmail);
  const userAddress = userProjectStroe(state => state.userAddress);
  const userDutyType = userProjectStroe(state => state.userDutyType);
  const userDutyName = userProjectStroe(state => state.userDutyName);
  const userSSN = userProjectStroe(state => state.userSSN);
  const userBusinessName = userProjectStroe(state => state.userBusinessName);
  const userBPNumber = userProjectStroe(state => state.userBusinessPersonNumber);

  const checkData = () => {
    // 여기에 조건확인하는거 쓰기
    const eMailCheck = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i.test(userEmail);
    const NameCheck = /^(?:[가-힣]{2,4}|[a-zA-Z]{2,10}\s[a-zA-Z]{2,10})$/.test(userDutyName);
    const SSNcheck = userSSN.length === 13 ? true : false;

    // 이메일 양식 확인
    if (!eMailCheck) {
      alert('이메일 형식이 틀렸습니다.');
      return;
    }

    // 개인, 성명확인
    else if (userDutyType && !NameCheck) {
      alert('성명(개인)을 다시 입력해주세요.');
      return;
    }

    // 개인, 주민등록번호 확인
    else if (userDutyType && !SSNcheck) {
      alert('주민등록번호를 다시 입력해주세요.');
      return;
    }

    // 사업자, 상호명(사업자) 확인
    else if (!userDutyType && userBusinessName.length < 1) {
      alert('상호명(사업자)를 입력해주세요.');
      return;
    }

    // 사업자, 사업자 번호 확인
    else if (!userDutyType && userBPNumber.length != 10) {
      alert('사업자번호를 다시 입력해주세요.');
      return;
    }

    // 주소 길이 확인
    else if (userAddress.length < 1) {
      alert('주소를 입력해주세요.');
      return;
    }

    setDutyCheck(true);
    onClick();
  };

  const innerPadding = `p-[24px] mobile:p-[40px] tablet:p-[40px] laptop:p-[43px]`;
  const innerWidth = `w-[300px] mobile:w-[450px]
      tablet:w-[684px] laptop:w-[684px]`;
  const innerHeight = `min-h-[361px] mobile:min-h-[596px] tablet:min-h-[691px]
      laptop:min-h-[691px]`;

  return (
    <>
      <div className={`${innerPadding} ${innerWidth} ${innerHeight} border rounded-2xl`}>
        <div className="flex flex-col gap-3 mobile:gap-5 tablet:gap-9 ">
          <p className="semibold-14">발행종류</p>

          {/* 개인/법인 선택 */}
          <UserTypeSclect type={type} personal={personal} corporate={corporate} DutyTypeCheck={DutyTypeCheck} />

          {/* 이메일 */}
          <InputEmail />

          {/* 내용 영역 */}
          <div className="pt-5">{type === personal ? <RegisterPersonalTaxModal /> : <RegisterCorpTaxModal />}</div>

          {/* 주소 */}
          <InputAddress />

          {/* 취소, 등록 버튼 */}
          <div className="flex gap-2.5 pt-2.5 laptop:pt-11">
            <ChangeButton
              label="취소"
              onClick={handleCancel}
              disableHover
              className="w-full h-[33px] p-2 bg-white border medium-14 rounded-xs flex items-center justify-center "
            />
            <ChangeButtonFill
              label="등록완료"
              onClick={checkData}
              className="w-full h-[33px] p-2 bg-primary-800 text-white medium-14 rounded-xs flex items-center justify-center"
            />
          </div>
        </div>
      </div>
    </>
  );
}

// 개인/법인 선택
function UserTypeSclect({ type, personal, corporate, DutyTypeCheck }: UserTypeSclectProps) {
  return (
    <div className="flex flex-row gap-[50px]">
      <button onClick={() => DutyTypeCheck(personal)}>
        {type === personal ? <CheckCircle prop="개인" /> : <UnCheckCircle prop="개인" />}
      </button>
      <button onClick={() => DutyTypeCheck(corporate)}>
        {type === corporate ? <CheckCircle prop="사업자" /> : <UnCheckCircle prop="사업자" />}
      </button>
    </div>
  );
}

// 이메일
function InputEmail() {
  const LastEmail = userProjectStroe(state => state.userEmail);
  const SaveEmail = userProjectStroe(state => state.setEmail);

  const [email, setEmail] = useState(LastEmail);
  const [err, setErr] = useState(false);

  const InputEmailSave = (e: string) => {
    setEmail(e);
    SaveEmail(e);
  };

  const InputEmailCheck = (e: string) => {
    const check = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i.test(e);

    if (!check) {
      setErr(true);
      return;
    }

    setErr(false);
  };

  return (
    <>
      <div className="">
        <p className="semibold-14 pb-2">이메일</p>
        <input
          type="tel"
          value={email}
          onChange={e => InputEmailSave(e.target.value)}
          onBlur={e => InputEmailCheck(e.target.value)}
          placeholder="이메일을 입력해주세요"
          className="border rounded-xs normal-14 w-full h-[34px] p-2.5"
        />
        {err && <span className="text-error normal-12">이메일 형식이 틀렸습니다.</span>}
      </div>
    </>
  );
}

// 창작자 세금 계산서 발행 모달 (개인)
function RegisterPersonalTaxModal() {
  // 성명(개인)
  const LastDutyName = userProjectStroe(state => state.userDutyName);
  const saveDutyName = userProjectStroe(state => state.setDutyName);
  const [nameErr, setNameErr] = useState(false);
  const [dutyName, setDutyName] = useState(LastDutyName);

  // 주민등록번호
  const LastSSN = userProjectStroe(state => state.userSSN);
  const saveSSN = userProjectStroe(state => state.setSSN);
  const [SSN, setSSN] = useState(LastSSN);
  const [errSSN, setErrSSN] = useState(false);

  // 성명 입력 저장
  const InputInputDutyNameSave = (d: string) => {
    setDutyName(d);
    saveDutyName(d);
  };

  // 성명 체크
  const InputDutyNameCheck = (d: string) => {
    const check = /^(?:[가-힣]{2,4}|[a-zA-Z]{2,10}\s[a-zA-Z]{2,10})$/.test(d);

    if (!check) {
      setNameErr(true);
      return;
    }

    setNameErr(false);
  };

  // 주민등록 번호 문자 입력 체크
  const InputSSNString = (s: string) => {
    const onlyNumbers = s.replace(/\D/g, '');
    const trimmed = onlyNumbers.slice(0, 13);

    if (onlyNumbers.length > 13 || /[^0-9\-]/.test(s)) {
      setErrSSN(true);
      return;
    }

    // 숫자랑 -(하이폰) 있는거
    const stringNumber = trimmed.replace(/^(\d{6})(\d?)/, (match, p1, p2) => {
      return p2 ? `${p1}-${p2}` : p1;
    });

    setErrSSN(false);
    setSSN(stringNumber);
    saveSSN(onlyNumbers);
  };

  return (
    <div className="flex flex-col gap-4 laptop:gap-[30px]">
      {/* 성명 */}
      <div className="">
        <p className="semibold-14 pb-2">성명(개인)</p>
        <input
          type="text"
          value={dutyName}
          onChange={d => InputInputDutyNameSave(d.target.value)}
          onBlur={d => InputDutyNameCheck(d.target.value)}
          placeholder="케로로"
          className="border bg-white rounded-xs normal-14 w-full h-[34px] p-2.5"
        />
        {nameErr && <span className="text-error normal-12">이름을 다시 입력해 주세요.</span>}{' '}
      </div>

      {/* 주민등록번호 */}
      <div>
        <p className="semibold-14 pb-2">주민등록번호</p>
        <input
          type="text"
          value={SSN}
          onChange={s => InputSSNString(s.target.value)}
          onBlur={s => InputSSNString(s.target.value)}
          placeholder="250808-250808"
          className="border bg-white rounded-xs normal-14 w-full h-[34px] p-2.5"
        />
        {errSSN && <span className="text-error normal-12">양식에 맞게 입력해 주세요.</span>}
      </div>
    </div>
  );
}

// 창작자 세금 계산서 발행 모달 (사업자)
function RegisterCorpTaxModal() {
  // 상호면 부분
  const LastBusinessName = userProjectStroe(state => state.userBusinessName);
  const setBusinessPersonName = userProjectStroe(state => state.setBusinessName);
  const [businessName, setBusinessName] = useState(LastBusinessName);
  const [errbusinessName, setErrbusinessName] = useState(false);

  // 사업자번호 부분
  const LastBusinessPersonNumber = userProjectStroe(state => state.userBusinessPersonNumber);
  const setBusinessPersonNumber = userProjectStroe(state => state.setBusinessPersonNumber);
  const [BPNumber, setBPNumer] = useState(LastBusinessPersonNumber);
  const [errBPNumber, errSetBPNumber] = useState(false);
  const [errBPText, setErrBPText] = useState('');

  // 상호명 저장 함수
  const businessNameSave = (e: string) => {
    setBusinessName(e);
    setBusinessPersonName(e);
  };

  // 상호명 체크 함수
  const businessNameCheck = (e: string) => {
    if (e.length === 0) {
      setErrbusinessName(true);
      return;
    }
    setErrbusinessName(false);
  };

  // 사업자 번호 저장 및 확인
  const BPNumberSave = (e: string) => {
    const check = /[^0-9]/.test(e);

    if (check) {
      errSetBPNumber(true);
      setErrBPText('숫자만 입력해주세요.');
      return;
    } else if (e.length > 10) {
      errSetBPNumber(true);
      setErrBPText('사업자 번호는 10자리입니다.');
      return;
    }

    errSetBPNumber(false);

    setBPNumer(e);
    setBusinessPersonNumber(e);
  };

  return (
    <div className="flex flex-col gap-4 laptop:gap-[30px]">
      {/* 상호명 */}
      <div className="">
        <p className="semibold-14 pb-2">상호명(사업자)</p>
        <input
          type="text"
          value={businessName}
          onBlur={e => businessNameCheck(e.target.value)}
          onChange={e => businessNameSave(e.target.value)}
          placeholder="케로로 주식"
          className="border bg-white rounded-xs normal-14 w-full h-[34px] p-2.5"
        />
        {errbusinessName && <span className="text-error normal-12">상호명을 입력해주세요.</span>}
      </div>

      {/* 사업자번호 */}
      <div>
        <p className="semibold-14 pb-2">사업자번호</p>
        <input
          type="text"
          value={BPNumber}
          onChange={e => BPNumberSave(e.target.value)}
          onBlur={e => BPNumberSave(e.target.value)}
          placeholder="25080808"
          className="border bg-white rounded-xs normal-14 w-full h-[34px] p-2.5"
        />
        {errBPNumber && <span className="text-error normal-12">{errBPText}</span>}
      </div>
    </div>
  );
}

// 주소
function InputAddress() {
  const LastAddress = userProjectStroe(state => state.userAddress);
  const saveAddress = userProjectStroe(state => state.setAddress);

  const [address, setAddress] = useState(LastAddress);
  const [errAddress, setErrAddress] = useState(false);

  const addressSave = (e: string) => {
    setAddress(e);
    saveAddress(e);
  };

  const addressCheck = (e: string) => {
    if (e.length == 0) {
      setErrAddress(true);
      return;
    }
    setErrAddress(false);
  };

  return (
    <div>
      <p className="semibold-14 pb-2">주소</p>
      <input
        type="tel"
        value={address}
        onChange={e => addressSave(e.target.value)}
        onBlur={e => addressCheck(e.target.value)}
        placeholder="주소를 입력해주세요"
        className="border rounded-xs normal-14 w-full h-[34px] p-2.5"
      />
      {errAddress && <span className="text-error normal-12">주소를 입력해 주세요.</span>}
    </div>
  );
}
