'use client';

import { ChevronLeft, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const bannerImages = ['/images/banner1.png', '/images/banner2.png', '/images/banner3.png'];

//메인페이지의 배너부분
export default function MainBanner() {
  const [currentIndex, setCurrentIndex] = useState(0);

  //이전 이미지
  const prevSlide = () => {
    setCurrentIndex(prev => (prev === 0 ? bannerImages.length - 1 : prev - 1));
  };
  //다음 이미지
  const nextSlide = () => {
    setCurrentIndex(prev => (prev === bannerImages.length - 1 ? 0 : prev + 1));
  };

  // 자동 슬라이드 (3초마다)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev === bannerImages.length - 1 ? 0 : prev + 1));
    }, 3000);

    return () => clearInterval(interval); // 컴포넌트 unmount 시 제거
  }, []);

  return (
    <div className="relative w-full overflow-hidden px-0">
      <div className="flex items-center justify-center">
        <div className="relative w-full aspect-[16/3] rounded-0 tablet:rounded-[25px] laptop:rounded-[25px] overflow-hidden">
          <Image
            src={bannerImages[currentIndex]}
            alt="배너 이미지"
            fill
            priority
            className="object-center bg-center  rounded-0 tablet:rounded-[25px] laptop:rounded-[25px]"
          />

          <button
            onClick={prevSlide}
            className="absolute top-1/2 -translate-y-1/2 left-4 z-[1] text-white bg-black/30 hover:bg-black/50 p-1  rounded-[25px]"
          >
            <ChevronLeft size={32} />
          </button>

          <button
            onClick={nextSlide}
            className="absolute top-1/2 -translate-y-1/2 right-4 z-[1] text-white bg-black/30 hover:bg-black/50 p-1  rounded-[25px]"
          >
            <ChevronRight size={32} />
          </button>

          <Link href="">
            <span className="absolute inset-0" />
          </Link>
        </div>
      </div>
    </div>
  );
}
