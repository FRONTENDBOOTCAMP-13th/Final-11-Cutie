import { ChevronUp } from 'lucide-react';

// 필터 토글 접힌 상태
export function FilterToggleClose() {
  return (
    <>
      <button
        name="filter"
        type="button"
        className="flex w-[83px] p-[10px] border-1 border-font-400 items-center justify-between"
      >
        {/* p 안 props 필요 */}
        <p className="bold-14 text-font-400">추천순</p>
        {/* svg 부분 props 필요 */}
        <ChevronUp className="w-[14px] h-[14px] text-font-400" />
      </button>
    </>
  );
}

// 필터 토글 펼친 상태
export function FilterToggleOpen() {
  return (
    <>
      <button
        name="filter"
        type="button"
        className="flex w-[83px] p-[10px] border-1 border-font-400 items-center justify-between"
      >
        {/* p 안 props 필요 */}
        <p className="bold-14 text-font-400">추천순</p>
        {/* svg 부분 props 필요 */}
        <ChevronUp className="w-[14px] h-[14px] text-font-400" />
      </button>
    </>
  );
}

// 필터 토글 카테고리 (추천순, 인기순, 최신순, 마감임박순)
// 선택된 것과 선택 중 반영 위한 props 필요
export function FilterToggleCategory() {
  const filterList = ['추천순', '인기순', '최신순', '마감임박순'];
  const selected = '추천순';

  return (
    <div className="medium-14 w-[83px] border border-font-400">
      {filterList.map(filter => (
        <button
          key={filter}
          className={`w-full text-right px-[10px] py-[5px] 
            ${selected === filter ? 'text-error bold-14' : 'text-font-400'}
            hover:bg-primary-50
          `}
        >
          {filter}
        </button>
      ))}
    </div>
  );
}
