import { SelectBox } from '@components/menu/Category';

/* 프로젝트 카테고리 */
export function ProjectCategory() {
  return (
    <div className="flex flex-col gap-[15px] text-[11px]">
      <span className="flex gap-[8px] items-center">
        <span className="normal-13 font-[700]">
          프로젝트 카테고리<span className="text-error">*</span>
        </span>
        <span className='className="normal-11 font-[400] text-[#686871]'>프로젝트의 유형을 설정해주세요.</span>
      </span>

      <SelectBox isDropdown={true} mainText={'특별기획 ‧ 시즌기획'} />
    </div>
  );
}
