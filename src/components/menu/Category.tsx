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
