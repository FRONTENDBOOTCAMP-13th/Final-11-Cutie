import { Search } from 'lucide-react';

export default function SearchPage() {
  return (
    <>
      <div className="flex justify-center">
        <div className="flex flex-col ">
          <form className=" flex items-center justify-between px-[18px] py-[14px] mt-[45px] gap-2 text-font-400 mb-5">
            {/* 검색 바 */}
            <input type="text" defaultValue="검색어를 입력해주세요." className=" w-full mobile:w-100 normal-14" />
            <button className="cursor-pointer">
              <Search className=" hover:text-font-900" />
            </button>
          </form>

          {/* API로 날짜 가져와야 함 */}
          <section className="flex justify-between px-4 normal-14 text-font-900 mb-[30px]">
            <span>인기 검색어</span>
            <span className="text-font-400">2025.08.08</span>
          </section>
          {/* 인기 목록 */}
          <ol className="list-decimal px-8">
            <li>타로</li>
            <li>게임</li>
            <li>향수</li>
            <li>개구리 중사 캐로캐로캐로캐로 티셔츠</li>
            <li>키링</li>
            <li>타로카드</li>
            <li>재밌는 보드게임</li>
            <li>한복</li>
            <li>생일선물</li>
            <li>의미있는 선물</li>
          </ol>
        </div>
      </div>
    </>
  );
}
