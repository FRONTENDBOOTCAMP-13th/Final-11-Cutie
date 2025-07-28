'use client'

import { ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';

export interface FilterToggleCategoryProps {
  filterList: string[];
  className?: string;
}

// className에 width 값만 주면 됨!!
export function FilterToggleCategory({ filterList, className='' } : FilterToggleCategoryProps) {
  const [ selectedFilter, setSelectedFilter ] = useState(filterList[0]);
  const [ isOpen, setIsOpen ] = useState(false);

  return (
    <div className={`z-10 relative bg-white ${className}`}>
      {/* 필터 버튼 */}
      <div>
        <button
        name="filter"
        type="button"
        onClick={() => setIsOpen(prev => !prev)} 
        className=' w-full flex p-[10px] border-1 border-font-400 items-center justify-between cursor-pointer'>
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
        <div className="medium-14 w-full border bg-white border-font-400 absolute top-full left-0 ">
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
