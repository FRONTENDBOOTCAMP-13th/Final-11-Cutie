import ProfileIcon from '@assets/icons/profile.svg';

// 후기 테이블
export function ReviewCard() {
  return (
    <div className="flex flex-col w-[440px] mobile:w-[568px] tablet:w-[880px] laptop:w-[984px] bg-primary-50">
      <div className="flex items-center gap-[10px]">
        <ProfileIcon className="w-[35px] h-[35px]" />

        {/* 닉네임 + 별점 */}
        <div className="flex flex-col">
          <span className="bold-14 laptop:text-[16px] text-font-900">닉네임</span>
          <div className="flex items-center ml-[-3px]">
            <span className="text-yellow-400 normal-14 laptop:text-[16px] ">⭐</span>
            <span className="normal-16 text-font-900">5.0</span>
          </div>
        </div>
      </div>
      <p className="normal-14 laptop:text-[16px] text-font-900 mt-[10px]">대만족 합니다.</p>
    </div>
  );
}
