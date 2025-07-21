import { MainProductwrap } from '@components/product/ProductItem';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function Home() {
  return (
    <>
      <div className="flex justify-center">
        <main className="flex flex-col p-6">
          <section className="flex  items-center justify-between w-108 h-[150px] border border-secondary-200 rounded-[25px] ">
            <ChevronLeft className="cursor-pointer" size={20} />
            <ChevronRight className="cursor-pointer" size={20} />
          </section>
          <MainProductwrap />
        </main>
      </div>
    </>
  );
}
