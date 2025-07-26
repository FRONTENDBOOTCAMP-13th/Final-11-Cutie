import { StarTitle } from '@components/common/etc';
import { SelectBox } from '@components/menu/Category';

/* 프로젝트 진행 일정 */
export function ProjectPlan() {
  return (
    <div className="flex flex-col gap-[15px] flex-1 w-[50%] laptop:w-auto">
      <StarTitle title="프로젝트 진행 일정" />
      <SelectBox isDropdown={true} mainText={'2025.08.08'} />
    </div>
  );
}
