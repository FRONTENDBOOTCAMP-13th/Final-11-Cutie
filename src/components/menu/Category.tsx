'use client';

import '@app/globals.css';
import { ChevronDown } from 'lucide-react';
import { useEffect, useState } from 'react';


interface SelectBoxProps {
  isDropdown?: boolean;
  mainText?: string;
  className?: string;
}

export function SelectBox({ isDropdown, mainText, className }: SelectBoxProps) {
  /* 화면 별 폰트 사이즈 */
  const textSize_480 = 'max-[480px]:text-[10px] '; // 0px ~ 479px 까지 적용
  const textSize_768 = 'mobile:text-[12px] '; // 480px ~ 767px 까지 적용
  const textSize_1280 = 'tablet:text-[12px] '; // 768px ~ 1279px 까지 적용
  const textSize_max = 'laptop:text-[16px] '; // 1280px ~ 에 적용

  return (
    <button
      className={`flex justify-between items-center border border-font-900 p-[10px] cursor-pointer text-font-400 hover:text-font-900 ${isDropdown ? 'rounded-t-sm' : 'rounded-sm'} ${className}`}
    >
      <span className={'normal-14 ' + textSize_480 + textSize_768 + textSize_1280 + textSize_max}>
        {/* 카테고리를 선택해주세요. */}
        {mainText}
      </span>
      <ChevronDown size={13} />
    </button>
  );
}

interface SelectBoxDropProps {
  mainText: string;
  dropsList: string[];
  saveList?: (setCategroy: string) => void;
}

// 선택카테고리 드롭다운 (이어지는 부분때문에 border-t-0 이거 넣어뒀음 )
export function SelectBoxDrop({ mainText, dropsList, saveList }: SelectBoxDropProps) {
  const [dropdown, setDropdown] = useState(false);
  const [select, setSelect] = useState(mainText);

  // 만약 저장함수를 불러 왔다면 저장
  useEffect(() => {
    if (saveList) {
      saveList(select);
    }
  });

  // 카테고리 리스트
  const textEl = dropsList.map(item => (
    <li className="p-[10px] cursor-pointer hover:bg-primary-50" key={item} onClick={() => setSelect(item)}>
      {item}
    </li>
  ));

  return (
    <section
      className="relative"
      onClick={() => {
        setDropdown(!dropdown);
      }}
    >
      <SelectBox isDropdown={dropdown} mainText={select} className="w-full" />
      <ul
        className={`${dropdown ? 'absolute' : 'hidden'} z-[1] w-full border bg-bg border-font-900 border-t-0 text-font-900 rounded-b-sm p-[10px] normal-14 laptop:text-[16px]`}
      >
        {textEl}
      </ul>
    </section>
  );
}
