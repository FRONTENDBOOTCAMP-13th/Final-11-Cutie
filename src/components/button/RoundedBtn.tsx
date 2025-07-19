import '@app/globals.css';

// 카테고리-클릭 버튼(호버기능)
export function CategoryButton() {
  return (
    <div className="flex flex-wrap gap-4">
      {/* 회색 버튼 */}
      <button
        className="
          flex items-center justify-center
          rounded-[50px] border
          bg-white text-gray-900 border-secondary-200
          hover:bg-primary-800 hover:text-white
          medium-14 px-[32px] py-[11px]
          laptop:text-[16px] laptop:px-[32px] laptop:py-[11px]
        "
      >
        특별기획 · 시즌 기획
      </button>

      {/* 파란 버튼 */}
      <button
        className="
          flex items-center justify-center
          rounded-[50px] border
          bg-primary-800 text-white
          hover:border-secondary-200 hover:text-gray-900 hover:bg-white
          medium-14 px-[32px] py-[11px]
          laptop:text-[16px] laptop:px-[32px] laptop:py-[11px]
        "
      >
        특별기획 · 시즌 기획
      </button>
    </div>
  );
}

// 카테고리 버튼 리스트 (호버가능, 반응형)
export function CategoryBar() {
  return (
    <div className="flex flex-wrap gap-4">
      <button
        className="
          flex items-center justify-center
          rounded-[50px] border
          bg-white text-gray-900 border-secondary-200
          hover:bg-primary-800 hover:text-white
          medium-14 px-[32px] py-[11px]
          laptop:text-[16px] laptop:px-[32px] laptop:py-[11px]
        "
      >
        푸드
      </button>
      <button
        className="
          flex items-center justify-center
          rounded-[50px] border
          bg-white text-gray-900 border-secondary-200
          hover:bg-primary-800 hover:text-white
          medium-14 px-[32px] py-[11px]
          laptop:text-[16px] laptop:px-[32px] laptop:py-[11px]
        "
      >
        의류 · 잡화
      </button>
      <button
        className="
          flex items-center justify-center
          rounded-[50px] border
          bg-white text-gray-900 border-secondary-200
          hover:bg-primary-800 hover:text-white
          medium-14 px-[32px] py-[11px]
          laptop:text-[16px] laptop:px-[32px] laptop:py-[11px]
        "
      >
        홈 · 리빙
      </button>
      <button
        className="
          flex items-center justify-center
          rounded-[50px] border
          bg-white text-gray-900 border-secondary-200
          hover:bg-primary-800 hover:text-white
          medium-14 px-[32px] py-[11px]
          laptop:text-[16px] laptop:px-[32px] laptop:py-[11px]
        "
      >
        문구
      </button>
      <button
        className="
          flex items-center justify-center
          rounded-[50px] border
          bg-white text-gray-900 border-secondary-200
          hover:bg-primary-800 hover:text-white
          medium-14 px-[32px] py-[11px]
          laptop:text-[16px] laptop:px-[32px] laptop:py-[11px]
        "
      >
        뷰티 · 향수
      </button>
      <button
        className="
          flex items-center justify-center
          rounded-[50px] border
          bg-white text-gray-900 border-secondary-200
          hover:bg-primary-800 hover:text-white
          medium-14 px-[32px] py-[11px]
          laptop:text-[16px] laptop:px-[32px] laptop:py-[11px]
        "
      >
        특별기획 · 시즌 기획
      </button>
      <button
        className="
          flex items-center justify-center
          rounded-[50px] border
          bg-white text-gray-900 border-secondary-200
          hover:bg-primary-800 hover:text-white
          medium-14 px-[32px] py-[11px]
          laptop:text-[16px] laptop:px-[32px] laptop:py-[11px]
        "
      >
        테크
      </button>
      <button
        className="
          flex items-center justify-center
          rounded-[50px] border
          bg-white text-gray-900 border-secondary-200
          hover:bg-primary-800 hover:text-white
          medium-14 px-[32px] py-[11px]
          laptop:text-[16px] laptop:px-[32px] laptop:py-[11px]
        "
      >
        키즈
      </button>
      <button
        className="
          flex items-center justify-center
          rounded-[50px] border
          bg-white text-gray-900 border-secondary-200
          hover:bg-primary-800 hover:text-white
          medium-14 px-[32px] py-[11px]
          laptop:text-[16px] laptop:px-[32px] laptop:py-[11px]
        "
      >
        게임
      </button>
    </div>
  );
}

// 파란색 카테고리 버튼 리스트(반응형)
export function BlueCategoryBar() {
  return (
    <div className="flex flex-wrap gap-4">
      <button
        className="
          flex items-center justify-center
          rounded-[50px] border
          bg-primary-800 text-white
          medium-14 px-[32px] py-[11px]
          laptop:text-[16px] laptop:px-[32px] laptop:py-[11px]
        "
      >
        푸드
      </button>
      <button
        className="
          flex items-center justify-center
          rounded-[50px] border
          bg-primary-800 text-white
          medium-14 px-[32px] py-[11px]
          laptop:text-[16px] laptop:px-[32px] laptop:py-[11px]
        "
      >
        의류 · 잡화
      </button>
      <button
        className="
          flex items-center justify-center
          rounded-[50px] border
          bg-primary-800 text-white
          medium-14 px-[32px] py-[11px]
          laptop:text-[16px] laptop:px-[32px] laptop:py-[11px]
        "
      >
        홈 · 리빙
      </button>
      <button
        className="
          flex items-center justify-center
          rounded-[50px] border
          bg-primary-800 text-white
          medium-14 px-[32px] py-[11px]
          laptop:text-[16px] laptop:px-[32px] laptop:py-[11px]
        "
      >
        문구
      </button>
      <button
        className="
          flex items-center justify-center
          rounded-[50px] border
          bg-primary-800 text-white
          medium-14 px-[32px] py-[11px]
          laptop:text-[16px] laptop:px-[32px] laptop:py-[11px]
        "
      >
        뷰티 · 향수
      </button>
      <button
        className="
          flex items-center justify-center
          rounded-[50px] border
          bg-primary-800 text-white
          medium-14 px-[32px] py-[11px]
          laptop:text-[16px] laptop:px-[32px] laptop:py-[11px]
        "
      >
        특별기획 · 시즌 기획
      </button>
      <button
        className="
          flex items-center justify-center
          rounded-[50px] border
          bg-primary-800 text-white
          medium-14 px-[32px] py-[11px]
          laptop:text-[16px] laptop:px-[32px] laptop:py-[11px]
        "
      >
        테크
      </button>
      <button
        className="
          flex items-center justify-center
          rounded-[50px] border
          bg-primary-800 text-white
          medium-14 px-[32px] py-[11px]
          laptop:text-[16px] laptop:px-[32px] laptop:py-[11px]
        "
      >
        키즈
      </button>
      <button
        className="
          flex items-center justify-center
          rounded-[50px] border
          bg-primary-800 text-white
          medium-14 px-[32px] py-[11px]
          laptop:text-[16px] laptop:px-[32px] laptop:py-[11px]
        "
      >
        게임
      </button>
    </div>
  );
}
