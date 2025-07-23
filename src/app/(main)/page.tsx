import { MainProductWrap } from '@components/product/ProductItem';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function Home() {
  return (
    <>
      <div className="flex justify-center">
        <main className="flex flex-col my-6 mobile:my-10 tablet:my-16 ">
          <div className="flex mb-5 mobile:mb-[25px] tablet:mb-[30px] items-center justify-between w-full min-w-2.5 h-[130px] mobile:h-[150px] tablet:h-[250px] border border-secondary-200 rounded-[25px] bg-[url('/images/banner.png')] bg-cover bg-no-repeat bg-center ">
            <ChevronLeft className="cursor-pointer" size={20} />
            <ChevronRight className="cursor-pointer" size={20} />
          </div>
          <section className="flex flex-col w-full  gap-5 mobile:gap-[25px] tablet:gap-[30px]">
            <MainProductWrap title="특별기획/시즌기획" />
            <MainProductWrap title="인기 프로젝트" />
            <MainProductWrap title="에디터 픽" />
          </section>
        </main>
      </div>
    </>
  );
}
