import AlertMessage from './AlertMessage';

// 알림 부분
export default function Alert() {
  return (
    <div className="hidden max-h-[910px] laptop:max-h-[1265px] overflow-y-auto tablet:flex flex-col gap-[8px] noraml-14 font-[600] border border-primary-800 px-[6px] py-[11px] rounded-[8px] bg-primary-50 min-w-0">
      <span className="px-[24px] py-[6px] semibold-14 border-[1px] border-error w-fit rounded-[13px] text-error bg-white flex-shrink-0">
        알림
      </span>
      <AlertMessage />
      <AlertMessage />
      <AlertMessage />
      <AlertMessage />
      <AlertMessage />
      <AlertMessage />
      <AlertMessage />
      <AlertMessage />
    </div>
  );
}
