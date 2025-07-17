//알림창 컴포넌트
export function NoticeWindow() {
  return (
    <div className="flex justify-between items-center w-[285px] h-[95px] pt-[17px] pr-[19px] pb-[23px] pl-[15px] border border-error rounded-[12px]">
      <div>
        <p className="semibold-12 text-gray-900 mb-[9px]">[ 알림 ]</p>
        <p className="semibold-12 text-gray-900 mb-[9px]">후원이 완료되었습니다.</p>
        <p className="normal-8 text-secondary-200">2023.05.08</p>
      </div>
      <span className="text-[18px] text-black">›</span>
    </div>
  );
}

//알림 버튼 컴포넌트
export function NoticeButton() {
  return (
    <div>
      <div className="flex justify-between items-center w-[105px] h-[35px] pt-[5px] pr-[7px] pb-[7px] pl-[6px] border border-error hover:bg-secondary-50 rounded-[4px]">
        <div>
          <p className="font-semibold font-pretendard text-[5px] text-gray-900 mb-[1px]">[ 알림 ]</p>
          <p className="font-semibold font-pretendard text-[5px] text-gray-900 mb-[1px]">후원이 완료되었습니다.</p>
          <p className="font-normal font-pretendard text-[5px] text-secondary-200">2023.05.08</p>
        </div>
        <span className="text-[10px] mb-[20px] text-black">›</span>
      </div>
      <div className="flex justify-between items-center w-[105px] h-[35px] pt-[5px] pr-[7px] pb-[7px] pl-[6px] border border-error bg-secondary-50 rounded-[4px]">
        <div>
          <p className="font-semibold font-pretendard text-[5px] text-gray-900 mb-[1px]">[ 알림 ]</p>
          <p className="font-semibold font-pretendard text-[5px] text-gray-900 mb-[1px]">후원이 완료되었습니다.</p>
          <p className="font-normal font-pretendard text-[5px] text-secondary-200">2023.05.08</p>
        </div>
        <span className="text-[10px] mb-[20px] text-black">›</span>
      </div>
    </div>
  );
}
