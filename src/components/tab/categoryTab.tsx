import { PurchaseHistoryItemWrapContainer } from '@components/product/ProductItem';

// 구매내역
export function PurchaseHistoryTab() {
  return (
    <>
      <PurchaseHistoryItemWrapContainer />
    </>
  );
}

// 펀드 페이지
export function FundPageTab() {
  return (
    <>
      <PurchaseHistoryItemWrapContainer />
    </>
  );
}

export function MyReviewTab() {
  return (
    <>
      <section className="p-[10px]">
        <div className="w-full text-center bold-14 laptop:text-[16px]">
          {/* 제목 부분 */}
          <div className="grid grid-cols-[auto_1fr_auto] overflow-hidden rounded-lg">
            <p className="bg-primary-800 px-2 min-w-10 py-1.5 text-white">NO</p>
            <p className="bg-primary-800 border-x border-white py-1.5 text-white">제목</p>
            <p className="bg-primary-800 px-2 hidden mobile:block mobile:min-w-24 py-1.5 text-white">날짜</p>
          </div>

          {/* 리뷰 부분 */}
          <div className="flex flex-col gap-3 normal-14 laptop:text-[16px] text-font-900 mt-3">
            <div className="grid grid-cols-[auto_1fr_auto] items-center border rounded-lg overflow-hidden">
              <div className="px-2 min-w-10 py-1.5">1</div>
              <div className="border-x px-2 text-left py-1.5 truncate">색깔이 생각보다 어둡네요</div>
              <div className="px-2 hidden mobile:block mobile:min-w-24 py-1.5">2025.08.08</div>
            </div>
            <div className="grid grid-cols-[auto_1fr_auto] items-center border rounded-lg overflow-hidden">
              <div className="px-2 min-w-10 py-1.5">1</div>
              <div className="border-x px-2 text-left py-1.5 truncate">색깔이 생각보다 어둡네요</div>
              <div className="px-2 hidden mobile:block mobile:min-w-24 py-1.5">2025.08.08</div>
            </div>
            <div className="grid grid-cols-[auto_1fr_auto] items-center border rounded-lg overflow-hidden">
              <div className="px-2 min-w-10 py-1.5">1</div>
              <div className="border-x px-2 text-left py-1.5 truncate">색깔이 생각보다 어둡네요</div>
              <div className="px-2 hidden mobile:block mobile:min-w-24 py-1.5">2025.08.08</div>
            </div>
            <div className="grid grid-cols-[auto_1fr_auto] items-center border rounded-lg overflow-hidden">
              <div className="px-2 min-w-10 py-1.5">1</div>
              <div className="border-x px-2 text-left py-1.5 truncate">색깔이 생각보다 어둡네요</div>
              <div className="px-2 hidden mobile:block mobile:min-w-24 py-1.5">2025.08.08</div>
            </div>
            <div className="grid grid-cols-[auto_1fr_auto] items-center border rounded-lg overflow-hidden">
              <div className="px-2 min-w-10 py-1.5">1</div>
              <div className="border-x px-2 text-left py-1.5 truncate">색깔이 생각보다 어둡네요</div>
              <div className="px-2 hidden mobile:block mobile:min-w-24 py-1.5">2025.08.08</div>
            </div>
            <div className="grid grid-cols-[auto_1fr_auto] items-center border rounded-lg overflow-hidden">
              <div className="px-2 min-w-10 py-1.5">1</div>
              <div className="border-x px-2 text-left py-1.5 truncate">색깔이 생각보다 어둡네요</div>
              <div className="px-2 hidden mobile:block mobile:min-w-24 py-1.5">2025.08.08</div>
            </div>
            <div className="grid grid-cols-[auto_1fr_auto] items-center border rounded-lg overflow-hidden">
              <div className="px-2 min-w-10 py-1.5">1</div>
              <div className="border-x px-2 text-left py-1.5 truncate">색깔이 생각보다 어둡네요</div>
              <div className="px-2 hidden mobile:block mobile:min-w-24 py-1.5">2025.08.08</div>
            </div>
            <div className="grid grid-cols-[auto_1fr_auto] items-center border rounded-lg overflow-hidden">
              <div className="px-2 min-w-10 py-1.5">1</div>
              <div className="border-x px-2 text-left py-1.5 truncate">색깔이 생각보다 어둡네요</div>
              <div className="px-2 hidden mobile:block mobile:min-w-24 py-1.5">2025.08.08</div>
            </div>
            <div className="grid grid-cols-[auto_1fr_auto] items-center border rounded-lg overflow-hidden">
              <div className="px-2 min-w-10 py-1.5">1</div>
              <div className="border-x px-2 text-left py-1.5 truncate">색깔이 생각보다 어둡네요</div>
              <div className="px-2 hidden mobile:block mobile:min-w-24 py-1.5">2025.08.08</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
