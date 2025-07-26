import RegisterForm from '@components/product/ProductCreatorInfo';

/* 본인 인증, 입금 계좌,세금 계산서 발행 form */

interface isAuthDoneProps {
  title: string;
  subDesc: string;
  type: 'auth' | 'account' | 'tax';
}

export function IsAuthDone({ title, subDesc, type }: isAuthDoneProps) {
  return (
    <div className="flex flex-col gap-[11px]">
      <span className="flex gap-[11px] items-center">
        <span className="normal-14 font-[700]">
          {title}
          <span className="text-error">*</span>
        </span>
        <span className="normal-10 font-[400] text-[#686871]">{subDesc}</span>
      </span>
      {/* 큰화면 */}
      <RegisterForm type={type} />
    </div>
  );
}

import { InputIdResponsive } from '@components/common/Input';

interface InputBoxProps {
  placeholder: string;
  title: string;
  subtitle?: string;
  className?: string;
}

/* 검색 태그 */
export function InputBox({ placeholder, title, subtitle, className }: InputBoxProps) {
  return (
    <div className={`flex flex-col gap-[15px] text-[11px]  ${className || ''} `}>
      <span className="flex gap-[8px] items-center">
        <span className="normal-13 font-[700]">
          {title}
          <span className="text-error">*</span>
        </span>
        <span className="normal-10 font-[400] text-[#686871]">{subtitle}</span>
      </span>

      <InputIdResponsive placeholder={placeholder} />
    </div>
  );
}
