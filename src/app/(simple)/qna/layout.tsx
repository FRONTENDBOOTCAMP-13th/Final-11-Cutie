import { InquiryHeader } from '@components/common/Header';
import { Footer } from '@components/common/Footer';

// 메타데이터 완성 후 정리하여 추가할 것
export const metadata = {
  title: '펀드림 - 문의하기',
  description: '무엇을 도와드릴까요?',
};

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <InquiryHeader title="문의하기" />
      <main className="pt-[57px] mobile:mt-0">{children}</main>
      <Footer />
    </>
  );
}
