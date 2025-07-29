import ProfileClient from './components/ProfileFunction';
import Alert from './components/Alert';
import { MyPageTabs } from './components/MyPageTabs';
import AlertMessage from './components/AlertMessage';

export default function AccountLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {/* 마이페이지 공통 레이아웃 작성 */}
      {/* 공통 컴포넌트*/}
      <div className="p-[24px] tablet:p-[40px] laptop:px-[90px] laptop:py-[64px] tablet:grid tablet:grid-cols-[minmax(0,_0.7fr)_minmax(0,_0.3fr)] tablet:gap-[21px]">
        {/* 프로필, 상품 소개 */}
        <div className="flex flex-col border-[0.5px] rounded-t-[28px] rounded-b-[5px] border-primary-800 min-w-0">
          {/* 프로필 */}
          <ProfileClient />

          {/* 상품 소개 */}
          <section>
            <h2 className="sr-only">My Page</h2>
            {/* 구매내역, 펀드, 장바구니, 후기 탭 */}
            <MyPageTabs />
            {/* 탭에 맞는 컨텐츠 보일 영역 */}
            <div className=" bg-primary-50 h-[737px] laptop:h-[1110px] rounded-b-[5px] p-[12px] mobile:p-[16px] tablet:p-[13px] laptop:p-[15px]">
              <div className="bg-white p-2 h-full overflow-y-auto custom-scroll">{children}</div>
            </div>
          </section>
        </div>

        {/* 알림 영역 */}
        <Alert />
      </div>
    </>
  );
}

// 알림 부분
function Alert() {
  return (
    <div className="hidden max-h-[910px] laptop:max-h-[1265px] overflow-y-auto tablet:flex flex-col gap-[8px] noraml-14 font-[600] border border-primary-800 px-[6px] py-[11px] rounded-[8px] bg-primary-50 min-w-0">
      <span className="px-[24px] py-[6px] semibold-14 border-[1px] border-error w-fit rounded-[13px] text-error bg-white flex-shrink-0">
        알림
      </span>
      <AlertMessage />
      <AlertMessage />
      <AlertMessage />
      <AlertMessage />
      <AlertMessage />
      <AlertMessage />
      <AlertMessage />
      <AlertMessage />
    </div>
  );
}
