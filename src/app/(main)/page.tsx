import { MainProductwrap } from '@components/product/ProductItem';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function Home() {
  return (
    <>
      <div className="flex justify-center">
        <main className="flex flex-col">
          <div className="flex  items-center justify-between w-70  mobile:w-108 h-[150px] border border-secondary-200 rounded-[25px] ">
            <ChevronLeft className="cursor-pointer" size={20} />
            <ChevronRight className="cursor-pointer" size={20} />
          </div>
          <section className="flex flex-col gap-5 mobile:gap-[25px] tablet:gap-[30px]">
            <MainProductwrap title="특별기획/시즌기획" />
            <MainProductwrap title="인기 프로젝트" />
            <MainProductwrap title="에디터 픽" />
          </section>
        </main>
      </div>
    </>
  );
}
