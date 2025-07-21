import '@app/globals.css';
import { ChevronDown } from 'lucide-react';
import { FilterToggleCategory, FilterToggleClose, FilterToggleOpen } from '@components/menu/FilterToggle';
import { useState } from 'react';


/* 상품 리스트 카테고리 */
// onCategoryChange 기능 만들어야함
type Props = {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
};

export function ProductListCategory({ selectedCategory, onCategoryChange }: Props) {
  const categories = ['전체 프로젝트', '진행중인 프로젝트', '공개 예정 프로젝트', '성사된 프로젝트'];
  const [isOpen, setIsOpen] = useState(false);

  const innerStyle = 'w-[480px] h-[95px] normal-18 flex flex-col gap-[10px] ' + 'tablet:w-auto ' + 'laptop:gap-[40px]';
  const titleStyle = 'font-[700] ' + 'tablet:text-[20px] ' + 'laptop:text-[24px]';
  const projectCategoryStyle = 'flex flex-col gap-[10px] ' + 'tablet:flex-row tablet:justify-between';
  const projectListStyle =
    'flex justify-between text-[14px] cursor-pointer ' + 'tablet:gap-[10px] ' + 'laptop:text-[16px]';
  const nowProjectStyle = 'font-[700] p-[5] border-[0.8px] border-[#B8B8BD] rounded-[50px] ' + 'tablet:p-[10px]';
  const projectStyle = 'p-[5px] border-[0.8px] border-[#B8B8BD] rounded-[50px] ' + 'tablet:p-[10px]';

  return (
    <div className={innerStyle}>
      <span className={titleStyle}>의류 · 잡화</span>
      <div className={projectCategoryStyle}>
        <ul className={projectListStyle}>
          {categories.map(category => (
            <li
              key={category}
              onClick={() => onCategoryChange(category)}
              className={category === selectedCategory ? nowProjectStyle : projectStyle}
            >
              {category}
            </li>
          ))}
        </ul>

        <div className={sortOptionStyle}>
          <details className={sortOptionTitleStyle}>
            <summary className="list-none flex gap-[5px] items-center">
              <span>추천순</span>
              <ChevronDown width={20} height={12} />
            </summary>
            <div className="absolute">
              <p>예시 1</p>
              <p>예시 2</p>
              <p>예시 3</p>


        <div className="w-[90px] relative">
          {/* 토글 닫힘 */}
          {!isOpen && (
            <div onClick={() => setIsOpen(true)}>
              <FilterToggleClose />
            </div>
          )}

          {/* 토글 열림 */}
          {isOpen && (
            <div className="absolute top-0 right-0 z-10">
              <div onClick={() => setIsOpen(false)}>
                <FilterToggleOpen />
              </div>
              <FilterToggleCategory />

            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export function SelectBox({ isDropdown }: { isDropdown?: boolean }) {
  return (
    <button
      className={`flex justify-between items-center border border-font-900 p-[10px] w-[537px] cursor-pointer text-font-400 hover:text-font-900 ${isDropdown ? 'rounded-t-sm' : 'rounded-sm'}`}
    >
      <span className="normal-14 laptop:text-[16px]">카테고리를 선택해주세요.</span>
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
