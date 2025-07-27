import { StarTitle } from '@components/common/etc';
import { SelectBox } from '@components/menu/Category';

/* 프로젝트 카테고리 */
export function ProjectCategory() {
  return (
    <div className="flex flex-col gap-[15px] text-[11px]">
      <StarTitle title=" 프로젝트 카테고리" subTitle="프로젝트의 유형을 설정해주세요." />
      <SelectBox isDropdown={true} mainText={'특별기획 ‧ 시즌기획'} />
    </div>
  );
}
