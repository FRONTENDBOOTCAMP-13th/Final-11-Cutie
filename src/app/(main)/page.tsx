import MainBanner from '@app/(main)/MainBanner';
import { Addfunding, SpecialPlan } from '@components/common/etc';
import React from 'react';
import { MainProductItem } from './MainProductItem';

export default function Home() {
  return (
    <>
      <div className="flex justify-center">
        <main className="flex flex-col w-full">
          {/* 메인 배너 */}
          <section className="w-full px-0 mobile:px-0 tablet:px-[90px] tablet:mt-[64px] laptop:px-[120px] laptop:mt-[64px]  max-w-[1280px] mx-auto">
            <MainBanner />
          </section>
          {/* 메인 페이지 아이템 리스트 */}
          <section className="flex flex-col mx-auto w-full my-6 mobile:my-10 tablet:my-16 px-[24px] mobile:px-[40px] tablet:px-[90px] laptop:px-[120px] max-w-[1280px] gap-5 mobile:gap-[25px] tablet:gap-[30px]">
            <MainProductWrap title="특별기획/시즌기획" />
            <MainProductWrap title="인기 프로젝트" />
            <MainProductWrap title="에디터 픽" />
          </section>
        </main>
      </div>
    </>
  );
}

interface mainProductWrapProps {
  title?: string;
}

// 메모이제이션 통해서 배너만 리렌더링 하도록 설정
const MainProductWrap = React.memo(function MainProductWrap({ title = '' }: mainProductWrapProps) {
  return (
    <div className="flex flex-col gap-[20px] mb-10">
      <div className="flex w-full justify-between items-center mb-[10px]">
        <SpecialPlan title={title} />
        <Addfunding />
      </div>
      <MainProductItem title={title} />
    </div>
  );
});
