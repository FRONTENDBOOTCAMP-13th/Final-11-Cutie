import ProfileImg from '@assets/icons/profile.svg';

export default function AccountLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {/* 마이페이지 공통 레이아웃 작성 */}
      {/* 공통 컴포넌트*/}
      <div className="p-[24px]">
        <div className="flex flex-col border-[0.5px] rounded-[14px] border-primary-800">
          <Profile />

          <section className="p-[10px]">
            <h2 className="sr-only">My Page</h2>
            {children}
          </section>
        </div>
      </div>
    </>
  );
}

function Profile() {
  return (
    <div className="flex justify-between px-[25px] py-[15px] border-b-[1px] border-primary-800">
      <div className="flex gap-[10px] items-center">
        <ProfileImg width={27} height={27} />
        <span className="normal-14 font-[700]">홍길동</span>
      </div>
      <div className="flex gap-[11px] normal-14 font-[600]">
        <button className="cursor-pointer px-[7px] py-[4px] border-[1px] rounded-[8px] text-primary-800">
          프로필 편집
        </button>
        <button className="cursor-pointer px-[7px] py-[4px] border-[1px] rounded-[8px] text-error">알림</button>
      </div>
    </div>
  );
}
