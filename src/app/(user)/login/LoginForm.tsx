'use client';

import { LoginButton } from '@components/button/SquareBtn';
import { InputIdDefault } from '@components/common/Input';
import { login } from '@data/actions/user';
import { getLikes } from '@data/functions/like';
import { Check } from 'lucide-react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useActionState, useEffect, useState } from 'react';
import useUserStore from 'zustand/userStore';

export default function LoginForm() {
  const setUser = useUserStore(state => state.setUser);
  const setBookmarks = useUserStore(state => state.setBookmarks);
  const router = useRouter();
  const [userState, formAction, isPending] = useActionState(login, null);
  const [keepLogin, setKeepLogin] = useState(false); // 로그인 유지 여부
  const redirect = useSearchParams().get('redirect');

  const fetchLikes = async (accessToken: string) => {
    const res = await getLikes(accessToken);
    if (res.ok) {
      setBookmarks(res.item.map(like => ({ _id: like._id, product_id: like.product._id })));
    }
  };

  useEffect(() => {
    if (userState?.ok) {
      const user = {
        _id: userState.item._id,
        email: userState.item.email,
        name: userState.item.name,
        type: userState.item.type,
        image: userState.item.image,
        token: {
          accessToken: userState.item.token?.accessToken || '',
          refreshToken: userState.item.token?.refreshToken || '',
        },
      };

      // 로그인 유지 여부 저장
      if (typeof window !== 'undefined') {
        try {
          localStorage.setItem('keepLogin', keepLogin.toString());
        } catch (error) {
          console.error('로그인 유지 저장 실패:', error);
        }
      }

      setUser(user, keepLogin); // zustand에 저장
      fetchLikes(user.token.accessToken);

      alert('로그인이 완료되었습니다.');

      try {
        if (redirect) {
          router.replace(decodeURIComponent(redirect));
        } else {
          router.replace('/');
        }
      } catch (error) {
        console.error('URL이동실패:', error);
        router.replace('/');
      }
    } else if (!userState?.errors && userState?.message) {
      alert(userState.message);
    }
  }, [userState, keepLogin, redirect, router, setUser]);

  return (
    <form action={formAction} className="flex flex-col gap-7 mt-[37px]">
      <InputIdDefault placeholder="아이디 입력" type="email" required name="email" disabled={isPending} />
      <InputIdDefault placeholder="비밀번호 입력" type="password" required name="password" disabled={isPending} />

      <label className="flex justify-end items-center gap-2 cursor-pointer">
        <input
          type="checkbox"
          className="hidden peer"
          checked={keepLogin}
          onChange={e => setKeepLogin(e.target.checked)}
          disabled={isPending}
        />
        <Check className="w-5 h-5 text-font-400 stroke-[3px] peer-checked:text-primary-800" />
        <span className="normal-16 text-font-400 peer-checked:text-primary-800">로그인 유지</span>
      </label>

      <LoginButton label={isPending ? '로그인 중' : '로그인'} disabled={isPending} />
    </form>
  );
}
