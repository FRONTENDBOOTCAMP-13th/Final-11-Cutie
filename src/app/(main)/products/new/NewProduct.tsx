'use client';

import { CreateProjectTitle } from '@components/common/etc';
import { CategoryBar } from '@components/button/RoundedBtn';
import { PreviewCheckboxWithLabel } from '@components/button/SquareBtn';
import { TermsAgreement } from '@components/term/TermsBtn';
import Makeproject from '@assets/images/makeproject.svg';
import { ProductSummaryInput } from '@components/common/Input';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import useUserStore from 'zustand/userStore';
import { useEffect, useState } from 'react';
import { checkUserType } from '@data/functions/user';

//새 프로젝트 만들기 페이지
export default function NewProduct() {
  // 주소창 접근 제한
  const router = useRouter();
  const accessToken = useUserStore(state => state.user?.token?.accessToken);

  const user = useUserStore(state => state.user);
  const userId = user?._id;

  const [loading, setLoading] = useState(true);

  const [hydrated, setHydrated] = useState(false);
  const [authorized, setAuthorized] = useState(false);

  // SSR hydration
  useEffect(() => {
    setHydrated(true);
  }, []);

  // 권한 확인
  useEffect(() => {
    if (!hydrated) return;

    if (!accessToken || !userId) {
      const currentPath = window.location.pathname;
      router.replace(`/login?redirect=${encodeURIComponent(currentPath)}`);
      return;
    }

    const checkAccess = async () => {
      try {
        const res = await checkUserType(userId);

        if (!res.ok || res.item.type !== 'seller') {
          const back = document.referrer || '/';
          alert('판매자만 접근 가능한 페이지입니다.');
          router.replace(back);
          return;
        }

        setAuthorized(true);
        setLoading(false);
      } catch (err) {
        console.error(err);
        router.replace('/error');
      }
    };

    checkAccess();
  }, [hydrated, accessToken, userId, router]);

  if (!hydrated || loading) return null;

  if (!authorized) return null;

  return (
    // 왼쪽 사진
    <div className="flex flex-col laptop:flex-row">
      <div className="hidden laptop:block ml-0 mt-0">
        <Makeproject className="w-[538px] h-[1249px]" />
      </div>
      {/* 오른쪽 내용 */}
      <div className="flex flex-col min-w-[460px] px-6 py-6 mobile:px-10 mobile:py-10 tablet:px-[90px] tablet:py-[64px] laptop:px-[90px] laptop:py-[64px]">
        <div className="">
          <CreateProjectTitle
            title={
              <>
                멋진 아이디어가 있으시군요! <br /> 어떤 프로젝트를 계획 중이신가요?
              </>
            }
            sub="나중에 변경 가능하니 너무 걱정마세요."
            subClassName="mt-[16px]"
          />
        </div>
        <div className="mt-[42px]">
          <CategoryBar />
        </div>
        <div className="mt-[72px] laptop:mt-[78px]">
          <CreateProjectTitle
            title="프로젝트를 간단하게 소개해주세요."
            sub="나중에 수정 가능하니 편하게 적어주세요."
            subClassName="mt-[16px]"
          />
        </div>
        <ProductSummaryInput />
        <div className="mt-[72px] laptop:mt-[78px]">
          <CreateProjectTitle title="프로젝트 동의서" sub="프로젝트 등록을 위한 필수 동의 항목을 확인해주세요." />
        </div>
        <div className="flex flex-col gap-[12px] mt-[42px]">
          <PreviewCheckboxWithLabel title="대표 창작자는 만 19세 이상의 성인이어야 합니다." />
          <PreviewCheckboxWithLabel title="펀드림에서 필요 시 연락 드릴 수 있도록 본인 명의의 휴대폰 번호와 이메일 주소가 필요합니다." />
          <PreviewCheckboxWithLabel title="프로젝트 성공 후의 정산을 위해 신분증 또는 사업자 등록증, 국내 은행 계좌를 준비해주세요." />
          <PreviewCheckboxWithLabel title="펀딩 성공 시 플랫폼 수수료 및 결제수수료가 공제되는 것에 동의합니다." />
          <PreviewCheckboxWithLabel title="프로젝트 진행 및 리워드 제공에 대한 모든 책임이 등록자(본인)에게 있음을 동의합니다." />
        </div>

        <TermsAgreement />

        <div className="flex justify-end border-t border-secondary-200 mt-[32px] w-full">
          <button className="px-[32px] py-[12px] mt-[19px] medium-14 bg-secondary-200  hover:bg-primary-800  text-white ">
            <Link href={'new/detail'}>상세 프로젝트 등록하기</Link>
          </button>
        </div>
      </div>
    </div>
  );
}
