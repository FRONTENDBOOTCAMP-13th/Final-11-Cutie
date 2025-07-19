import ToggleDown from '@assets/icons/toggle-arrow-down.svg';

/* 상품 리스트 카테고리 */
export function ProductListKatekri() {
  const innerStyle =
    'min-w-[480px] h-[95px] normal-18 flex flex-col gap-[10px] ' + 'mobile:min-w-[515px] ' + 'laptop:gap-[40px]';
  const titleStyle = 'font-[700] ' + 'mobile:text-[20px] ' + 'laptop:text-[24px]';
  const projectCategoryStyle = 'flex flex-col gap-[10px] ' + 'tablet:flex-row tablet:justify-between';
  const projectListStyle = 'flex gap-[10px] text-[14px] ' + 'laptop:text-[16px]';
  const nowProjectStyle = 'font-[700] p-[5] border-[0.8px] border-[#B8B8BD] rounded-[50px] ' + 'mobile:p-[10px]';
  const projectStyle = 'p-[5px] border-[0.8px] border-[#B8B8BD] rounded-[50px] ' + 'mobile:p-[10px]';
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
              <ToggleDown width={20} height={12} />
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
