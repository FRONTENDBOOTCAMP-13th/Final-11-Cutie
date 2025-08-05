import OrderHistoryPage from "@app/(main)/accounts/purchase/page";


export default function Account() {
  return (
    <>
      {/* 구매내역 탭이 디폴트 */}
      <PurchaseHistoryTab />
    </>
  );
}

// 구매내역 탭 밑에 리스트
function PurchaseHistoryTab() {
  return (
    <>
      <OrderHistoryPage />
    </>
  );
}
