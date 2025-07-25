'use client'

import { ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';

// 필터 토글 펼친 상태
export function FilterToggleOpen() {
  return (
    <>
      <button
        name="filter"
        type="button"
        className="flex w-[90px] p-[10px] border-1 border-font-400 items-center justify-between cursor-pointer"
      >
        {/* p 안 props 필요 */}
        <p className="bold-14 text-font-400">추천순</p>
        {/* svg 부분 props 필요 */}
        <ChevronUp className="w-[20px] h-[14px] text-font-400 bg-white" />
      </button>
    </>
  );
}

// 필터 토글 카테고리 (추천순, 인기순, 최신순, 마감임박순)
// 선택된 것과 선택 중 반영 위한 props 필요
export function FilterToggleCategory() {
  const filterList = ['추천순', '인기순', '최신순', '마감임박순'];
  const [ selectedFilter, setSelectedFilter ] = useState('추천순');
  const [ isOpen, setIsOpen ] = useState(false);

  return (
    <div className='z-10 relative'>
      {/* 필터 버튼 */}
      <div>
        <button
        name="filter"
        type="button"
        onClick={() => setIsOpen(prev => !prev)} 
        className="flex w-[110px] p-[10px] border-1 border-font-400 items-center justify-between cursor-pointer">
        <p className="bold-14 text-font-400">{ selectedFilter }</p>

         {/* 드롭다운 열림 여부에 따라 아이콘 바꾸기 */}
         {isOpen ? (
           <ChevronUp className="w-[20px] h-[14px] text-font-400 bg-white" />
         ) : (
           <ChevronDown className="w-[20px] h-[14px] text-font-400 bg-white" />
         )}
      </button>
      </div>

      {/* 필터 리스트 */}
      {isOpen && (
        <div className="medium-14 w-[110px] border border-font-400 absolute top-full left-0 bg-white">
          {filterList.map(filter => (
            <button
              key={filter}
              onClick={() => {
                setSelectedFilter(filter);
                setIsOpen(false);
              }}
              className={`w-full text-right px-[10px] py-[5px] cursor-pointer hover:bg-primary-50
                ${filter === selectedFilter ? 'text-error bold-14' : 'text-font-400'}`}
                >
            {filter}
          </button>
        ))}
      </div>
      )}
    </div>
  );
}
