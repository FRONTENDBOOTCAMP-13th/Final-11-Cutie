import MainBanner from '@app/(main)/MainBanner';
import React from 'react';
import MainProductList from '@app/(main)/MainProductList';

export default function Home() {
  return (
    <>
      <div className="flex justify-center">
        <main className="flex flex-col w-full">
          {/* 메인 배너 */}
          <section className="w-full px-0 mt-[7px] mobile:px-0 tablet:px-[90px] tablet:mt-[64px] laptop:px-[120px] laptop:mt-[64px]  max-w-[1280px] mx-auto">
            <MainBanner />
          </section>
          <MainProductList />
        </main>
      </div>
    </>
  );
}
