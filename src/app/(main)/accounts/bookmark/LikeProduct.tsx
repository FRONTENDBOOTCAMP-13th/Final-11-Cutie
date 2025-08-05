import { LikeProductListProps } from '@models/product';
import Image from 'next/image';
import Link from 'next/link';

interface LikeProductProps {
  className?: string;
  product: LikeProductListProps;
}

// 좋아요 목록 상품
export function LikeProduct({ className, product }: LikeProductProps) {
  return (
    <>
      <div className={`flex flex-col normal-10 h-full w-full ${className || ''}`}>
        {/* 썸네일 */}
        <div className="relative">
          <Image
            width={400}
            height={400}
            className="w-full h-[105px] rounded-md object-cover cursor-pointer"
            src={product.mainImages?.[0]?.path}
            alt={product.name}
            priority
          />
        </div>

        <div>
          {/* 제품명, 가격 */}
          <div className="space-y-[4px]">
            <p className="mt-2 bold-14 text-font-900 truncate">{product.name}</p>
          </div>

          {/* 회사명 */}
          <p className="mt-1 medium-12 text-font-400">{product.price}원</p>
        </div>

        {/* 상품 보기 버튼 */}
        <Link href={`/products/${product._id}`}>
          <button className="hover:bg-primary-800 hover:text-white cursor-pointer border-1 border-primary-800 p-2 semibold-14 rounded-md mt-[12px] text-primary-800 w-full">
            상품 보기
          </button>
        </Link>
      </div>
    </>
  );
}
