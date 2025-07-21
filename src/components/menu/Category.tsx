/* 상품 리스트 카테고리 */
export function ProductListKatekri() {
  const innerStyle = 'w-[480px] h-[95px] normal-18 flex flex-col gap-[10px] ' + 'tablet:w-auto ' + 'laptop:gap-[40px]';
  const titleStyle = 'font-[700] ' + 'tablet:text-[20px] ' + 'laptop:text-[24px]';
  const projectCategoryStyle = 'flex flex-col gap-[10px] ' + 'tablet:flex-row tablet:justify-between';
  const projectListStyle = 'flex justify-between text-[14px] ' + 'tablet:gap-[10px] ' + 'laptop:text-[16px]';
  const nowProjectStyle = 'font-[700] p-[5] border-[0.8px] border-[#B8B8BD] rounded-[50px] ' + 'tablet:p-[10px]';
  const projectStyle = 'p-[5px] border-[0.8px] border-[#B8B8BD] rounded-[50px] ' + 'tablet:p-[10px]';
  const sortOptionStyle = 'flex justify-end ';
  const sortOptionTitleStyle =
    'relative font-[700] text-[14px] p-[5px] border-[1px] border-secondary-200 text-[#686871] ' + 'tablet:p-[10px]';

  return (
    <div className={innerStyle}>
      <span className={titleStyle}>의류 · 잡화</span>
      <div className={projectCategoryStyle}>
        <ul className={projectListStyle}>
          <li className={nowProjectStyle}>전체 프로젝트</li>
          <li className={projectStyle}>진행중인 프로젝트</li>
          <li className={projectStyle}>공개 예정 프로젝트</li>
          <li className={projectStyle}>성사된 프로젝트</li>
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
            </div>
          </details>
        </div>
      </div>
    </div>
  );
}

import '@app/globals.css';
import { ChevronDown } from 'lucide-react';
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
