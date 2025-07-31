import { Footer } from '@components/common/Footer';
import { ArrowLeft } from 'lucide-react';
import { SearchFunction } from './SearchFunction';
import { PopularKeywords } from './PopularKeywords';

export default function SearchPage() {
  return (
    <>
      {/* 모바일 버전: 뒤로가기 */}
      <ArrowLeft className="m-3 tablet:hidden" size={20} />

      <div className=" mx-auto px-10 max-w-[1280px] mb-12 ">
        <div className="flex flex-col w-full">
          <SearchFunction />
          <PopularKeywords />
        </div>
      </div>
      <Footer className="fixed bottom-0" />
    </>
  );
}
