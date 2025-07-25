import ProfileImg from '@assets/icons/profile.svg';
import { ProductTabs } from '@components/tab/myPageTab';
import Link from 'next/link';

export default function AccountLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {/* 마이페이지 공통 레이아웃 작성 */}
      {/* 공통 컴포넌트*/}
      <div className="p-[24px] tablet:p-[40px] laptop:px-[90px] laptop:py-[64px] tablet:grid tablet:grid-cols-[minmax(0,_0.7fr)_minmax(0,_0.3fr)] tablet:gap-[21px]">
        {/* 프로필, 상품 소개 */}
        <div className="flex flex-col border-[0.5px] rounded-t-[28px] rounded-b-[5px] border-primary-800 min-w-0">
          {/* 프로필 */}
          <Profile />

          {/* 상품 소개 */}
          <section className="min-h-0 flex flex-col">
            <h2 className="sr-only">My Page</h2>
            <ProductTabs />
            <div className="bg-primary-50 h-[737px] laptop:h-[1110px] rounded-b-[5px] p-[12px] mobile:p-[16px] tablet:p-[13px] laptop:p-[15px] flex-1 min-h-0">
              <div className="bg-white p-10 h-full overflow-y-auto min-w-0">{children}</div>
            </div>
          </section>
        </div>

        {/* 알림 */}
        <Alert />
      </div>
    </>
  );
}

// 프로필 부분
function Profile() {
  return (
    <div className="flex justify-between px-[21px] py-[15px] mobile:px-[24px] mobile:py-[24px] tablet:px-[39px] tablet:py-[36px] laptop:pt-[33px] laptop:pb-[21px] laptop:px-[44px] rounded-t-[28px] border-b-[1px] bg-white border-primary-800 min-w-0">
      <div className="flex gap-[10px] items-center min-w-0">
        <ProfileImg width={27} height={27} className="tablet:w-[40px] h-[40px] flex-shrink-0" />
        <span className="normal-14 font-[700] tablet:text-[20px] truncate">홍길동</span>
      </div>
      <div className="flex gap-[11px] normal-14 font-[600] flex-shrink-0">
        <Link
          href={'/edit'}
          className="cursor-pointer flex items-center px-[7px] py-[4px] border-[1px] rounded-[8px] text-primary-800 whitespace-nowrap"
        >
          프로필 편집
        </Link>

        <button className="cursor-pointer px-[7px] py-[4px] border-[1px] rounded-[8px] text-error tablet:hidden whitespace-nowrap">
          알림
        </button>
      </div>
    </div>
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

// 알림 메세지
function AlertMessage() {
  return (
    <div className="flex flex-col cursor-pointer semibold-14 gap-[4px] border px-[8px] py-[6px] border-error bg-white rounded-[6px] min-w-0">
      <span>[알림]</span>
      <div className="flex flex-col semibold-14 gap-[1.5px] min-w-0">
        <span className="truncate">후원이 완료되었습니다.</span>
        <span className="text-secondary-200 normal-12 flex-shrink-0">2023.05.08</span>
      </div>
    </div>
  );
}
