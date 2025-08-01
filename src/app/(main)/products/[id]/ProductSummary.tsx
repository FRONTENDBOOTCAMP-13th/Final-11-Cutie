'use client';
import '@app/globals.css';
import Image from 'next/image';
import { HeartIcon, Share2Icon } from 'lucide-react';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Iproduct } from '@models/product';
import { getDdayText } from '@utils/date';
import { formatDate } from '@utils/formatDate';
import { getProductDetail } from '@data/functions/product';
import { usePathname } from 'next/navigation';

interface ProductProps {
  product: Iproduct; // api 연결 위해 만든 type 불러오기
}

//상품정보 컨텐츠 헤드 (480~1440)
export default function ProductHead({ product }: ProductProps) {
  const [isLiked, setIsLiked] = useState(false);
  const [count, setCount] = useState(1); // 수량 상태

  // product의 상품 이미지 경로 매칭
  const path = product.mainImages?.[0]?.path;
  const imageUrl = path ? `${path}` : '';

  const dday = getDdayText(product.extra.funding.startDate, product.extra.funding.endDate);

  const increase = () => setCount(prev => prev + 1);
  const decrease = () => setCount(prev => (prev > 1 ? prev - 1 : 1)); // 최소값 1 제한

  return (
    <div className="w-full flex justify-center items-center min-w-[320px] font-pretendard px-4">
      {' '}
      {/* 🔧 좌우 패딩 확보 */}
      <div className="flex flex-col tablet:flex-row max-w-[1200px] w-full gap-6">
        {/* 왼쪽 상품 이미지 */}
        <div className="relative aspect-[2/3] h-[315px] mobile:h-[420px] tablet:h-[516px] w-full">
          <Image
            src={imageUrl}
            alt={product.name}
            fill
            priority
            sizes="(min-width: 1024px), (min-width: 768px) 400px, 100vw"
            className="object-cover"
          />
        </div>

        {/* 오른쪽 상품 정보 */}
        <div className="flex flex-col justify-center w-full px-0 pt-[20px] pb-0 mobile:pl-[20px] mobile:py-[50px] tablet:pl-[20px] tablet:py-[84px] laptop:pb-[87px] bg-bg">
          <div className="flex flex-col gap-[10px] w-full break-words">
            <p className="text-font-900 text-[18px] mobile:text-[24px] font-normal">
              달성률 <span className="text-primary-800 font-bold">{product.extra.goalPercent.toLocaleString()}%</span>
            </p>
            <p className="text-font-900 text-[18px] mobile:text-[24px] font-bold whitespace-normal break-words">
              {product.name}
            </p>
            <p className="text-font-400 text-[14px] laptop:text-[16px] font-normal">{product.seller.name}</p>
            <p className="text-font-900 text-[18px] mobile:text-[24px] font-normal">
              펀딩 기간 <span className="font-bold">{dday}</span>{' '}
              <span className="font-normal">
                {formatDate(product.extra.funding.startDate)} ~ {formatDate(product.extra.funding.endDate)}
              </span>
            </p>
            <p className="text-font-900 text-[18px] mobile:text-[24px] font-normal">
              목표 달성률 {product.extra.goalAmount}%
            </p>
            <p className="text-font-400 text-[14px] font-normal">
              예상 배송 시작일 {formatDate(product.extra.funding.deliveryDate)}
            </p>
            {/* 수량 + 가격 */}
            <div className="flex items-center gap-4">
              <div className="flex items-center border w-[105px] h-[35px] border-secondary-200 overflow-hidden text-font-500 text-[24px]">
                <button
                  className="w-[35px] h-full bg-primary-50 border-r border-secondary-200 flex items-center justify-center cursor-pointer"
                  onClick={decrease}
                >
                  <span className="bold-24 text-font-900">−</span>
                </button>
                <span className="flex-1 text-center text-font-900">{count}</span>
                <button
                  className="w-[35px] h-full bg-primary-50 border-l border-secondary-200 flex items-center justify-center gap-0 cursor-pointer"
                  onClick={increase}
                >
                  <span className="bold-24 text-font-900">＋</span>
                </button>
              </div>
              <span className="text-font-900 text-[18px] mobile:text-[20px] tablet:text-[24px] laptop:text-[24px] font-bold">
                {product.price.toLocaleString()}원
              </span>
            </div>
            {/* 공유, 찜, 펀딩 버튼 */}
            <div className="flex flex-wrap gap-[10px] w-full mt-4">
              <button className="w-[40px] h-[40px] border border-secondary-200 flex items-center justify-center cursor-pointer shrink-0">
                <Share2Icon />
              </button>
              <button
                onClick={() => setIsLiked(prev => !prev)}
                className="w-[40px] h-[40px] border border-secondary-200 flex items-center justify-center cursor-pointer shrink-0"
              >
                <HeartIcon
                  className={`w-[20px] h-[20px] transition-colors duration-200 ${
                    isLiked ? 'fill-error text-error' : 'text-red-500'
                  }`}
                />
              </button>
              <Link
                href="/checkout"
                className="flex-1 min-w-0 flex items-center justify-center whitespace-nowrap bg-primary-800 text-white h-[40px] px-[16px] py-[12px] text-[14px] font-bold cursor-pointer"
              >
                펀딩하기
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

//공개예정 상품
export function ComingSoonProduct({ product }: ProductProps) {
  // product의 상품 이미지 경로 매칭
  const path = product.mainImages?.[0]?.path;
  const imageUrl = path ? `${path}` : '';

  const dday = getDdayText(product.extra.funding.startDate, product.extra.funding.endDate);

  return (
    <div className="w-full flex justify-center items-center min-w-[320px] font-pretendard">
      <div className="flex flex-col mobile:flex-row max-w-[1200px] w-full">
        {/* 왼쪽 상품 이미지 */}
        <div className="relative h-[315px] mobile:h-[420px] tablet:h-[516px] w-full">
          <Image
            sizes="(min-width: 1024px) 600px, (min-width: 768px) 400px, 100vw"
            priority
            fill
            src={imageUrl}
            alt={product.name}
            className="object-cover"
          />
        </div>

        {/* 오른쪽 상품 정보 */}
        <div
          className="
            flex flex-col justify-center
            px-0 pt-[20px] pb-0 
            mobile:pl-[20px] mobile:py-[50px]
            tablet:pl-[20px] tablet:py-[84px]
            laptop:pb-[87px]
            bg-bg mobile:w-[334px] tablet:w-[440px]"
        >
          <div className="flex flex-col gap-[10px]">
            <div className="flex justify-between">
              <div className="text-font-900 text-[18px] mobile:text-[20px] tablet:text-[24px] laptop:text-[24px] font-normal ">
                달성률 <span className="text-primary-800 font-bold">{product.extra.goalPercent}%</span>
              </div>
              <button className="flex items-center justify-center medium-14 laptop:text-[16px] h-[24px] px-[11px] py-[4px] border border-primary-800 rounded-[4px] text-primary-800 hover:bg-primary-800 hover:text-white hover:border-primary-800 cursor-pointer">
                등록
              </button>
            </div>

            <p className="text-font-900 text-[18px] mobile:text-[20px] tablet:text-[24px] laptop:text-[24px] font-bold">
              {product.name}
            </p>

            <p className="text-font-400 text-[14px] mobile:text-[14px] tablet:text-[14px] laptop:text-[16px] font-normal">
              {product.seller.name}
            </p>

            <p className="text-font-900 text-[18px] mobile:text-[20px] tablet:text-[24px] laptop:text-[24px] font-normal">
              <span className="font-bold">{dday}</span>{' '}
              <span className="font-normal">
                {formatDate(product.extra.funding.startDate)} ~ {formatDate(product.extra.funding.endDate)}
              </span>
            </p>

            <p className="text-font-900 text-[18px] mobile:text-[20px] tablet:text-[24px] laptop:text-[24px] font-normal">
              목표 달성률 {product.extra.goalAmount}%
            </p>

            <p className="text-font-400 text-[14px] mobile:text-[14px] tablet:text-[14px] laptop:text-[16px] font-normal">
              예상 배송 시작일 {formatDate(product.extra.funding.deliveryDate)}
            </p>

            {/* 수량 + 가격 */}
            <div className="flex items-center gap-4">
              <div className="flex items-center border w-[105px] h-[35px] border-secondary-200 overflow-hidden text-font-500 text-[20px]">
                <button className="w-[35px] h-full bg-primary-50 border-r border-secondary-200 flex items-center justify-center cursor-pointer">
                  <span className="bold-20 text-font-900">−</span>
                </button>
                <span className="flex-1 text-center text-font-900">1</span>
                <button className="w-[35px] h-full bg-primary-50 border-l border-secondary-200 flex items-center justify-center gap-0 cursor-pointer">
                  <span className=" bold-20 text-font-900">＋</span>
                </button>
              </div>
              <span className="text-font-900 text-[18px] mobile:text-[20px] tablet:text-[24px] laptop:text-[24px] font-bold">
                {product.price.toLocaleString()}원
              </span>
            </div>

            {/* 공유, 찜, 펀딩 버튼 */}
            <div className="flex items-center gap-[10px]">
              <button className="cursor-pointer w-[40px] h-[40px] border border-secondary-200 flex items-center justify-center">
                <Share2Icon />
              </button>
              <button className="cursor-pointer w-[40px] h-[40px] border border-secondary-200 flex items-center justify-center">
                <HeartIcon className="hover:fill-error text-red-500" />
              </button>
              <button
                className="flex items-center justify-center bg-secondary-200 text-white 
                w-[330px] h-[40px] px-[32px] py-[12px]
                mobile:w-[233px] 
                tablet:w-[340px] 
                laptop:w-[340px] 
                medium-14 laptop:text-[16px]"
              >
                공개예정
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

//상품 상세 페이지 (480~1440)
export function ProductDetail() {
  // 현재 상품 데이터
  const [data, setData] = useState<Iproduct>();

  // 현재 주소
  const path = usePathname().split('/');
  // 현재 상품 번호
  const nowProductsNumber = Number(path[path.length - 1]);

  useEffect(() => {
    const getData = async () => {
      const relsult = await getProductDetail(nowProductsNumber);

      if (relsult.ok === 1) {
        setData(relsult.item);
      }
    };

    getData();
  }, []);

  const content = data?.content.slice(1, -1).split(',');
  const contentEl = content?.map((item, index) => {
    return <p key={`${nowProductsNumber} ${index} content`}>{item}</p>;
  });

  return (
    <div className="flex flex-col justify-center items-center w-full gap-5 mobile:gap-10">
      {/* <h2 className="text-[16px] mobile:text-[20px] tablet:text-[24px] font-bold">소제목</h2> */}
      <div className="normal-14 tablet:text-[14px] laptop:text-[16px]">{contentEl}</div>
    </div>
  );
}
