import { ChangeButtonFill } from '@components/button/SquareBtn';
import Link from 'next/link';

export default function RegisterCon() {
  const innerPadding = `p-[24px] mobile:p-[40px] tablet:p-[40px] laptop:p-[43px]`;
  const innerWidth = `w-[300px] mobile:w-[450px] tablet:w-[684px] laptop:w-[684px]`;
  const innerHeight = `min-h-[361px] mobile:min-h-[596px] tablet:min-h-[691px] laptop:min-h-[691px]`;

  return (
    <>
      <div className={`${innerPadding} ${innerWidth} ${innerHeight} content-center border rounded-2xl`}>
        <div className="text-center bold-20 text-font-900 mb-6 mobile:text-[24px] mobile:mb-13 tablet:text-[30px] tablet:mb-20">
          <p>축하합니다!</p>
          <p>새 프로젝트가 등록되었습니다!</p>
        </div>
        <div className="text-center bold-16 text-font-400 mb-6 mobile:text-[20px] mobile:mb-13 tablet:text-[24px] tablet:mb-20">
          <p>펀드림 프로젝트에</p>
          <p>관심가져주셔서 감사합니다.</p>
        </div>
        <div className="flex flex-col items-center gap-1 mobile:gap-2 tablet:flex-row tablet:justify-center ">
          <Link href={'/'}>
            <ChangeButtonFill
              label="홈으로 돌아가기"
              className="w-50 mobile:w-55 mobile:h-10 tablet:w-60 tablet:h-12 tablet:text-[16px]"
            />
          </Link>
          <Link href={'/accounts/fund'}>
            <ChangeButtonFill
              label="나의 프로젝트 확인하기"
              className="w-50 mobile:w-55 mobile:h-10 tablet:w-60 tablet:h-12 tablet:text-[16px]"
            />
          </Link>
        </div>
      </div>
    </>
  );
}
