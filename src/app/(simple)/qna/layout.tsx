import { InquiryHeader } from '@components/common/Header';
import { Footer } from '@components/common/Footer';

// 메타데이터 완성 후 정리하여 추가할 것
export const metadata = {
  title: '펀드림 - 결제하기',
  description: '펀드림의 프로젝트를 펀딩해보세요.',
};

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {/* 헤더의 nav 카테고리 열릴 경우에 대한 클릭 이벤트 or hover 연동 필요 */}
      <InquiryHeader title="문의하기" />
      {/* 카테고리 오픈: main의 pt-[133px] 카테고리 오픈x: main의 pt-[188px] */}
      <main className="pt-[133px]">{children}</main>
      <Footer />
    </>
  );
}
