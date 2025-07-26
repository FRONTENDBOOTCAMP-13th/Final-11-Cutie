'use client';

import { useState } from 'react';
import ReviewModal from './ReviewModal';

export default function MyReviewTab() {
  const [showModal, setShowModal] = useState(false);
  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);
  return (
    <>
      <section className="p-[10px]">
        <div className="w-full text-center bold-14 laptop:text-[16px]">
          {/* 제목 부분 */}
          <div className="grid grid-cols-[auto_1fr_auto] overflow-hidden rounded-lg">
            <p className="bg-primary-800 px-2 min-w-10 py-1.5 text-white">NO</p>
            <p className="bg-primary-800 border-x border-white py-1.5 text-white">제목</p>
            <p className="bg-primary-800 px-2 hidden mobile:block mobile:min-w-24 py-1.5 text-white">날짜</p>
          </div>

          {/* 리뷰 리스트 부분 */}
          <div className="flex flex-col gap-3 normal-14 laptop:text-[16px] text-font-900 mt-3">
            {[...Array(7)].map((_, index) => (
              <div key={index} onClick={openModal} className="cursor-pointer">
                <ReviewItem num={index + 1} title="색깔이 생각보다 어둡네요" date="2025.08.08" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 모달 */}
      {showModal && <ReviewModal onClose={closeModal} />}
    </>
  );
}

type reviewItemProps = {
  num: number;
  title: string;
  date: string;
};

// 리뷰 항목
// title, date db 연동 필요
function ReviewItem({ num, title, date }: reviewItemProps) {
  return (
    <>
      <div className="grid grid-cols-[auto_1fr_auto] items-center border rounded-lg overflow-hidden hover:bg-primary-50 cursor-pointer">
        <div className="px-2 min-w-10 py-1.5">{num}</div>
        <div className="border-x px-2 text-left py-1.5 truncate">{title}</div>
        <div className="px-2 hidden mobile:block mobile:min-w-24 py-1.5">{date}</div>
      </div>
    </>
  );
}
