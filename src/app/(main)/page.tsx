import { MainProductwrap } from '@components/product/ProductItem';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <main className="p-6">
        <section className="flex items-center justify-between w-108 h-[150px] border border-secondary-200 rounded-[25px] ">
          <ChevronLeft className="cursor-pointer" size={20} />
          <ChevronRight className="cursor-pointer" size={20} />
        </section>
        <MainProductwrap />
      </main>
    </>
  );
}
