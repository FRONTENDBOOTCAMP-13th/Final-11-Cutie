import { LoginButton } from '@components/button/SquareBtn';
import { InputIdDefault } from '@components/common/Input';
import { Check } from 'lucide-react';
import Link from 'next/link';

export default function LoginForm() {
  return (
    <>
      <form className="flex flex-col gap-7 mt-[37px]">
        <InputIdDefault placeholder="아이디 입력" type="text" required name="name" />
        <InputIdDefault placeholder="비밀번호 입력" type="password" required name="name" />

        {/* 로그인 유지 기능 넣어야함*/}
        <label className="flex justify-end items-center gap-2 cursor-pointer">
          <input type="checkbox" className="hidden peer" />
          <Check className="w-5 h-5 text-font-400 stroke-[3px] peer-checked:text-primary-800" />
          <span className="normal-16 text-font-400 peer-checked:text-primary-800">로그인 유지</span>
        </label>

        {/* 로그인 후에 메인으로 가게 해야함 */}
        <Link href='/'>
          <LoginButton label="로그인" />
        </Link>
      </form>
    </>
  );
}
