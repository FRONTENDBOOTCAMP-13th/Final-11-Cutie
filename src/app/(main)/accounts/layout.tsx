import ProfileImg from '@assets/icons/profile.svg';
import Link from 'next/link';

export default function AccountLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {/* 마이페이지 공통 레이아웃 작성 */}
      {/* 공통 컴포넌트*/}
      <div className="p-[24px] tablet:p-[40px] laptop:px-[90px] laptop:py-[64px] tablet:grid tablet:grid-cols-[0.7fr_0.3fr] tablet:gap-[21px]">
        {/* 프로필, 상품 소개 */}
        <div className="flex flex-col border-[0.5px]  rounded-t-[28px] rounded-b-[5px] border-primary-800">
          {/* 프로필 */}
          <Profile />

          {/* 상품 소개 */}
          <section>
            <h2 className="sr-only">My Page</h2>
            <ProductTabs />
            {children}
          </section>
        </div>

        {/* 알림 */}
        <Alert />
      </div>
    </>
  );
}

function Profile() {
  return (
    <div className="flex justify-between px-[21px] py-[15px] mobile:px-[24px] mobile:py-[24px] tablet:px-[39px] tablet:py-[36px] laptop:pt-[33px] laptop:pb-[21px] laptop:px-[44px] rounded-t-[28px]  border-b-[1px] bg-white border-primary-800">
      <div className="flex gap-[10px] items-center">
        <ProfileImg width={27} height={27} className="tablet:w-[40px] h-[40px]" />
        <span className="normal-14 font-[700] tablet:text-[20px]">홍길동</span>
      </div>
      <div className="flex gap-[11px] normal-14 font-[600]">
        <Link
          href={'/edit'}
          className="cursor-pointer flex items-center px-[7px] py-[4px] border-[1px] rounded-[8px] text-primary-800"
        >
          프로필 편집
        </Link>

        <button className="cursor-pointer px-[7px] py-[4px] border-[1px] rounded-[8px] text-error tablet:hidden">
          알림
        </button>
      </div>
    </div>
  );
}

function Alert() {
  return (
    <div className="hidden max-h-[910px] laptop:max-h-[1265px] overflow-y-auto tablet:flex flex-col gap-[8px] noraml-14 font-[600] border border-primary-800 px-[6px] py-[11px] rounded-[8px] bg-primary-50">
      <span className="px-[24px] py-[6px] semibold-14 border-[1px] border-error w-fit rounded-[13px] text-error bg-white">
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

function AlertMessage() {
  return (
    <div className="flex flex-col cursor-pointer semibold-14 gap-[4px] border px-[8px] py-[6px] border-error bg-white rounded-[6px]">
      <span>[알림]</span>
      <div className="flex flex-col semibold-14 gap-[1.5px]">
        <span>후원이 완료되었습니다.</span>
        <span className="text-secondary-200 normal-12">2023.05.08</span>
      </div>
    </div>
  );
}

// 마이페이지탭
function ProductTabs() {
  return (
    <div className="bg-primary-50 font-pretendard w-full border-b border-primary-100">
      <nav className="flex w-full ">
        {['구매 내역', '펀드 페이지', '장바구니', '나의 후기'].map(tab => (
          <button
            key={tab}
            className="group flex-1 min-w-0 text-center px-0 py-[1.2vw]
                       overflow-hidden whitespace-nowrap
                       cursor-pointer text-[3.3vw] mobile:text-[14px] tablet:text-[16px] 
                       text-font-900 hover:text-primary-800 relative font-semibold"
          >
            <span>{tab}</span>
            <span
              className="absolute left-1/2 -translate-x-1/2 bottom-[2px] w-[80%] h-[0.6vw] 
                             bg-primary-800 opacity-0 group-hover:opacity-100 transition-opacity duration-200 rounded-[2px]"
            ></span>
          </button>
        ))}
      </nav>
    </div>
  );
}
