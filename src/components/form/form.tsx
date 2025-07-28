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
    <div className={`flex flex-col gap-[4px] mobile:gap-[14px] text-[11px] ${className || ''} `}>
      <StarTitle
        title={title}
        subTitle={subtitle}
        className="max-[480px]:flex-col max-[480px]:justify-center max-[480px]:items-start max-[480px]:gap-[4px]"
      />

      <InputIdResponsive placeholder={placeholder} />
    </div>
  );
}
