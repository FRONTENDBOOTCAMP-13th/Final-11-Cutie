'use client';

import { CheckCircle, UnCheckCircle } from '@components/checkbox/CircleCheckbox';
import { useState } from 'react';

interface BankModal {
  onClick?: () => void;
}

// 창작자 계좌 등록 (전체)
export default function RegisterBank({ onClick }: BankModal) {
  const personal = '개인';
  const corporate = '사업자';
  const [type, setType] = useState(personal);

  const innerPadding = `p-[24px] mobile:p-[40px] tablet:p-[40px] laptop:p-[43px]`;
  const innerWidth = `w-[300px] mobile:w-[450px] tablet:w-[684px] laptop:w-[684px]`;
  const innerHeight = `min-h-[361px] mobile:min-h-[596px] tablet:min-h-[691px] laptop:min-h-[691px]`;

  return (
    <div className={`${innerPadding} ${innerWidth} ${innerHeight} border rounded-2xl`}>
      <div className="flex flex-col gap-3 laptop:gap-[27px]">
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
        <div className="pt-5">
          {type === personal ? (
            <RegisterPersonalBankModal onClick={onClick!} />
          ) : (
            <RegisterCorpBankModal onClick={onClick!} />
          )}
        </div>
      </div>
    </div>
  );
}

// 창작자 계좌 등록 모달 (개인)
function RegisterPersonalBankModal({ onClick }: { onClick: () => void }) {
  return (
    <div className="flex flex-col gap-3 laptop:gap-[27px]">
      {/* 생년월일 */}
      <div>
        <p className="semibold-14 pb-2">예금주 생년월일</p>
        <input type="tel" placeholder="250808" className="border rounded-xs normal-14 w-full h-[34px] p-2.5" />
      </div>

      <CommonBankFields />

      {/* 버튼 */}
      <div className="flex gap-2.5 pt-2.5 laptop:pt-11">
        <button
          onClick={onClick}
          className="w-full h-[33px] p-2 bg-white border medium-14 rounded-xs flex items-center justify-center"
        >
          취소
        </button>
        <button className="w-full h-[33px] p-2 bg-primary-800 text-white medium-14 rounded-xs flex items-center justify-center">
          등록완료
        </button>
      </div>
    </div>
  );
}

// 창작자 계좌 등록 모달 (법인)
function RegisterCorpBankModal({ onClick }: { onClick: () => void }) {
  return (
    <div className="flex flex-col gap-3 laptop:gap-[27px]">
      {/* 사업자 번호 */}
      <div>
        <p className="semibold-14 pb-2">사업자 번호</p>
        <input type="tel" placeholder="예)2423424" className="border rounded-xs normal-14 w-full h-[34px] p-2.5" />
      </div>

      <CommonBankFields />

      {/* 버튼 */}
      <div className="flex gap-2.5 pt-2.5 laptop:pt-11">
        <button
          onClick={onClick}
          className="w-full h-[33px] p-2 bg-white border medium-14 rounded-xs flex items-center justify-center"
        >
          취소
        </button>
        <button className="w-full h-[33px] p-2 bg-primary-800 text-white medium-14 rounded-xs flex items-center justify-center">
          등록완료
        </button>
      </div>
    </div>
  );
}

// 창작자 계좌 등록 모달 공통 필드 (은행, 예금주명, 계좌번호)
function CommonBankFields() {
  return (
    <>
      {/* 거래 은행 */}
      <div className="flex flex-col gap-2">
        <p className="semibold-14">거래 은행</p>
        <select
          name="bank"
          id="bank"
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
        <p className="normal-14 text-font-400">케이뱅크와 카카오뱅크는 등록이 불가능합니다.</p>
      </div>

      {/* 예금주명 */}
      <div>
        <p className="semibold-14 pb-2">예금주명</p>
        <input type="text" placeholder="케로로" className="bg-primary-50 rounded-xs normal-14 w-full h-[34px] p-2.5" />
      </div>

      {/* 계좌번호 */}
      <div>
        <p className="semibold-14 pb-2">계좌번호</p>
        <input
          type="tel"
          placeholder="숫자로만 입력해주세요"
          className="border rounded-xs normal-14 w-full h-[34px] p-2.5"
        />
      </div>
    </>
  );
}
