import '@app/globals.css';
import Image from 'next/image';
import ProductKeroro from '@assets/images/productKeroro.jpg';
import { HeartIcon, Share2Icon } from 'lucide-react';

//상품정보 컨텐츠 헤드 (480~1440)
export function ProductHead() {
  return (
    <div className="w-full flex justify-center min-w-[480px] font-pretendard">
      <div className="flex flex-col mobile:flex-row max-w-[1200px] w-full">
        {/* 왼쪽 상품 이미지 */}
        <div
          className="relative w-[432px] h-[315px]
                     mobile:w-[334px] mobile:h-[420px]
                     tablet:w-[640px] tablet:h-[516px]
                     laptop:w-[739px] laptop:h-[516px]
                     shrink-0 overflow-hidden tablet:mx-0"
        >
          <Image src={ProductKeroro} alt="상품이미지" fill className="object-cover w-full h-full" />
        </div>

        {/* 오른쪽 상품 정보 */}
        <div
          className="
            flex flex-col justify-between 
            px-0 pt-[20px] pb-0 
            mobile:pl-[20px] mobile:py-[50px]
            tablet:pl-[20px] tablet:py-[84px]
            laptop:pb-[87px]
          "
        >
          <div className="flex flex-col gap-[10px]">
            <p className="text-font-900 text-[18px] mobile:text-[20px] tablet:text-[24px] laptop:text-[24px] font-normal ">
              달성률 <span className="text-primary-800 font-bold">5,394%</span>
            </p>

            <p className="text-font-900 text-[18px] mobile:text-[20px] tablet:text-[24px] laptop:text-[24px] font-bold ">
              개구리 중사 케로로케로케로 티셔츠
            </p>

            <p className="text-font-400 text-[14px] mobile:text-[14px] tablet:text-[14px] laptop:text-[16px] font-normal ">
              (주) 1더하기1은귀요미
            </p>

            <p className="text-font-900 text-[18px] mobile:text-[20px] tablet:text-[24px] laptop:text-[24px] font-normal ">
              펀딩 기간 <span className="font-bold">D-7</span> <span className="font-normal">25.07.08 ~ 25.08.08</span>
            </p>

            <p className="text-font-900 text-[18px] mobile:text-[20px] tablet:text-[24px] laptop:text-[24px] font-normal ">
              목표 금액 5,555 원
            </p>

            <p className="text-font-400 text-[14px] mobile:text-[14px] tablet:text-[14px] laptop:text-[14px] font-normal ">
              예상 배송 시작일 25.08.08
            </p>

            {/* 수량 + 가격 */}
            <div className="flex items-center gap-4">
              <div className="flex items-center border w-[105px] h-[35px] border-secondary-200 overflow-hidden text-font-500 text-[20px]">
                <button className="w-[35px] h-full bg-primary-50 border-r border-secondary-200 flex items-center justify-center">
                  <span className="mb-1 bold-36 text-font-900">−</span>
                </button>
                <span className="flex-1 text-center text-font-900">1</span>
                <button className="w-[35px] h-full bg-primary-50 border-l border-secondary-200 flex items-center justify-center">
                  <span className="mb-1 bold-36 text-font-900">＋</span>
                </button>
              </div>
              <span className="text-font-900 text-[18px] mobile:text-[20px] tablet:text-[24px] laptop:text-[24px] font-bold">
                500,000 원
              </span>
            </div>

            {/* 공유, 찜, 펀딩 버튼 */}
            <div className="flex items-center gap-[10px]">
              <button className="w-[40px] h-[40px] border border-secondary-200 flex items-center justify-center">
                <Share2Icon />
              </button>
              <button className="w-[40px] h-[40px] border border-secondary-200 flex items-center justify-center">
                <HeartIcon className="hover:fill-error text-red-500" />
              </button>
              <button
                className="flex items-center justify-center bg-primary-800 text-white 
                w-[330px] h-[40px] px-[32px] py-[12px] text-[14px]
                mobile:w-[233px] mobile:text-[14px]
                tablet:w-[340px] tablet:text-[14px]
                laptop:w-[340px] laptop:text-[14px]
                font-bold"
              >
                펀딩하기
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

//공개예정 상품
export function ComingSoonProduct() {
  return (
    <div className="w-full flex justify-center min-w-[480px] font-pretendard">
      <div className="flex flex-col mobile:flex-row max-w-[1200px] w-full">
        {/* 왼쪽 상품 이미지 */}
        <div
          className="relative w-[432px] h-[315px]
                     mobile:w-[334px] mobile:h-[420px]
                     tablet:w-[640px] tablet:h-[516px]
                     laptop:w-[739px] laptop:h-[516px]
                     shrink-0 overflow-hidden tablet:mx-0"
        >
          <Image src={ProductKeroro} alt="상품이미지" fill className="object-cover w-full h-full" />
        </div>

        {/* 오른쪽 상품 정보 */}
        <div
          className="
            flex flex-col justify-between 
            px-0 pt-[20px] pb-0 
            mobile:pl-[20px] mobile:py-[50px]
            tablet:pl-[20px] tablet:py-[84px]
            laptop:pb-[87px]
          "
        >
          <div className="flex flex-col gap-[10px]">
            <div className="flex items-center justify-between w-full text-font-900 text-[18px] mobile:text-[20px] tablet:text-[24px] laptop:text-[24px] font-normal">
              <span>
                달성률 <span className="text-primary-800 font-bold">5,394%</span>
              </span>
              <button className="flex items-center justify-center medium-14 laptop:text-[16px] h-[24px] px-[11px] py-[4px] border border-primary-800 rounded-[4px] text-primary-800 hover:bg-primary-800 hover:text-white hover:border-primary-800">
                등록
              </button>
            </div>

            <p className="text-font-900 text-[18px] mobile:text-[20px] tablet:text-[24px] laptop:text-[24px] font-bold">
              개구리 중사 케로로케로케로 티셔츠
            </p>

            <p className="text-font-400 text-[14px] mobile:text-[14px] tablet:text-[14px] laptop:text-[16px] font-normal">
              (주) 1더하기1은귀요미
            </p>

            <p className="text-font-900 text-[18px] mobile:text-[20px] tablet:text-[24px] laptop:text-[24px] font-normal">
              펀딩 기간 <span className="font-bold">D-7</span> <span className="font-normal">25.07.08 ~ 25.08.08</span>
            </p>

            <p className="text-font-900 text-[18px] mobile:text-[20px] tablet:text-[24px] laptop:text-[24px] font-normal">
              목표 금액 5,555 원
            </p>

            <p className="text-font-400 text-[14px] mobile:text-[14px] tablet:text-[14px] laptop:text-[16px] font-normal">
              예상 배송 시작일 25.08.08
            </p>

            {/* 수량 + 가격 */}
            <div className="flex items-center gap-4">
              <div className="flex items-center border w-[105px] h-[35px] border-secondary-200 overflow-hidden text-font-500 text-[20px]">
                <button className="w-[35px] h-full bg-primary-50 border-r border-secondary-200 flex items-center justify-center">
                  <span className="mb-1 bold-36 text-font-900">−</span>
                </button>
                <span className="flex-1 text-center text-font-900">1</span>
                <button className="w-[35px] h-full bg-primary-50 border-l border-secondary-200 flex items-center justify-center">
                  <span className="mb-1 bold-36 text-font-900">＋</span>
                </button>
              </div>
              <span className="text-font-900 text-[17px] mobile:text-[20px] tablet:text-[24px] laptop:text-[24px] font-bold">
                500,000 원
              </span>
            </div>

            {/* 공유, 찜, 펀딩 버튼 */}
            <div className="flex items-center gap-[10px]">
              <button className="w-[40px] h-[40px] border border-secondary-200 flex items-center justify-center">
                <Share2Icon />
              </button>
              <button className="w-[40px] h-[40px] border border-secondary-200 flex items-center justify-center">
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
  return (
    <div className="min-w-[320px] w-[432px] h-[500px] mobile:w-[568px] tablet:w-[880px] laptop:w-[1040px]">
      <h2
        className="flex justify-center mb-[20px] mobile:mb-[40px]
                    text-[16px] 
                    mobile:text-[20px] 
                    tablet:text-[24px] font-bold"
      >
        (소제목h2)화제의 케로로 티셔츠 드디어 오픈!
      </h2>
      <span className="flex justify-center normal-14 mb-[20px] mobile:mb-[40px] tablet:text[14px] laptop:text-[16px]">
        프로젝트 탄생 스토리
      </span>
      <Image
        src={ProductKeroro}
        alt="상품이미지"
        className="object-cover w-[432px] h-[500px] mobile:w-[568px] tablet:w-[880px] laptop:w-[1040px]"
      />
    </div>
  );
}
