import { SelectBox } from '@components/menu/Category';

/* 프로젝트 진행 일정 */
export function ProjectPlan() {
  return (
    <div className="flex flex-col gap-[15px] flex-1 w-[50%] laptop:w-auto">
      <span className="flex gap-[8px] items-center">
        <span className="normal-13 font-[700] text-[12px]">
          프로젝트 진행 일정<span className="text-error">*</span>
        </span>
      </span>

      <SelectBox isDropdown={true} mainText={'2025.08.08'} />
    </div>
  );
}
