import MainBanner from '@app/(main)/MainBanner';
import { MainProductWrap } from '@components/product/ProductItem';

export default function Home() {
  return (
    <>
      <div className="flex justify-center">
        <main className="flex flex-col my-6 mobile:my-10 tablet:my-16 px-4 mobile:px-6 tablet:px-[90px] laptop:px-[120px] max-w-[1280px] mx-auto w-full">
          <MainBanner />
          <section className="flex flex-col w-full pt-[30px] gap-5 mobile:gap-[25px] tablet:gap-[30px]">
            <MainProductWrap title="특별기획/시즌기획" />
            <MainProductWrap title="인기 프로젝트" />
            <MainProductWrap title="에디터 픽" />
          </section>
        </main>
      </div>
    </>
  );
}
