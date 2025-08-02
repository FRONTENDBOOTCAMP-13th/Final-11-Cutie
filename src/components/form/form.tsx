import { StarTitle } from '@components/common/etc';
import { InputIdResponsive } from '@components/common/Input';

interface InputBoxProps {
  placeholder: string;
  title: string;
  subtitle?: string;
  className?: string;
  setData?: (data: string) => void; // 데이터 저장 함수
  value?: string; // input에 표시할 값 (수정 페이지 때문에 추가)
  
}

/* 검색 태그 */
export function InputBox({ placeholder, title, subtitle, className, setData, value }: InputBoxProps) {
  return (
    <div className={`flex flex-col gap-[15px] text-[11px] ${className || ''} `}>
      <StarTitle
        title={title}
        subTitle={subtitle}
        className="max-[768px]:flex-col max-[768px]:items-start max-[480px]:gap-[4px] laptop:flex-col laptop:items-start"
      />

      <InputIdResponsive placeholder={placeholder} setData={setData} value={value} />
    </div>
  );
}
