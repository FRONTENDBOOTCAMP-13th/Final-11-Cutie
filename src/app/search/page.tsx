import { SearchFunction } from './SearchFunction';
import { PopularKeywords } from './PopularKeywords';
import { Footer } from '@components/common/Footer';
import BackArrow from './BackArrow';

export default function SearchPage() {
  return (
    <>
      {/* 모바일 버전: 뒤로가기 */}
      <BackArrow />
      <div className="pt-24 tablet:pt-14 mb-14 mx-auto px-10 max-w-[1280px]">
        <div className="flex flex-col w-full">
          <SearchFunction />
          <PopularKeywords />
        </div>
      </div>
      <Footer />
    </>
  );
}
