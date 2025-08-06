'use client';

import { Search } from 'lucide-react';
import { useState } from 'react';

type inputboxProps = {
  placeholder: string;
  type?: string;
  required?: boolean;
  name: string;
  disabled?: boolean;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

type inputidProps = {
  name: string;
  placeholder: string;
  type: string;
  value?: string;
  required?: boolean;
  className: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  maxLength?: number;
};

// 아이디 입력(기본)
// validation 추가
export function InputIdDefault({ placeholder, type, required, name, disabled, value, onChange }: inputboxProps) {
  const [error, setError] = useState('');

  return (
    <div className="flex flex-col gap-1">
      <input
        type={type}
        name={name}
        className={`bg-bg normal-14 text-font-900 w-full mobile:w-[441px] tablet:w-[554px] laptop:text-[16px] px-[15px] py-[19px] border-[1.5px] border-font-400 rounded-[8px]`}
        placeholder={placeholder}
        required={required}
        disabled={disabled}
        onInvalid={e => {
          e.preventDefault();
          if (required && !e.currentTarget.value) {
            setError('* 입력된 정보가 올바르지 않습니다!');
          }
        }}
        onInput={() => {
          if (error) setError('');
        }}
        value={value}
        onChange={onChange}
      />
      {error && <p className="normal-12 mobile:text-[14px] text-error">{error}</p>}
    </div>
  );
}

// 아이디 입력(길이조절용)
export function InputId({ placeholder, type, required, className, value, onChange, name, maxLength }: inputidProps) {
  const [error, setError] = useState('');

  return (
    <>
      <div className="flex flex-col gap-1 ">
        <input
          name={name}
          type={type}
          required={required}
          placeholder={placeholder}
          className={className}
          onInvalid={e => {
            e.preventDefault();
            if (required && !e.currentTarget.value) {
              setError('* 입력된 정보가 올바르지 않습니다!');
            }
          }}
          onInput={() => {
            if (error) setError('');
          }}
          onChange={onChange}
          value={value}
          maxLength={maxLength}
        />
        {error && <p className="normal-12 text-error mobile:text-[14px]">{error}</p>}
      </div>
    </>
  );
}

interface InputIdResponsiveProps {
  placeholder: string;
  setData?: (content: string) => void; // 안에 문자열 저장 함수
  value?: string;
}

// 아이디 입력 반응형
export function InputIdResponsive({ placeholder, setData, value }: InputIdResponsiveProps) {
  /* 화면 별 폰트 사이즈 */
  const textSize_480 = 'max-[480px]:!text-[10px] '; // 0px ~ 479px 까지 적용
  const textSize_768 = 'mobile:!text-[11px] '; // 480px ~ 767px 까지 적용
  const textSize_1280 = 'tablet:!text-[12px] '; // 768px ~ 1279px 까지 적용
  const textSize_max = 'laptop:!text-[14px] '; // 1280px ~ 에 적용

  return (
    <input
      name="inputdata"
      type="text"
      onChange={e => {
        if (setData) {
          setData(e.target.value);
        }
      }}
      className={`h-[42px] px-[10px] py-[11px] border-[2px] border-font-400 rounded-[8px] max-[480px]:p-[9px] font-pretendard ${textSize_480} ${textSize_768} ${textSize_1280} ${textSize_max}`}
      placeholder={placeholder}
      value={value}
    />
  );
}

// 문의하기 검색 바 (반응형 o)
export function InputSearchQuestion() {
  return (
    <>
      <div className="flex bg-bg border border-font-400 justify-between items-center w-[245px] px-3 py-2.5 rounded-md mobile:w-[331px] mobile:px-5 tablet:py-3.5 tablet:w-[547px] tablet:px-6 laptop:w-[603px] laptop:py-[18px] laptop:rounded-lg">
        <p className="normal-14 text-font-400 tablet:text-[16px]">펀드림의 궁금한 점을 검색해 보세요.</p>
        <Search className="stroke-font-400 w-3.5 h-3.5 tablet:w-6 tablet:h-6" />
      </div>
    </>
  );
}

export function ProductSummaryInput() {
  const [summary, setSummary] = useState('');

  return (
    <div className="mt-[42px] w-full medium-14">
      <textarea
        id="project-summary"
        placeholder="프로젝트 요약을 입력해주세요."
        className="w-full h-[173px] laptop:h-[152px] p-[18px] border border-font-400 rounded-[4px] text-font-900 placeholder:#818189"
        maxLength={50}
        value={summary}
        onChange={e => setSummary(e.target.value)}
      />
      <p className="text-right text-secondary-200 medium-12 mt-[0px]">{summary.length}/50</p>
    </div>
  );
}
