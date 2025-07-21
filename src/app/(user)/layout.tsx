import Logo from '../../../public/icons/logo.svg';

export default function UserLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex justify-center min-w-[320px] mobile:min-w-[745px]">
      <div className="flex flex-col w-[416px] mobile:w-[665px] h-fit mt-[77px] mb-[67px] bg-primary-50 rounded-[35px] mobile:rounded-[48px] tablet:rounded-[58px] px-[42px] py-[92px] mobile:px-[55px] mobile:py-[135px] gap-9 text-font-900 items-center">
        <h1>
          <Logo width={120} height={43} />
        </h1>
        <div className="text-center">
          <p className="bold-16">클라우드 펀딩</p>
          <p className="light-16 text-font-400">펀드림에서 꿈을 키워보세요</p>
        </div>
        {children}
      </div>
    </div>
  );
}
