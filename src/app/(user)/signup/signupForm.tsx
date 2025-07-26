'use client';

import { LoginButton } from '@components/button/SquareBtn';
import { ToggleSwitchBig } from '@components/common/etc';
import { InputId, InputIdDefault } from '@components/common/Input';
import { ReadTerms } from '@components/term/TermsBtn';
import { createUser } from '@data/actions/user';
import { Check } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useActionState, useEffect, useState } from 'react';

export default function SignupForm() {
  const [ state, formAction, isLoading ] = useActionState(createUser, null);
  const [email, setEmail] = useState(''); 
  const [isSeller, setIsSeller] = useState(false); // 판매자 상태
  const router = useRouter();

  console.log(isLoading, state);

   useEffect(() => {
    if(state?.ok){
      alert('회원 가입이 완료되었습니다. 로그인 페이지로 이동합니다.');
      router.replace('/login');
    }else if(state?.ok === 0 && !state?.errors){ // 입력값 검증에러가 아닌 경우
      alert(state?.message);
    }
  }, [state]);

  return (
    <>
      <form action={ formAction } className="flex flex-col gap-3 mt-[37px]">
        <div className="flex flex-col gap-4">
          {/* 닉네임 */}
          <div className="flex flex-col">
            <p className="semibold-14 tablet:text-[16px] mb-[6px]">닉네임</p>
            <div className="flex gap-2">
              <InputId
                name="name"
                placeholder="닉네임 입력"
                type="text"
                className="bg-bg normal-14 text-font-900 mobile:w-[441px] tablet:w-[554px] laptop:text-[16px] px-[15px] py-[19px] border-[1.5px] border-font-400 rounded-[8px]"
                required
              />
              {/* <SignUpProfileEditButton label="중복확인" /> 
              버튼 살리려면 InputId size 변경해야함 "w-[130px] mobile:w-[367px]"*/}
            </div>
          </div>

          {/* 이메일 */}
          {/* 정규식 추가 조건 필요 */}
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
              {/* <SignUpProfileEditButton label="중복확인" onClick={() => setIsRequested(true)} /> 
              버튼 살리려면 InputId size 변경해야함 "w-[130px] mobile:w-[367px]" */}
            </div>
          </div>

          {/* 비밀번호 */}
          <div>
            <p className="semibold-14 tablet:text-[16px] mb-[6px]">비밀번호</p>
            <InputIdDefault name='password' placeholder="비밀번호 입력" type="password" required />
          </div>

          {/* 비밀번호 확인 */}
          <div>
            <p className="semibold-14 tablet:text-[16px] mb-[6px]">비밀번호 확인</p>
            <InputIdDefault name='password' placeholder="비밀번호 확인" type="password" required />
          </div>
        </div>

        {/* 하단 */}
        <div className="flex whitespace-nowrap justify-between mt-[13px] mb-15">
          <div className="flex gap-2 items-center">
            <span className="normal-14 tablet:text-[16px]">판매자</span>
            <ToggleSwitchBig checked={isSeller} onChange={(e) => setIsSeller(e.target.checked)} />
            <input type="hidden" name="type" value={isSeller ? 'seller' : 'user'} />
          </div>
          <label className="flex justify-end items-center gap-1 tablet:gap-2 cursor-pointer">
            <input type="checkbox" className="hidden peer" />
            <Check className="w-4 h-4 tablet:w-5 tablet:h-5 text-font-400 stroke-[3px] peer-checked:text-primary-800" />
            <span className="normal-14 tablet:normal-16 text-font-400 peer-checked:text-primary-800">약관 동의</span>

            {/* 자세히 보기 버튼 클릭 시 약관 모달 이벤트 연결 필요 현재 컴포넌트가 없음 */}
            <ReadTerms />
          </label>
        </div>

          <LoginButton label="회원가입" />
        
      </form>
    </>
  );
}
