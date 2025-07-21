'use client';

import { LoginButton, SignUpProfileEditButton } from '@components/button/SquareBtn';
import { ToggleSwitchBig } from '@components/common/etc';
import { InputId, InputIdDefault } from '@components/common/Input';
import { ReadTerms } from '@components/term/TermsBtn';
import { Check } from 'lucide-react';
import { useState } from 'react';
import Link from 'next/link';

export default function SingupForm() {
  const [email, setEmail] = useState('');
  const [isRequested, setIsRequested] = useState(false);

  return (
    <>
      <form className="flex flex-col gap-3 mt-[37px]">
        <div className="flex flex-col gap-4">
          {/* 닉네임 */}
          <div className="flex flex-col">
            <p className="semibold-14 tablet:text-[16px] mb-[6px]">닉네임</p>
            <div className="flex gap-2">
              <InputId
                placeholder="닉네임 입력"
                type="text"
                className="bg-bg normal-14 text-font-900 w-[261px] mobile:w-[387px] laptop:text-[16px] px-[15px] py-[19px] border-[1.5px] border-font-400 rounded-[8px] box-content"
              />
              <SignUpProfileEditButton label="중복확인" />
            </div>
          </div>

          {/* 이메일 */}
          {/* 정규식 추가 조건 필요 */}
          <div className="flex flex-col">
            <p className="semibold-14 tablet:text-[16px] mb-[6px]">이메일</p>
            <div className="flex gap-2">
              <InputId
                placeholder="이메일 입력"
                type="email"
                value={email}
                className="bg-bg normal-14 text-font-900 w-[261px] mobile:w-[387px] laptop:text-[16px] px-[15px] py-[19px] border-[1.5px] border-font-400 rounded-[8px] box-content"
                onChange={e => setEmail(e.target.value)}
                required
              />
              <SignUpProfileEditButton label="인증하기" onClick={() => setIsRequested(true)} />
            </div>
          </div>

          {/* 인증번호 */}
          {/* 입력 조건 추가 필요 */}
          {isRequested && (
            <div className="flex flex-col">
              <p className="semibold-14 tablet:text-[16px] mb-[6px]">인증번호</p>
              <div className="flex gap-2">
                <InputId
                  placeholder="인증번호 입력"
                  type="text"
                  className="bg-bg normal-14 text-font-900 w-[261px] mobile:w-[387px] laptop:text-[16px] px-[15px] py-[19px] border-[1.5px] border-font-400 rounded-[8px] box-content"
                  required
                />
                <SignUpProfileEditButton label="확인" />
              </div>
            </div>
          )}

          {/* 비밀번호 */}
          <div>
            <p className="semibold-14 tablet:text-[16px] mb-[6px]">비밀번호</p>
            <InputIdDefault placeholder="비밀번호 입력" type="password" required />
          </div>

          {/* 비밀번호 확인 */}
          <div>
            <p className="semibold-14 tablet:text-[16px] mb-[6px]">비밀번호 확인</p>
            <InputIdDefault placeholder="비밀번호 확인" type="password" required />
          </div>
        </div>

        {/* 하단 */}
        <div className="flex justify-between mt-[13px] mb-15">
          <div className="flex gap-2 items-center">
            <span className="normal-14 tablet:text-[16px]">판매자</span>
            <ToggleSwitchBig />
          </div>
          <label className="flex justify-end items-center gap-2 cursor-pointer">
            <input type="checkbox" className="hidden peer" />
            <Check className="w-5 h-5 text-font-400 stroke-[3px] peer-checked:text-primary-800" />
            <span className="normal-16 text-font-400 peer-checked:text-primary-800">약관 동의</span>

            {/* 자세히 보기 버튼 클릭 시 약관 모달 이벤트 연결 필요 현재 컴포넌트가 없음 */}
            <ReadTerms />
          </label>
        </div>

        {/* 회원가입 클릭 시 메인페이지 연결 */}
        <Link href="../">
          <LoginButton label="회원가입" />
        </Link>
      </form>
    </>
  );
}
