import { PurchaseHistoryItemWrap } from '@components/product/ProductItem';

// 구매내역
export function PurchaseHistory() {
  return (
    <>
      <div className="flex flex-col gap-[10px]">
        <PurchaseHistoryItemWrap />
        <PurchaseHistoryItemWrap />
        <PurchaseHistoryItemWrap />
        <PurchaseHistoryItemWrap />
      </div>
    </>
  );
}
