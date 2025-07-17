import '@app/globals.css';
import Image from 'next/image';
import productKeroro from 'assets/images/productKeroro.jpg';
import { Heart, HeartIcon } from 'lucide-react';

// 샛별 담당

export function ProductItem() {
  return (
    <div className="flex flex-col gap-[15px] tablet:gap-5 normal-10 h-full w-[215px] tablet:w-[222px] laptop:w-[260px] desktop:w-[285px]">
      {/* 썸네일 */}
      <div className="relative">
        <Image className="w-full h-[194px] rounded-2xl object-cover" src={productKeroro} alt="/" />
        <div className="absolute group right-4 bottom-4">
          <HeartIcon className="w-[30px] h-[30px] hover:text-red-500 hover:fill-red-500" strokeWidth={1.5} />
        </div>
      </div>

      <div className="space-y-2.5 tablet:space-y-5">
        {/* 달성율, 디데이 */}
        <div className="flex gap-2.5 font-bold tablet:text-[20px] laptop:text-[24px]">
          <p className="text-primary-800 ">5,394% 달성</p>
          <p className="text-font-400">D-7</p>
        </div>

        {/* 제품명, 가격 */}
        <div className="tablet:text-[12px] laptop:text-[14px]">
          <p className="text-font-900 font-bold ">개구리 중사 케로케로케로케로 티셔츠</p>
          <p className="text-font-900">500,000원</p>
        </div>

        {/* 회사명 */}
        <p className="text-font-400 tablet:text-[12px] laptop:text-[14px]">(주) 1더하기1은귀요미</p>
      </div>
    </div>
  );
}

// 상품 페이지 아이템-main>480
export function MainProdutItem() {
  return (
    <>
      <div className="flex flex-col gap-[15px] normal-10 h-full w-[200px] ">
        {/* 썸네일 */}
        <div className="relative">
          <Image className=" w-full h-[194px] rounded-2xl object-cover" src={productKeroro} alt="/" />
          <div className="absolute group right-4 bottom-4">
            <HeartIcon className="w-[30px] h-[30px] hover:text-red-500 hover:fill-red-500" strokeWidth={1.5} />
          </div>
        </div>

        <div className=" space-y-2.5 ">
          {/* 달성율, 디데이 */}
          <div className="flex gap-2.5 bold-10">
            <p className="text-primary-800 ">5,394% 달성</p>
            <p className="text-font-400">D-7</p>
          </div>

          {/* 제품명, 가격 */}
          <div className=" bold-10">
            <p className="text-font-900">개구리 중사 케로케로케로케로 티셔츠</p>
            <p className="text-font-900 normal-10">500,000원</p>
          </div>

          {/* 회사명 */}
          <p className="text-font-400 normal-10">(주) 1더하기1은귀요미</p>
        </div>
      </div>
    </>
  );
}
