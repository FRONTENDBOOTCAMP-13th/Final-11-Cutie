import '@app/globals.css';

// 카테고리-클릭 버튼(호버기능)
export function RoundedBtn() {
  return (
    <button className="medium-14 flex items-center px-[24px] h-[39px] rounded-full bg-white text-gray-900 border border-secondary-200 font-medium hover:bg-primary-800 hover:text-white">
      특별기획 · 시즌 기획
    </button>
  );
}
