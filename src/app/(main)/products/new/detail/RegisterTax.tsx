'use client';

import { ChangeButton, ChangeButtonFill } from '@components/button/SquareBtn';
import { CheckCircle, UnCheckCircle } from '@components/checkbox/CircleCheckbox';
import { useState } from 'react';

interface TaxModal {
  onClick: () => void;
}

// 창작자 세금 계산서 발행 모달
export default function RegisterTax({ onClick }: TaxModal) {
  const personal = '개인';
  const corporate = '사업자';
  const [type, setType] = useState(personal);

  const innerPadding = `p-[24px] mobile:p-[40px] tablet:p-[40px] laptop:p-[43px]`;
  const innerWidth = `w-[300px] mobile:w-[450px]
      tablet:w-[684px] laptop:w-[684px]`;
  const innerHeight = `min-h-[361px] mobile:min-h-[596px] tablet:min-h-[691px]
      laptop:min-h-[691px]`;

  const handleCancel = () => {
    onClick();
  };
  return (
    <>
      <div className={`${innerPadding} ${innerWidth} ${innerHeight} border rounded-2xl`}>
        <div className="flex flex-col gap-3 laptop:gap-[27px]">
          <p className="semibold-14">발행종류</p>

          {/* 개인/법인 선택 */}
          <div className="flex flex-row gap-[50px]">
            <button onClick={() => setType(personal)}>
              {type === personal ? <CheckCircle prop="개인" /> : <UnCheckCircle prop="개인" />}
            </button>
            <button onClick={() => setType(corporate)}>
              {type === corporate ? <CheckCircle prop="사업자" /> : <UnCheckCircle prop="사업자" />}
            </button>
          </div>

          {/* 이메일 */}
          <div className="">
            <p className="semibold-14 pb-2">이메일</p>
            <input
              type="tel"
              placeholder="이메일을 입력해주세요"
              className="border rounded-xs normal-14 w-full h-[34px] p-2.5"
            />
          </div>

          {/* 내용 영역 */}
          <div className="pt-5">{type === personal ? <RegisterPersonalTaxModal /> : <RegisterCorpTaxModal />}</div>

          {/* 주소 */}
          <div className="">
            <p className="semibold-14 pb-2">주소</p>
            <input
              type="tel"
              placeholder="주소를 입력해주세요"
              className="border rounded-xs normal-14 w-full h-[34px] p-2.5"
            />
          </div>

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
              className="w-full h-[33px] p-2 bg-primary-800 text-white medium-14 rounded-xs flex items-center justify-center"
            />
          </div>
        </div>
      </div>
    </>
  );
}

// 창작자 세금 계산서 발행 모달 (개인)
function RegisterPersonalTaxModal() {
  return (
    <div className="flex flex-col gap-4 laptop:gap-[30px]">
      {/* 성명 */}
      <div className="">
        <p className="semibold-14 pb-2">성명(개인)</p>
        <input type="text" placeholder="케로로" className="bg-primary-50 rounded-xs normal-14 w-full h-[34px] p-2.5" />
      </div>

      {/* 주민등록번호 */}
      <div className="">
        <p className="semibold-14 pb-2">주민등록번호</p>
        <input
          type="text"
          placeholder="250808-250808"
          className="bg-primary-50 rounded-xs normal-14 w-full h-[34px] p-2.5"
        />
      </div>
    </div>
  );
}

// 창작자 세금 계산서 발행 모달 (사업자)
function RegisterCorpTaxModal() {
  return (
    <div className="flex flex-col gap-4 laptop:gap-[30px]">
      {/* 상호명 */}
      <div className="">
        <p className="semibold-14 pb-2">상호명(사업자)</p>
        <input type="text" placeholder="케로로" className="bg-primary-50 rounded-xs normal-14 w-full h-[34px] p-2.5" />
      </div>

      {/* 사업자번호 */}
      <div className="">
        <p className="semibold-14 pb-2">사업자번호</p>
        <input
          type="text"
          placeholder="25080808"
          className="bg-primary-50 rounded-xs normal-14 w-full h-[34px] p-2.5"
        />
      </div>
    </div>
  );
}
