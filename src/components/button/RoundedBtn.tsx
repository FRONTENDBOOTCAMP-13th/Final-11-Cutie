'use client';
import '@app/globals.css';
import { useState } from 'react';

// 카테고리-클릭 버튼(호버기능)
export function RoundedBtn() {
  return (
    <button className="medium-14 flex items-center justify-center w-[175px] h-[39px] rounded-full bg-white text-gray-900 border border-secondary-200 font-medium hover:bg-primary-800 hover:text-white">
      특별기획 · 시즌 기획
    </button>
  );
}

// 카테고리 버튼 리스트
export function CategoryBar() {
  const categories = [
    '푸드',
    '의류 · 잡화',
    '홈 · 리빙',
    '문구',
    '뷰티 · 향수',
    '특별기획 · 시즌 기획',
    '테크',
    '키즈',
    '게임',
  ];

  const [selected, setSelected] = useState<string | null>(null);

  const handleClick = (category: string) => {
    setSelected(prev => (prev === category ? null : category));
  };

  return (
    <div className="flex flex-wrap gap-4">
      {categories.map(category => (
        <button
          key={category}
          onClick={() => handleClick(category)}
          className={`medium-14 flex items-center justify-center w-[175px] h-[39px] rounded-full border transition-colors
            ${
              selected === category
                ? 'bg-primary-800 text-white'
                : 'bg-white text-gray-900 border-secondary-200 hover:bg-primary-800 hover:text-white'
            }
          `}
        >
          {category}
        </button>
      ))}
    </div>
  );
}
