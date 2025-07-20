import { Header } from '@components/common/Header';
import { Footer } from '@components/common/Footer';

// 메타데이터 완성 후 정리하여 추가할 것
export const metadata = {
  title: '펀드림',
  description: '멋쟁이사자처럼 프론트엔드 13기 파이널프로젝트 11팀 1더하기1은귀요미',
};

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {/* 헤더의 nav 카테고리 열릴 경우에 대한 클릭 이벤트 or hover 연동 필요 */}
      <Header />
      {/* 카테고리 오픈x */}
      <main className="pt-[95px] mobile:pt-[98px] tablet:pt-[125px] laptop:pt-[134px]">{children}</main>
      {/* 카테고리 오픈o */}
      {/* <main className="bg-black pt-[94px] mobile:pt-[97px] tablet:pt-[179px] laptop:pt-[187px]">{children}</main> */}
      <Footer />
    </>
  );
}
