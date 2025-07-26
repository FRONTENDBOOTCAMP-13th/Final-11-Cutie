import { StarTitle } from '@components/common/etc';
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
      <StarTitle title={title} subTitle={subtitle} />

      <InputIdResponsive placeholder={placeholder} />
    </div>
  );
}
