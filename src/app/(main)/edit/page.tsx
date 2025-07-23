import ProfileImg from '@assets/icons/profile.svg';

/* 확인 버튼 타입 */
type SignUpBtnProps = {
  label: string;
  onClick?: () => void;
};

/* 입력 필드 타입 */
interface InputFiledProps {
  title: string;
  placeholderText: string;
  checkButtonText?: string[];
  errText?: string;
}

export default function EditProfile() {
  const inner = 'p-[25px] ' + 'tablet:px-[40px] py-[24px] ' + 'laptop:px-[352px] laptop:py-[83px]';
  const titleSize = 'normal-18 ' + 'min-[768px]:text-[20px] ' + 'min-[1440px]:text-[24px]';
  const profileGap = 'gap-[12px] ' + 'tablet:gap-[19px]';
  const profileChangeText = 'normal-14 ';

  return (
    <div className={inner}>
      <div className="flex flex-col gap-[20px]">
        {/* 타이틀 */}
        <span className={'font-[800] ' + titleSize}>프로필 편집</span>

        {/* 프로필 */}
        <div className="flex justify-between border-b pt-[26px] pb-[18px]">
          <div className={'flex items-center ' + profileGap}>
            <ProfileImg width={28} heigth={28} />
            <span className={profileChangeText}>프로필</span>
          </div>
          <SignUpProfileEditButton label="사진 변경" />
        </div>

        {/* 닉네임 */}
        <InputFiled
          title={'닉네임'}
          placeholderText={'닉네임 입력'}
          errText={'*닉네임을 변경하면 일주일 동안 변경할실 수 없습니다.'}
          checkButtonText={['중복 확인', '변경']}
        />

        {/* 현재 비밀번호 입력 */}
        <InputFiled
          title={'본인 확인을 위해 현재 비밀번호를 입력해주세요'}
          placeholderText={'현재 비밀번호 입력'}
          errText={'*비밀번호를 변경하면 일주일 동안 변경할실 수 없습니다.'}
        />

        {/* 변경 비밀번호 입력 */}
        <InputFiled title={'변경할 비밀번호를 입력해주세요'} placeholderText={'변경할 비밀번호 입력'} />

        {/* 변경 비밀번호 확인 */}
        <InputFiled
          title={'확인을 위해 비밀번호를 한번 더 입력해주세요'}
          placeholderText={'비밀번호 확인'}
          checkButtonText={['변경']}
        />

        {/* 기본 배송지 입력 */}
        <InputFiled title={'기본 배송지'} placeholderText={'주소 입력'} checkButtonText={['등록']} />

        {/* 연락처 */}
        <InputFiled title={'연락처'} placeholderText={'전화번호 입력'} checkButtonText={['등록']} />
      </div>
    </div>
  );
}

/* 입력 필드 */
function InputFiled({ title, placeholderText, checkButtonText = [], errText }: InputFiledProps) {
  const titleTextSize = 'text-[14px]';
  const subTextSize = 'text-[12px]';

  const checkButton = checkButtonText?.map(text => <SignUpProfileEditButton key={text} label={text} />);

  /* 버튼이 0 ~ 1개 일때*/
  let inputMaxWidth = '1fr';
  let inputGap = 8;

  if (checkButtonText.length < 2) {
    inputMaxWidth = '80%';
    inputGap = 18;
  }

  return (
    <div className={'flex flex-col gap-[3px] normal-14'}>
      <span className={'font-[500] ' + titleTextSize}>{title}</span>
      <div className={`grid grid-cols-[${inputMaxWidth}_auto] gap-[${inputGap}px]`}>
        <input
          type="text"
          className={'px-[13px] py-[7px] font-[500] bg-primary-50 rounded-[5px] ' + subTextSize}
          placeholder={placeholderText}
        />

        <div className={`flex gap-[6px] font-[500] ` + titleTextSize}>{checkButton}</div>
      </div>
      <span className={'text-error font-[400] ' + subTextSize}>{errText}</span>
    </div>
  );
}

/* 확인 버튼 */
function SignUpProfileEditButton({ label, onClick }: SignUpBtnProps) {
  const padding = 'px-[12px] py-[10px] ' + 'tablet:px-[16px] tablet:py-[13px]';
  const textSize = 'text-[14px] ' + 'tablet:text-[16px]';

  return (
    <button
      type="button"
      onClick={onClick}
      className={
        'flex whitespace-nowrap items-center justify-center bg-primary-800 text-white rounded-lg hover:text-white medium-12 cursor-pointer ' +
        padding +
        textSize
      }
    >
      {label}
    </button>
  );
}
