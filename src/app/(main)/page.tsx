import { AddfundingTablet, SpecialPlanMobile } from '@components/common/etc';
import { MainProdutItem } from '@components/product/ProductItem';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <main className="p-6">
        <section className="w-108 h-[150px] border border-secondary-200 rounded-[25px]">banner-img</section>
        <div>
          <ChevronLeft />
          <ChevronRight />
        </div>
        <div>
          <div>
            <SpecialPlanMobile />
            <AddfundingTablet />
          </div>
          <div>
            <MainProdutItem className="bg-amber-500" />
            <MainProdutItem />
          </div>
        </div>
      </main>
    </>
  );
}
