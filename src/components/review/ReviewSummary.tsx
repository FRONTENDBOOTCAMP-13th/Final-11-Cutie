import ProfileIcon from '@assets/icons/profile.svg';
import Image from 'next/image';

interface Review {
  user: {
    name: string;
  };
  rating: number;
  content: string;
  extra: {
    images?: string[];
  }
}

interface ReviewListProps {
  review: Review;
}

// 후기 테이블
// export function ReviewListItem() {
//   return (
//     <div
//       className="
//       flex flex-col 
//       w-[440px] 
//       mobile:w-[568px]
//       tablet:w-[880px] 
//       laptop:w-[984px] 
//       [@media(min-width:480px)_and_(max-width:768px)]:w-[470px]
//       [@media(min-width:768px)_and_(max-width:900px)]:w-[680px]
//       px-[16px]
//     "
//     >
//       <div className="flex items-center gap-[10px]">
//         <ProfileIcon className="w-[35px] h-[35px]" />
//         <div className="flex flex-col">
//           <span className="bold-14 laptop:text-[16px] text-font-900">닉네임</span>
//           <div className="flex items-center ml-[-3px]">
//             <span className="text-yellow-400 normal-14 laptop:text-[16px]">⭐</span>
//             <span className="normal-16 text-font-900">5.0</span>
//           </div>
//         </div>
//       </div>
//       <p className="normal-14 laptop:text-[16px] text-font-900 mt-[10px]">대만족 합니다.</p>
//     </div>
//   );
// }

// 리뷰 후기

export default function ReviewImageList({ review }:ReviewListProps) {
  console.log('review:', review);
  console.log('username:', review.user.name);
  return (
    <div
      className="flex flex-col 
      min-w-[320px] w-full
      bg-primary-50 
      p-[16px]"
    >
      <div className="flex items-center gap-[10px]">
        <ProfileIcon className="w-[35px] h-[35px]" />

        <div className="flex flex-col laptop:w-[880px]">
          <span className="bold-14 laptop:text-[16px] text-font-900">{ review.user.name }</span>
          <div className="flex items-center gap-[4px]">
            <span className="text-yellow-400 normal-14 laptop:text-[16px]">⭐</span>
            <span className="normal-14 laptop:text-[16px] text-font-900">{ review.rating }</span>
            {/* <span className=" text-font-400 text-[14px] laptop:text-[16px]">📷</span> */}
          </div>
        </div>
      </div>

      {/* 이미지 목록 */}
       {Array.isArray(review.extra.images) && review.extra.images.length > 0 && (
        <div className="flex flex-nowrap gap-[4px] mt-[40px] mb-[1.5px] mobile:mb-[40px] overflow-hidden w-full">
          {review.extra.images.map((img, index) => (
            <Image
              key={index}
              src={img}
              alt={`상품 이미지 ${index + 1}`}
              width={200}
              height={200}
              priority
              className="flex-1 min-w-0 h-auto aspect-square object-cover"
            />
          ))}
        </div>
        )}

      {/* 텍스트 리뷰 */}
      <p className="normal-14 laptop:text-[16px] text-font-900">{ review.content }</p>
    </div>
  );
}
