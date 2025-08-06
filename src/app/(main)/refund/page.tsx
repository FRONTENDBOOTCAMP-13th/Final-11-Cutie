export default function refund() {
  return (
    <>
      <div className="px-5 py-8 text-font-900 break-keep ">
        <h1 className="bold-20 mb-5 tablet:text-[24px] laptop:text-[30px]">
          펀딩 프로젝트 종료 후 환불을 원하는 후원자가 있으면 어떡하죠?
        </h1>
        <div className="flex flex-col gap-3 medium-14 tablet:text-[16px] laptop:text-[20px] ">
          <span>
            펀딩 프로젝트 후원은 상품 구매가 아닌 제작비를 후원하는 일입니다. 창작자의 원활한 펀딩 프로젝트 진행을 위해,
            종료된 펀딩 프로젝트의 후원금 환불은 불가합니다.
          </span>
          <span>
            다만, 프로젝트에 따라서는 창작자가 예외적으로 후원금 환불에 대한 규정을 마련할 수도 있습니다. 창작자님이
            [프로젝트 정책] 및 [예상되는 어려움]에 기재하신 사항을 바탕으로 환불 가능 여부를 후원자에게 안내해주세요.
          </span>
          <span>일반적으로 환불 관련 정책은 다음 세 가지 중에서 제시할 수 있습니다.</span>
          <ol className="list-decimal list-inside">
            <li>환불 불가</li>
            <li>결제 및 펀드림 수수료 제외 환불</li>
            <li>수수료 포함 전액 환불</li>
          </ol>
          <span>
            정책에 따라 환불이 가능하다면 후원자의 환불 계좌 정보(은행, 계좌번호, 예금주명)를 직접 수집하여 송금하는
            방식으로 환불을 진행하실 수 있습니다.
          </span>
        </div>
      </div>
    </>
  );
}
