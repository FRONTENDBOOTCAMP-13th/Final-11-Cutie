import MainBanner from '@app/(main)/MainBanner';
import { MainProductWrap } from '@components/product/ProductItem';

export default function Home() {
  return (
    <>
      <div className="flex justify-center">
        <main className="flex flex-col w-full">
          <section className="w-full px-0 mobile:px-0 tablet:px-[90px] tablet:mt-[64px] laptop:px-[120px] laptop:mt-[64px] ">
            <MainBanner />
          </section>
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
