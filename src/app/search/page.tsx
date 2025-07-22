import { Search } from 'lucide-react';

export default function SearchPage() {
  return (
    <>
      {/* 검색 바 */}
      <input type="text" defaultValue="검색어를 입력해주세요." />
      <Search />

      {/* API로 날짜 가져와야 함 */}
      <section>
        <span>인기 검색어</span>
        <span>2025.08.08</span>
      </section>
      {/* 인기 목록 */}
    </>
  );
}
