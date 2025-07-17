//후기 테이블
export function ReviewTable() {
  return (
    <div>
      {/* 호버가능한 후기 테이블 */}
      <button className="flex items-center w-[247px] h-[16px] border border-primary-800 rounded-[4px] overflow-hidden font-pretendard font-normal hover:bg-primary-50 text-[5px]">
        <div className="w-[31px] h-full flex items-center justify-center border-r border-primary-800">1</div>
        <div className="flex-1 h-full flex items-center pl-[6px] border-r border-primary-800">
          색깔이 생각보다 어둡네요
        </div>
        <div className="w-[38px] h-full flex items-center justify-center">2024.05.05</div>
      </button>

      {/* 호버된 후기 테이블 UI */}
      <button className="flex items-center w-[247px] h-[16px] border bg-primary-50 border-primary-800 rounded-[4px] overflow-hidden font-pretendard font-normal text-[5px]">
        <div className="w-[31px] h-full flex items-center justify-center border-r border-primary-800">1</div>
        <div className="flex-1 h-full flex items-center pl-[6px] border-r border-primary-800">
          색깔이 생각보다 어둡네요
        </div>
        <div className="w-[38px] h-full flex items-center justify-center">2024.05.05</div>
      </button>
    </div>
  );
}
