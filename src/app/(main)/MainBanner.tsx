'use client';

import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const bannerImages = ['/images/image.png', '/images/banner2.png', '/images/banner3.png'];

export default function MainBanner() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex(prev => (prev === 0 ? bannerImages.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex(prev => (prev === bannerImages.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative w-full overflow-hidden">
      <div className="flex items-center justify-center">
        <div className="relative min-w-full h-[60px] mobile:h-[150px] tablet:h-[280px] laptop:h-[350px] rounded-[25px] border border-secondary-200 overflow-hidden">
          <Image
            src={bannerImages[currentIndex]}
            alt="배너 이미지"
            fill
            priority
            className="object-cover bg-center rounded-[25px]"
          />

          <button
            onClick={prevSlide}
            className="absolute top-1/2 -translate-y-1/2 left-4 z-10 text-white bg-black/30 hover:bg-black/50 p-1 rounded-full"
          >
            <ChevronLeft size={32} />
          </button>

          <button
            onClick={nextSlide}
            className="absolute top-1/2 -translate-y-1/2 right-4 z-10 text-white bg-black/30 hover:bg-black/50 p-1 rounded-full"
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
