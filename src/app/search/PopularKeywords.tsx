export function PopularKeywords() {
  // 현재 날짜
  // const getCurrentDate = () => {
  //   const
  // }
  return (
    <>
      <section className="flex justify-between px-3 medium-14 tablet:text-[16px] text-font-900 mb-[30px]">
        <span>인기 검색어</span>
        <span className="text-font-400">2025.08.08</span>
      </section>
      {/* 인기 목록 */}
      <ol className="flex flex-col normal-14 tablet:text-[16px] gap-3 mobile:gap-5 list-decimal px-8">
        <li>박선영은 최고야</li>
        <li>나눈 코딩이 시러..</li>
        <li>하지만</li>
        <li>잘하고 싶어</li>
        <li>개구리 중사 캐로캐로캐로캐로 티셔츠</li>
        <li>타로카드</li>
        <li>재밌는 보드게임</li>
        <li>한복</li>
        <li>생일선물</li>
        <li>의미있는 선물</li>
      </ol>
    </>
  );
}
