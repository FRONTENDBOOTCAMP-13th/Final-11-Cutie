'use client';
import '@app/globals.css';
import { CheckCircle, UnCheckCircle } from '@components/checkbox/CircleCheckbox';
import { useState } from 'react';
import { userProjectStroe } from 'zustand/useProjectStore';

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
        특별기획 · 시즌기획
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
        특별기획 · 시즌기획
      </button>
    </div>
  );
}

// 카테고리 버튼 리스트 (호버가능, 반응형)
const categories = [
  '푸드',
  '의류 · 잡화',
  '홈 · 리빙',
  '문구',
  '뷰티 · 향수',
  '특별기획 · 시즌기획',
  '테크',
  '키즈',
  '게임',
];

export function CategoryBar() {
  const [selected, setSelected] = useState<string | null>(null);

  // 카테고리 변경 함수
  const setCategory = userProjectStroe(state => state.setCategory);

  const handleClick = (category: string) => {
    setCategory(category);
    setSelected(prev => (prev === category ? null : category));
  };

  return (
    <div className="flex flex-wrap gap-4">
      {categories.map(category => {
        const isSelected = selected === category;
        return (
          <button
            key={category}
            onClick={() => handleClick(category)}
            className={`
              flex items-center justify-center rounded-[50px] medium-14
              px-[32px] py-[11px] text-center transition-all duration-200
              laptop:text-[14px] laptop:px-[32px] laptop:py-[11px] cursor-pointer
              ${
                isSelected
                  ? 'bg-primary-800 text-white border-primary-800'
                  : 'bg-white text-gray-900 border border-secondary-200 hover:bg-primary-800 hover:text-white'
              }
            `}
          >
            {category}
          </button>
        );
      })}
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
        특별기획 · 시즌기획
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

// 개인과 사업자 둘 중 하나 선택
export function UserSelect() {
  const personal = '개인';
  const corporate = '사업자';
  const [type, setType] = useState(personal);

  return (
    <>
      {/* 개인/법인 선택 */}
      <div className="flex flex-row gap-[50px]">
        <button onClick={() => setType(personal)}>
          {type === personal ? <CheckCircle prop="개인" /> : <UnCheckCircle prop="개인" />}
        </button>
        <button onClick={() => setType(corporate)}>
          {type === corporate ? <CheckCircle prop="사업자" /> : <UnCheckCircle prop="사업자" />}
        </button>
      </div>
    </>
  );
}
