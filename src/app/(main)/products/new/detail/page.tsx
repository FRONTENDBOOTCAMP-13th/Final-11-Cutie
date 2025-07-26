import '@app/globals.css';
import { ChangeButtonFill } from '@components/button/SquareBtn';
import { InputBox } from '@components/form/form';
import { ProjectNotice } from './ProjectNotice';
import { ProjectCategory } from './ProjectCategory';
import { ProjectPlan } from './ProjectPlan';
import { ProjectIntro } from './ProjectIntro';
import { ProjectThumbnail } from './ProjectThumbnail';
import { IsAuthDone } from './IsAuthDone';

export default function NewProductDetailPage() {
  return (
    <div
      className={
        'p-[24px] min-w-[320px] max-[480px]:px-[10px] mobile:p-[40px] tablet:p-[40px] tablet:px-[90px] tablet:py-[64px] laptop:px-[120px]'
      }
    >
      {/* 프로젝트 안내문 */}
      <ProjectNotice />

      <div className="flex flex-col laptop:gap-[21px]">
        <div className="laptop:grid laptop:grid-cols-[1fr_1fr_auto_auto] laptop:gap-[12px]">
          <div className="grid gap-[16px] mb-[18px] tablet:grid-cols-[1fr_1fr] tablet:gap-[28px] laptop:contents">
            {/* 프로젝트 카테고리 */}
            <ProjectCategory />

            {/* 검색 태그 */}
            <InputBox
              placeholder="'예) #여름필수템 #장마"
              title="검색 태그"
              subtitle=" 구매자의 관심사를 고려한 태그(최대 3개)를 입력해주세요."
            />
          </div>

          <div className="flex gap-[19px] mb-[20px] laptop:contents">
            {/* 프로젝트 진행 일정 */}
            <ProjectPlan />

            {/* 목표 금액 */}
            <InputBox placeholder="'목표 금액을 입력해주세요.'" title="목표 금액" />
          </div>
        </div>

        {/* 프로젝트 제목 */}
        <InputBox
          placeholder="'제목을 입력해 주세요'"
          title="프로젝트 제목"
          className="grid grid-cols-[auto_1fr] gap-[23px] mb-[18px]"
        />

        {/* 프로젝트 소개 */}
        <ProjectIntro />

        <div className="flex flex-col gap-[30px]">
          {/* 프로젝트 대표 이미지 */}
          <ProjectThumbnail />

          <div className="grid gap-y-[30px] tablet:grid-cols-[1fr_1fr] tablet:gap-x-[26px] tablet:gap-y-[15px] laptop:grid-cols-[1fr_1fr_1fr]">
            {/* 본인 인증 */}
            <IsAuthDone title="본인 인증" subDesc="창작자 본인 명의의 휴대폰 번호로 인증해주세요." type="auth" />

            {/* 입금 계좌 */}
            <IsAuthDone title="입급 계좌" subDesc="후원금을 수령할 계좌를 등록해주세요." type="account" />

            {/* 세금 계산서 발행 */}
            <IsAuthDone title="세금 계산서 발행" subDesc="세금계산서 발행을 위한 정보를 등록해주세요." type="tax" />
          </div>
        </div>

        <div className="flex justify-center items-center tablet:justify-end">
          {/* 등록하기 버튼 */}
          <ChangeButtonFill label={'등록하기'} className={'mt-[23px] w-[240px] h-[47px] text-[14px] cursor-pointer'} />
        </div>
      </div>
    </div>
  );
}
