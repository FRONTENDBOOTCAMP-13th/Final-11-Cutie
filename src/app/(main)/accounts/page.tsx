import { PurchaseHistoryItemWrap } from '@components/product/ProductItem';

export default function Account() {
  return (
    <>
      {/* 구매내역이 디폴트 */}
      <PurchaseHistoryTab />
    </>
  );
}

// 구매내역 탭
function PurchaseHistoryTab() {
  return (
    <>
      <PurchaseHistoryItemWrap /> 
    </>
  );
}
