/* 확인 버튼 타입 */
type SignUpBtnProps = {
  label: string;
  onClick?: () => void;
};

export function SignUpProfileEditButton({ label, onClick }: SignUpBtnProps) {
  const padding = 'px-[12px] py-[10px] tablet:px-[16px] tablet:py-[13px]';
  const textSize = 'text-[14px] tablet:text-[16px]';

  return (
    <button
      type="button"
      onClick={onClick}
      className={`flex whitespace-nowrap items-center justify-center bg-primary-800 text-white rounded-lg hover:text-white medium-12 cursor-pointer ${padding} ${textSize}`}
    >
      {label}
    </button>
  );
}
