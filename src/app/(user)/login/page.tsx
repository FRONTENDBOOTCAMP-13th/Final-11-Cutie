import Kakao from '@assets/icons/kakao.svg';
import Naver from '@assets/icons/naver.svg';
import Link from 'next/link';
import LoginForm from './LoginSection';
import { Suspense } from 'react';

export default function LoginPage() {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <LoginForm />
      </Suspense>
      <div className="text-font-400 flex gap-2 normal-14 justify-center">
        <Link href="/">아이디/비밀번호 찾기</Link>
        <span>|</span>
        <Link href="/signup">회원가입</Link>
      </div>
      <div className="flex gap-9 justify-center">
        {/* 소셜 로그인 API */}
        <Link href="/">
          <Kakao className="w-[47px] h-[47px] mobile:w-[65px] mobile:h-[65px] tablet:w-[78px] tablet:h-[78px]" />
        </Link>
        <Link href="/">
          <Naver className="w-[47px] h-[47px] mobile:w-[65px] mobile:h-[65px] tablet:w-[78px] tablet:h-[78px]" />
        </Link>
      </div>
    </>
  );
}
