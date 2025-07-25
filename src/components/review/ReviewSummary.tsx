import Image from 'next/image';
import ProfileIcon from '@assets/icons/profile.svg';
import ReviewProductIcon from '@assets/images/reviewProduct.jpg';

// 후기 테이블
export function ReviewListItem() {
  return (
    <div
      className="
      flex flex-col 
      w-[440px] 
      mobile:w-[568px]
      tablet:w-[880px] 
      laptop:w-[984px] 
      bg-primary-50 
      [@media(min-width:480px)_and_(max-width:768px)]:w-[470px]
      [@media(min-width:768px)_and_(max-width:900px)]:w-[680px]
      px-[16px]
    "
    >
      <div className="flex items-center gap-[10px]">
        <ProfileIcon className="w-[35px] h-[35px]" />
        <div className="flex flex-col">
          <span className="bold-14 laptop:text-[16px] text-font-900">닉네임</span>
          <div className="flex items-center ml-[-3px]">
            <span className="text-yellow-400 normal-14 laptop:text-[16px]">⭐</span>
            <span className="normal-16 text-font-900">5.0</span>
          </div>
        </div>
      </div>
      <p className="normal-14 laptop:text-[16px] text-font-900 mt-[10px]">대만족 합니다.</p>
    </div>
  );
}

// 리뷰 후기
export function ReviewImageList() {
  // 이거 서버에서 프로필,이미지,댓글,별점 불러오는 방식으로 구현해야겠지?

  return (
    <div
      className="flex flex-col 
      w-full 
      min-[480px]:max-w-[880px]
      min-[1440px]:max-w-[1038px] 
      bg-primary-50 
      p-[16px]"
    >
      <div className="flex items-center gap-[10px]">
        <ProfileIcon className="w-[35px] h-[35px]" />

        <div className="flex flex-col laptop:w-[880px]">
          <span className="bold-14 laptop:text-[16px] text-font-900">닉네임</span>
          <div className="flex items-center gap-[4px]">
            <span className="text-yellow-400 normal-14 laptop:text-[16px]">⭐</span>
            <span className="normal-14 laptop:text-[16px] text-font-900">5.0</span>
            <span className=" text-font-400 text-[14px] laptop:text-[16px]">📷</span>
          </div>
        </div>
      </div>

      {/* 이미지 목록 */}
      <div className="flex gap-[4px] mt-[40px] mb-[1.5px] mobile:mb-[40px]">
        <Image
          src={ReviewProductIcon}
          alt="상품1"
          width={200}
          height={200}
          priority
          className="w-[100px] h-[100px] mobile:max-w-[182px] mobile:h-[200px] tablet:w-[200px] tablet:h-[200px] laptop:w-[200px] laptop:h-[200px] object-cover"
        />

        <Image
          src={ReviewProductIcon}
          alt="상품2"
          className="w-[100px] h-[100px] mobile:max-w-[182px] mobile:h-[200px] tablet:w-[200px] tablet:h-[200px] laptop:w-[200px] laptop:h-[200px] object-cover"
        />
        <Image
          src={ReviewProductIcon}
          alt="상품3"
          className="w-[100px] h-[100px] mobile:max-w-[182px] mobile:h-[200px] tablet:w-[200px] tablet:h-[200px] laptop:w-[200px] laptop:h-[200px] object-cover"
        />
      </div>

      {/* 텍스트 리뷰 */}
      <p className="normal-14 laptop:text-[16px] text-font-900">대만족 합니다.</p>
    </div>
  );
}
