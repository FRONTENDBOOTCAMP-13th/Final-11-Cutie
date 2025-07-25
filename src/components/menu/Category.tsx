'use client';

import '@app/globals.css';
import { ChevronDown } from 'lucide-react';
import { FilterToggleCategory } from '@components/menu/FilterToggle';
import { useState } from 'react';

/* 상품 리스트 카테고리 */

// type Props = {
//   selectedCategory: string;
//   setSelectedCategory: string;
//   onCategoryChange: (category: string) => void;
// };

export function ProductListCategory() {
  const categories = ['전체 프로젝트', '진행중인 프로젝트', '공개 예정 프로젝트', '성사된 프로젝트'];
  const [selectedCategory, setSelectedCategory] = useState('전체 프로젝트');

  const innerStyle = 'w-[480px] h-[95px] normal-18 flex flex-col gap-[20px] ' + 'tablet:w-auto ' + 'laptop:gap-[40px]';
  const titleStyle = 'font-[700] ' + 'tablet:text-[20px] ' + 'laptop:text-[24px]';
  const projectListStyle =
    'flex h-[30px] items-center text-[14px] cursor-pointer ' + 'tablet:gap-[10px] ' + 'laptop:text-[16px]';
  const nowProjectStyle = ' font-[700] p-[5] border-[0.8px] border-[#B8B8BD] rounded-[50px] ' + 'tablet:p-[10px]';
  const projectStyle = 'p-[5px] border-[0.8px] border-[#B8B8BD] rounded-[50px] ' + 'tablet:p-[10px]';

  return (
    <div className={innerStyle}>
      <span className={titleStyle}>의류 · 잡화</span>

        <div className='flex tablet:flex-row justify-between flex-col gap-5'>
          <ul className={projectListStyle}>
            {categories.map(category => (
              <li
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={category === selectedCategory ? nowProjectStyle : projectStyle}
              >
                {category}
              </li>
            ))}
          </ul>
          <FilterToggleCategory />
        </div>
    </div>
  );
}

export function SelectBox({ isDropdown, mainText }: { isDropdown?: boolean; mainText?: string }) {
  /* 화면 별 폰트 사이즈 */
  const textSize_480 = 'max-[480px]:text-[10px] '; // 0px ~ 479px 까지 적용
  const textSize_768 = 'mobile:text-[12px] '; // 480px ~ 767px 까지 적용
  const textSize_1280 = 'tablet:text-[12px] '; // 768px ~ 1279px 까지 적용
  const textSize_max = 'laptop:text-[16px] '; // 1280px ~ 에 적용

  return (
    <button
      className={`flex justify-between items-center border border-font-900 p-[10px] cursor-pointer text-font-400 hover:text-font-900 ${isDropdown ? 'rounded-t-sm' : 'rounded-sm'}`}
    >
      <span className={'normal-14 ' + textSize_480 + textSize_768 + textSize_1280 + textSize_max}>
        {/* 카테고리를 선택해주세요. */}
        {mainText}
      </span>
      <ChevronDown size={13} />
    </button>
  );
}

// 선택카테고리 드롭다운 (이어지는 부분때문에 border-t-0 이거 넣어뒀음 )
export function SelectBoxDrop() {
  return (
    <section>
      <SelectBox isDropdown={true} />
      <ul className="border border-font-900 border-t-0 w-[537px] text-font-900 rounded-b-sm p-[10px] normal-14 laptop:text-[16px]">
        <li className="p-[10px] cursor-pointer">일반문의</li>
        <li className="p-[10px] cursor-pointer">신고/이용제한</li>
        <li className="p-[10px] cursor-pointer">개선제안</li>
      </ul>
    </section>
  );
}
