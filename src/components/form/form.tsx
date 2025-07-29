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
    <div className={`flex flex-col gap-[4px] gap-[15px] text-[11px] ${className || ''} `}>
      <StarTitle
        title={title}
        subTitle={subtitle}
        className="max-[768px]:flex-col max-[768px]:items-start max-[480px]:gap-[4px] laptop:flex-col laptop:items-start"
      />

      <InputIdResponsive placeholder={placeholder} />
    </div>
  );
}
