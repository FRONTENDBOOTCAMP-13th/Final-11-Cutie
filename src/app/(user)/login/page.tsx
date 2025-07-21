import Kakao from '@assets/icons/kakao.svg';
import Naver from '@assets/icons/naver.svg';
import Link from 'next/link';
import LoginForm from './loginForm';

export default function LoginPage() {
  return (
    <>
      <LoginForm />
      <div className="text-font-400 flex gap-2 normal-14 justify-center">
        <Link href="./아이디/비밀번호 찾기">아이디/비밀번호 찾기</Link>
        <span>|</span>
        <Link href="./회원가입">회원가입</Link>
      </div>
      <div className="flex gap-9 justify-center">
        <Link href="./카카오 회원가입">
          <Kakao className="w-[47px] h-[47px] mobile:w-[65px] mobile:h-[65px] tablet:w-[78px] tablet:h-[78px]" />
        </Link>
        <Link href="./네이버 회원가입">
          <Naver className="w-[47px] h-[47px] mobile:w-[65px] mobile:h-[65px] tablet:w-[78px] tablet:h-[78px]" />
        </Link>
      </div>
    </>
  );
}
