'use client';
import '@app/globals.css';

// 카테고리-클릭 버튼(호버기능)
export function CategoryButton() {
  return (
    <div className="flex flex-wrap gap-4">
      <button className="medium-14 flex items-center justify-center h-[39px] px-[32px] py-[11px] rounded-[50px] bg-white text-gray-900 border border-secondary-200  hover:bg-primary-800 hover:text-white ">
        특별기획 · 시즌 기획
      </button>
      <button className="medium-14 flex items-center justify-center h-[39px] px-[32px] py-[11px] rounded-[50px] bg-primary-800 text-white">
        특별기획 · 시즌 기획
      </button>
    </div>
  );
}

// 카테고리 버튼 리스트
export function CategoryBar() {
  return (
    <div className="flex flex-wrap gap-4">
      <div className="flex flex-wrap gap-4">
        <button className="medium-14 inline-flex items-center justify-center h-[39px] px-[32px] py-[11px] gap-1 rounded-[50px] bg-white text-gray-900 border border-secondary-200 hover:bg-primary-800 hover:text-white">
          푸드
        </button>
        <button className="medium-14 inline-flex items-center justify-center h-[39px] px-[32px] py-[11px] gap-1 rounded-[50px] bg-white text-gray-900 border border-secondary-200 hover:bg-primary-800 hover:text-white">
          의류 · 잡화
        </button>
        <button className="medium-14 inline-flex items-center justify-center h-[39px] px-[32px] py-[11px] gap-1 rounded-[50px] bg-white text-gray-900 border border-secondary-200 hover:bg-primary-800 hover:text-white">
          홈 · 리빙
        </button>
        <button className="medium-14 inline-flex items-center justify-center h-[39px] px-[32px] py-[11px] gap-1 rounded-[50px] bg-white text-gray-900 border border-secondary-200 hover:bg-primary-800 hover:text-white">
          문구
        </button>
        <button className="medium-14 inline-flex items-center justify-center h-[39px] px-[32px] py-[11px] gap-1 rounded-[50px] bg-white text-gray-900 border border-secondary-200 hover:bg-primary-800 hover:text-white">
          뷰티 · 향수
        </button>
        <button className="medium-14 inline-flex items-center justify-center h-[39px] px-[32px] py-[11px] gap-1 rounded-[50px] bg-white text-gray-900 border border-secondary-200 hover:bg-primary-800 hover:text-white">
          특별기획 · 시즌 기획
        </button>
        <button className="medium-14 inline-flex items-center justify-center h-[39px] px-[32px] py-[11px] gap-1 rounded-[50px] bg-white text-gray-900 border border-secondary-200 hover:bg-primary-800 hover:text-white">
          테크
        </button>
        <button className="medium-14 inline-flex items-center justify-center h-[39px] px-[32px] py-[11px] gap-1 rounded-[50px] bg-white text-gray-900 border border-secondary-200 hover:bg-primary-800 hover:text-white">
          키즈
        </button>
        <button className="medium-14 inline-flex items-center justify-center h-[39px] px-[32px] py-[11px] gap-1 rounded-[50px] bg-white text-gray-900 border border-secondary-200 hover:bg-primary-800 hover:text-white">
          게임
        </button>
      </div>

      <br />

      <div className="flex flex-wrap gap-4">
        <button className="medium-14 flex items-center justify-center h-[39px] px-[32px] py-[11px] rounded-[50px] bg-primary-800 text-white">
          푸드
        </button>
        <button className="medium-14 flex items-center justify-center h-[39px] px-[32px] py-[11px] rounded-[50px] bg-primary-800 text-white">
          의류 · 잡화
        </button>
        <button className="medium-14 flex items-center justify-center h-[39px] px-[32px] py-[11px] rounded-[50px] bg-primary-800 text-white">
          홈 · 리빙
        </button>
        <button className="medium-14 flex items-center justify-center h-[39px] px-[32px] py-[11px] rounded-[50px] bg-primary-800 text-white">
          문구
        </button>
        <button className="medium-14 flex items-center justify-center h-[39px] px-[32px] py-[11px] rounded-[50px] bg-primary-800 text-white">
          뷰티 · 향수
        </button>
        <button className="medium-14 flex items-center justify-center h-[39px] px-[32px] py-[11px] rounded-[50px] bg-primary-800 text-white">
          특별기획 · 시즌 기획
        </button>
        <button className="medium-14 flex items-center justify-center h-[39px] px-[32px] py-[11px] rounded-[50px] bg-primary-800 text-white">
          테크
        </button>
        <button className="medium-14 flex items-center justify-center h-[39px] px-[32px] py-[11px] rounded-[50px] bg-primary-800 text-white">
          키즈
        </button>
        <button className="medium-14 flex items-center justify-center h-[39px] px-[32px] py-[11px] rounded-[50px] bg-primary-800 text-white">
          게임
        </button>
      </div>
    </div>
  );
}
