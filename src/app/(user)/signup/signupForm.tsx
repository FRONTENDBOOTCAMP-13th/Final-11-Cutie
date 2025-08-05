'use client';

import { LoginButton } from '@components/button/SquareBtn';
import { ToggleSwitchBig } from '@components/common/etc';
import { InputId, InputIdDefault } from '@components/common/Input';
import { ReadTerms } from '@components/term/TermsBtn';
import { createUser } from '@data/actions/user';
import { checkName } from '@data/functions/user';
import { Check } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useActionState, useEffect, useState, useTransition } from 'react';
import { SignUpProfileEditButton } from '@app/(main)/edit/SignUpProfileEditButton';
import { TermsModal } from '@components/term/TermsModal';

export default function SignupForm() {
  const [state, formAction, isLoading] = useActionState(createUser, null);
  const [isPending, startTransition] = useTransition();

  // form states
  const [email, setEmail] = useState('');
  const [nickname, setNickname] = useState('');
  const [isSeller, setIsSeller] = useState(false);
  const [termsAgreed, setTermsAgreed] = useState(false);

  // modal state
  const [isTermsOpen, setIsTermsOpen] = useState(false);

  // nickname check states
  const [nicknameCheckResult, setNicknameCheckResult] = useState('');
  const [isNicknameAvailable, setIsNicknameAvailable] = useState(false);

  const router = useRouter();

  useEffect(() => {
    if (state?.ok) {
      alert('회원 가입이 완료되었습니다. 로그인 페이지로 이동합니다.');
      router.replace('/login');
    } else if (state?.ok === 0 && !state?.errors) {
      alert(state?.message);
    }
  }, [state, router]);

  // 닉네임 중복확인
  const handleCheckNickname = async (): Promise<boolean> => {
    const name = nickname.trim();
    if (!name) {
      setNicknameCheckResult('닉네임을 입력해주세요.');
      setIsNicknameAvailable(false);
      return false;
    }

    try {
      const res = await checkName(name);
      const isDuplicate = (res as { item?: { isDuplicate: boolean } }).item?.isDuplicate ?? false;

      if (isDuplicate) {
        setNicknameCheckResult('이미 사용중인 닉네임입니다');
        setIsNicknameAvailable(false);
        return false;
      } else {
        setNicknameCheckResult('사용 가능한 닉네임입니다');
        setIsNicknameAvailable(true);
        return true;
      }
    } catch {
      setNicknameCheckResult('닉네임이 중복되거나 오류가 발생했습니다.');
      setIsNicknameAvailable(false);
      return false;
    }
  };

  // 제출 가드: 기본 제출 막고, 통과 시에만 formAction 실행
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formEl = e.currentTarget;

    // 약관 동의 확인
    if (!termsAgreed) {
      alert('약관에 동의해야 회원가입이 가능합니다.');
      return;
    }

    // 닉네임 사용 가능 확인
    if (!isNicknameAvailable) {
      const ok = await handleCheckNickname();
      if (!ok) {
        alert('닉네임 중복확인을 완료해주세요.');
        return; // formAction 호출하지 않음
      }
    }

    const fd = new FormData(formEl);
    startTransition(() => {
      formAction(fd);
    });
  };

  // 닉네임 변경 시 상태 초기화
  const onChangeNickname = (val: string) => {
    setNickname(val);
    setIsNicknameAvailable(false);
    setNicknameCheckResult('');
  };

  return (
    <>
      {/* action={formAction} 제거: onSubmit만 사용 */}
      <form onSubmit={handleSubmit} className="flex flex-col gap-3 mt-[37px]">
        <div className="flex flex-col gap-4">
          {/* 닉네임 */}
          <div className="flex flex-col">
            <p className="semibold-14 tablet:text-[16px] mb-[6px]">닉네임</p>
            <div className="flex gap-2 items-start">
              <InputId
                name="name"
                placeholder="닉네임 입력"
                type="text"
                value={nickname}
                onChange={e => onChangeNickname(e.target.value)}
                className="bg-bg normal-14 text-font-900 mobile:w-[367px] tablet:w-[480px] laptop:text-[16px] px-[15px] py-[19px] border-[1.5px] border-font-400 rounded-[8px]"
                required
              />
              {/* 내부가 <button>이면 반드시 type="button"으로 렌더되도록 */}
              <div className="h-[50px] py-[8px]">
                <SignUpProfileEditButton label="중복확인" onClick={handleCheckNickname} />
              </div>
            </div>
            {nicknameCheckResult && (
              <span className={`mt-2 normal-12 ${isNicknameAvailable ? 'text-primary-800' : 'text-error'}`}>
                {nicknameCheckResult}
              </span>
            )}
          </div>

          {/* 이메일 */}
          <div className="flex flex-col">
            <p className="semibold-14 tablet:text-[16px] mb-[6px]">이메일</p>
            <div className="flex gap-2">
              <InputId
                name="email"
                placeholder="이메일 입력"
                type="email"
                value={email}
                className="bg-bg normal-14 text-font-900 mobile:w-[441px] tablet:w-[554px] laptop:text-[16px] px-[15px] py-[19px] border-[1.5px] border-font-400 rounded-[8px]"
                onChange={e => setEmail(e.target.value)}
                required
              />
            </div>
          </div>

          {/* 비밀번호 */}
          <div>
            <p className="semibold-14 tablet:text-[16px] mb-[6px]">비밀번호</p>
            <InputIdDefault name="password" placeholder="비밀번호 입력" type="password" required />
          </div>

          {/* 비밀번호 확인 */}
          <div>
            <p className="semibold-14 tablet:text-[16px] mb-[6px]">비밀번호 확인</p>
            <InputIdDefault name="password" placeholder="비밀번호 확인" type="password" required />
          </div>
        </div>

        {/* 하단 */}
        <div className="flex whitespace-nowrap justify-between mt-[13px] mb-15">
          <div className="flex gap-2 items-center">
            <span className="normal-14 tablet:text-[16px]">판매자</span>
            <ToggleSwitchBig checked={isSeller} onChange={e => setIsSeller(e.target.checked)} />
            <input type="hidden" name="type" value={isSeller ? 'seller' : 'user'} />
          </div>

          {/* 약관 동의 + 모달 열기 */}
          <label className="flex justify-end items-center gap-1 tablet:gap-2 cursor-pointer">
            <input
              type="checkbox"
              name="termsAgreed"
              className="hidden peer"
              checked={termsAgreed}
              onChange={e => setTermsAgreed(e.target.checked)}
            />
            <Check className="w-4 h-4 tablet:w-5 tablet:h-5 text-font-400 stroke-[3px] peer-checked:text-primary-800" />
            <span className="normal-14 tablet:normal-16 text-font-400 peer-checked:text-primary-800">약관 동의</span>

            <button type="button" onClick={() => setIsTermsOpen(true)}>
              <ReadTerms />
            </button>
          </label>
        </div>

        <LoginButton label={isPending || isLoading ? '가입 중...' : '회원가입'} />
      </form>

      <TermsModal isShow={isTermsOpen} onClose={() => setIsTermsOpen(false)} />
    </>
  );
}
