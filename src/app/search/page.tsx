import { Footer } from '@components/common/Footer';
import { ArrowLeft, Search } from 'lucide-react';

export default function SearchPage() {
  return (
    <>
      <ArrowLeft className="m-3 tablet:hidden" size={20} />
      <div className=" mx-auto px-10 max-w-[1280px] mb-12 ">
        <div className="flex flex-col w-full">
          <form className=" border border-font-900 rounded-lg  flex items-center justify-between mt-2  tablet:mt-12 gap-2 text-font-400 mb-5">
            {/* 검색 바 */}
            <input
              type="text"
              placeholder="검색어를 입력해주세요."
              className="w-full px-4 h-12 mobile:h-14 normal-14 tablet:text-[16px] outline-none"
            />
            <button className=" pr-[18px] cursor-pointer">
              <Search className=" hover:text-font-900 w-4 h-4 tablet:w-5 tablet:h-5" />
            </button>
          </form>

          {/* API로 날짜 가져와야 함 */}
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
        </div>
      </div>
      <Footer className="fixed bottom-0" />
    </>
  );
}
