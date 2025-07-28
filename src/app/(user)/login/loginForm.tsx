'use client'

import { LoginButton } from '@components/button/SquareBtn';
import { InputIdDefault } from '@components/common/Input';
import { login } from '@data/actions/user';
import { Check } from 'lucide-react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useActionState, useEffect } from 'react';
import useUserStore from 'zustand/userStore';

export default function LoginForm() {
  const setUser = useUserStore(state => state.setUser);
  const router = useRouter();
  const [ userState, formAction, isLoading ] = useActionState(login, null);
  console.log(isLoading, userState);

  const redirect = useSearchParams().get('redirect');

  useEffect(() => {
    if(userState?.ok){
      setUser({
        _id: userState.item._id,
        email: userState.item.email,
        name: userState.item.name,
        type: userState.item.type,
        image: userState.item.image,
        token: {
          accessToken: userState.item.token?.accessToken || '',
          refreshToken: userState.item.token?.refreshToken || '',
        },
      });
      alert('로그인이 완료되었습니다.');
      if(redirect){
        router.replace(redirect); // 돌아갈 페이지가 있을 경우 이동한다.
      }else{
        router.back(); // 이전 페이지로 이동한다.
      }
    }else{
      if(!userState?.errors && userState?.message){ // 입력값 검증에러가 아닌 경우
        alert(userState.message); // 로그인 실패 메세지
      }
    }
  }, [userState]);

  return (
    <>
      <form action={ formAction } className="flex flex-col gap-7 mt-[37px]">
        <InputIdDefault placeholder="아이디 입력" type="email" required name="email" />
        <InputIdDefault placeholder="비밀번호 입력" type="password" required name="password" />

        {/* 로그인 유지 기능 넣어야함*/}
        <label className="flex justify-end items-center gap-2 cursor-pointer">
          <input type="checkbox" className="hidden peer" />
          <Check className="w-5 h-5 text-font-400 stroke-[3px] peer-checked:text-primary-800" />
          <span className="normal-16 text-font-400 peer-checked:text-primary-800">로그인 유지</span>
        </label>

        {/* 로그인 후에 메인으로 가게 해야함 */}
          <LoginButton label="로그인" />
      </form>
    </>
  );
}
