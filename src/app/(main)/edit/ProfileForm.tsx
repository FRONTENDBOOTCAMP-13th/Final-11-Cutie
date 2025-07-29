'use client';
import { useState } from 'react';
import ProfileImg from '@assets/icons/profile.svg';
import { checkName } from '@data/functions/user';
import { updateUser } from '@data/actions/user';
import useUserStore from 'zustand/userStore';

/* 확인 버튼 타입 */
type SignUpBtnProps = {
  label: string;
  onClick?: () => void;
};

/* 입력 필드 타입 */
interface InputFieldProps {
  title: string;
  placeholderText: string;
  checkButtonText?: string[];
  errText?: string;
  name?: string;
  onCheck?: () => void;
  checkResult?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function ProfileTotal() {
  const inner =
    'p-[25px] ' +
    'max-[480px]:px-[5px] ' +
    'tablet:px-[40px] py-[24px] ' +
    'laptop:px-[352px] laptop:py-[83px] laptop:flex laptop:justify-center';
  const titleSize = 'normal-18 ' + 'min-[768px]:text-[20px] ' + 'min-[1440px]:text-[24px]';
  const profileGap = 'gap-[12px] ' + 'tablet:gap-[19px]';
  const profileChangeText = 'normal-14 ';

  //상태 정의
  const [nickname, setNickname] = useState('');
  const [nicknameCheckResult, setNicknameCheckResult] = useState('');
  const [isNicknameAvailable, setIsNicknameAvailable] = useState(false);

  const handleCheckNickname = async () => {
    if (!nickname) return;

    const { user } = useUserStore.getState();

    // ✅ 현재 로그인된 사용자의 닉네임과 같으면 API 호출하지 않음
    if (user?.name === nickname) {
      setNicknameCheckResult('현재 사용 중인 닉네임입니다');
      setIsNicknameAvailable(false);
      return;
    }

    try {
      const res = await checkName(nickname);

      if (!res.ok) {
        setNicknameCheckResult('중복 확인 중 오류가 발생했습니다');
        setIsNicknameAvailable(false);
        return;
      }

      const isDuplicate = res.item?.isDuplicate;

      if (isDuplicate) {
        setNicknameCheckResult('이미 사용중인 닉네임입니다');
        setIsNicknameAvailable(false);
      } else {
        setNicknameCheckResult('사용 가능한 닉네임입니다');
        setIsNicknameAvailable(true);
      }
    } catch (e) {
      console.error('닉네임 중복 확인 중 오류:', e);
      setNicknameCheckResult('중복 확인 중 오류가 발생했습니다');
      setIsNicknameAvailable(false);
    }
  };

  const handleSaveNickname = async () => {
    const { user } = useUserStore.getState();

    if (!user || !user.token?.accessToken) {
      alert('로그인이 필요합니다.');
      return;
    }
    const accessToken = user.token.accessToken;

    const formData = new FormData();
    formData.set('name', nickname);

    const res = await updateUser(null, formData, user._id, accessToken);

    if (res.ok) {
      alert('닉네임이 저장되었습니다!');
      setNicknameCheckResult(''); // 확인 메시지 리셋
      setIsNicknameAvailable(false);
      // 필요하면 userStore도 업데이트 가능
      // useUserStore.getState().setUser({ ...user, name: nickname });
    } else {
      alert('닉네임 저장 실패: ' + res.message);
    }
  };

  return (
    <div className={inner}>
      <div className="flex flex-col min-w-[320px] gap-[20px] laptop:w-[600px]">
        {/* 타이틀 */}
        <span className={'font-[800] ' + titleSize}>프로필 편집</span>

        {/* 프로필 */}
        <div className="flex justify-between border-b pt-[26px] pb-[18px] max-[480px]:px-[10px]">
          <div className={'flex items-center ' + profileGap}>
            <ProfileImg width={28} heigth={28} />
            <span className={profileChangeText}>프로필</span>
          </div>
          <SignUpProfileEditButton label="사진 변경" />
        </div>

        {/* 닉네임 */}
        <InputField
          title={'닉네임'}
          placeholderText={'닉네임 입력'}
          errText={'*닉네임을 변경하면 일주일 동안 변경하실 수 없습니다.'}
          checkButtonText={['중복 확인']}
          name={nickname}
          onCheck={handleCheckNickname}
          checkResult={nicknameCheckResult} //'중복확인중 오류가 발생했습니다'
          onChange={e => setNickname(e.target.value)}
        />
        {isNicknameAvailable && <SignUpProfileEditButton label="저장" onClick={handleSaveNickname} />}

        {/* 현재 비밀번호 입력 */}
        <InputField
          title={'본인 확인을 위해 현재 비밀번호를 입력해주세요'}
          placeholderText={'현재 비밀번호 입력'}
          errText={'*비밀번호를 변경하면 일주일 동안 변경하실 수 없습니다.'}
        />

        {/* 변경 비밀번호 입력 */}
        <InputField title={'변경할 비밀번호를 입력해주세요'} placeholderText={'변경할 비밀번호 입력'} />

        {/* 변경 비밀번호 확인 */}
        <InputField
          title={'확인을 위해 비밀번호를 한번 더 입력해주세요'}
          placeholderText={'비밀번호 확인'}
          checkButtonText={['변경']}
        />

        {/* 기본 배송지 입력 */}
        <InputField title={'기본 배송지'} placeholderText={'주소 입력'} checkButtonText={['등록']} />

        {/* 연락처 */}
        <InputField title={'연락처'} placeholderText={'전화번호 입력'} checkButtonText={['등록']} />
      </div>
    </div>
  );
}

/* 입력 필드 */
export function InputField({
  title,
  placeholderText,
  checkButtonText = [],
  errText,
  name,
  onCheck,
  checkResult,
  onChange,
}: InputFieldProps) {
  const titleTextSize = 'text-[14px]';
  const subTextSize = 'text-[12px]';

  const checkButton = checkButtonText?.map(text => (
    <SignUpProfileEditButton key={text} label={text} onClick={onCheck} />
  ));

  /* 버튼이 0 ~ 1개 일때*/
  let inputMaxWidth = '1fr';
  if (checkButtonText.length < 2) {
    inputMaxWidth = '80%';
  }

  return (
    <div className={'flex flex-col gap-[3px] normal-14 max-[480px]:px-[10px]'}>
      <span className={'font-[500] ' + titleTextSize}>{title}</span>
      <div
        className={`grid grid-cols-[${inputMaxWidth}_auto] gap-[10px] tablet:gap-[28px] max-[480px]:grid-cols-[minmax(0,1fr)_auto]`}
      >
        <input
          type="text"
          className={'px-[13px] py-[7px] font-[500] bg-primary-50 rounded-[5px] ' + subTextSize}
          placeholder={placeholderText}
          value={name}
          onChange={e => onChange?.(e)}
        />
        <div className={`flex gap-[6px] font-[500] tablet:gap-[12px] ` + titleTextSize}>{checkButton}</div>
      </div>
      {checkResult && <span className={'text-green-600 font-[400] ' + subTextSize}>{checkResult}</span>}
      <span className={'text-error font-[400] ' + subTextSize}>{errText}</span>
    </div>
  );
}

/* 확인 버튼 */
export function SignUpProfileEditButton({ label, onClick }: SignUpBtnProps) {
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
