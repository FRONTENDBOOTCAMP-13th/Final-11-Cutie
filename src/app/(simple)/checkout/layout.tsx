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
      <InquiryHeader title="결제하기" />
      <main className="pt-[57px] mobile:pt-0 tablet:pt-0 laptop:pt-0">{children}</main>
      <Footer />
    </>
  );
}
