import { StarTitle } from '@components/common/etc';
import { SelectBoxDrop } from '@components/menu/Category';
import { userCategory } from 'zustand/userCategory';

/* 프로젝트 카테고리 */
export function ProjectCategory() {
  // 전 페이지에서 유저가 선택한 카테고리
  const category = userCategory(state => state.userCategory);

  // 현재 드롭 다운에 사용할 리스트
  const dropList = [
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

  return (
    <div className="flex flex-col gap-[15px] text-[11px]">
      <StarTitle
        title=" 프로젝트 카테고리"
        subTitle="프로젝트의 유형을 설정해주세요."
        className="max-[480px]:flex-col max-[480px]:items-start max-[480px]:gap-[4px] laptop:flex-col laptop:items-start"
      />

      <div>
        <SelectBoxDrop mainText={category} dropsList={dropList} />
      </div>
    </div>
  );
}
