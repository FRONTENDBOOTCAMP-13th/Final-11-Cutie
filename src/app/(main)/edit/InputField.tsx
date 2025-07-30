import { SignUpProfileEditButton } from '@app/(main)/edit/SignUpProfileEditButton';

/* 입력 필드 타입 */
interface InputFieldProps {
  title: string;
  placeholderText: string;
  checkButtonText?: string[];
  errText?: string;
  name?: string;
  type?: string;
  onCheck?: () => void;
  checkResult?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export function InputField({
  title,
  placeholderText,
  checkButtonText = [],
  errText,
  name,
  onCheck,
  checkResult,
  onChange,
  type,
}: InputFieldProps) {
  const titleTextSize = 'text-[14px]';
  const subTextSize = 'text-[12px]';
  const checkButton = checkButtonText?.map(text => (
    <SignUpProfileEditButton key={text} label={text} onClick={onCheck} />
  ));

  return (
    <div className={'flex flex-col gap-[3px] normal-14 max-[480px]:px-[10px]'}>
      <span className={'font-[500] ' + titleTextSize}>{title}</span>
      <div
        className={`grid grid-cols-[80%_auto] gap-[10px] tablet:gap-[28px] max-[480px]:grid-cols-[minmax(0,1fr)_auto]`}
      >
        <input
          type={type || 'text'}
          className={
            'px-[13px] py-[7px] font-[500] bg-primary-50 rounded-[5px] ' + subTextSize + 'placeholder-gray-400'
          }
          placeholder={placeholderText}
          value={name}
          onChange={e => onChange?.(e)}
        />
        <div className={`flex gap-[6px] font-[500] tablet:gap-[12px] items-center justify-end`}>
          {checkButtonText.length > 0 && checkButton}
        </div>
      </div>
      {checkResult && <span className={'text-green-600 font-[400] ' + subTextSize}>{checkResult}</span>}
      <span className={'text-error font-[400] ' + subTextSize}>{errText}</span>
    </div>
  );
}
