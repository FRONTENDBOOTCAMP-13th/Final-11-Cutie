// 알림 메세지
export default function AlertMessage() {
  return (
    <div className="flex flex-col cursor-pointer semibold-14 gap-[10px] border px-[15px] py-[11px] border-error bg-white rounded-xl min-w-0">
      <span>[알림]</span>
      <div className="flex flex-col semibold-14 gap-[10px] min-w-0">
        <span className="truncate">후원이 완료되었습니다.</span>
        <span className="text-secondary-200 normal-12 flex-shrink-0">2023.05.08</span>
      </div>
    </div>
  );
}
