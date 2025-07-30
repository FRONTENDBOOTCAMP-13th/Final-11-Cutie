import Header from '@components/common/Header';
import { Footer } from '@components/common/Footer';

// 메타데이터 완성 후 정리하여 추가할 것
export const metadata = {
  title: '펀드림',
  description: '멋쟁이사자처럼 프론트엔드 13기 파이널프로젝트 11팀 1더하기1은귀요미',
};

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main className="pt-[95px] mobile:pt-[98px] tablet:pt-[125px] laptop:pt-[134px]">{children}</main>
      <Footer />
    </>
  );
}
