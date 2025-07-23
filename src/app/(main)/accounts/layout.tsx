import ProfileImg from '@assets/icons/profile.svg';
import Link from 'next/link';

export default function AccountLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {/* 마이페이지 공통 레이아웃 작성 */}
      {/* 공통 컴포넌트*/}
      <div className="p-[24px] tablet:grid tablet:grid-cols-[0.7fr_0.3fr] tablet:gap-[13px] tablet:p-[40px]">
        {/* 프로필, 상품 소개 */}
        <div className="flex flex-col border-[0.5px] rounded-[14px] border-primary-800">
          {/* 프로필 */}
          <Profile />

          {/* 상품 소개 */}
          <section className="p-[10px]">
            <h2 className="sr-only">My Page</h2>
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
    <div className="flex justify-between px-[25px] py-[15px] border-b-[1px] border-primary-800">
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
    <div className="hidden tablet:flex flex-col gap-[8px] noraml-14 font-[600] border border-primary-800 px-[6px] py-[11px] rounded-[8px] bg-primary-50">
      <span className="px-[24px] py-[6px] border-[1px] border-error w-fit rounded-[13px] text-error bg-white">
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
      <AlertMessage />
    </div>
  );
}

function AlertMessage() {
  return (
    <div className="flex flex-col gap-[4px] border px-[8px] py-[6px] border-error bg-white rounded-[6px]">
      <span>[알림]</span>
      <div className="flex flex-col gap-[1.5px]">
        <span>후원이 완료되었습니다.</span>
        <span className="text-secondary-200">2023.05.08</span>
      </div>
    </div>
  );
}
