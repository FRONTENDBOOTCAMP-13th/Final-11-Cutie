export default function AccountLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {/* 마이페이지 공통 레이아웃 작성 */}
      {/* 공통 탭 컴포넌트는 제작 필요 */}
      <main>{children}</main> {/* 각 탭의 컨텐츠 연결될 자리*/}
    </>
  );
}
