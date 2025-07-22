'use client';
import '@app/globals.css';
import 'react-quill-new/dist/quill.snow.css';
import dynamic from 'next/dynamic';

import { CreateProjectTitle } from '@components/common/etc';
import { SelectBox } from '@components/menu/Category';
import { InputIdResponsive } from '@components/common/Input';
import { Upload } from 'lucide-react';
import RegisterForm, { AuthBefore } from '@components/product/ProductCreatorInfo';
import { ChangeButtonFill } from '@components/button/SquareBtn';

const ReactQuill = dynamic(() => import('react-quill-new'), {
  ssr: false,
  loading: () => <p>Loading ...</p>,
});

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
            <SearchTag />
          </div>

          <div className="flex gap-[19px] mb-[20px] laptop:contents">
            {/* 프로젝트 진행 일정 */}
            <ProjectPlan />

            {/* 목표 금액 */}
            <FundingAmount />
          </div>
        </div>

        {/* 프로젝트 제목 */}
        <ProjectName />

        {/* 프로젝트 소개 */}
        <ProjectIntro />

        <div className="flex flex-col gap-[30px]">
          {/* 프로젝트 대표 이미지 */}
          <ProjectThumbnail />

          <div className="grid gap-y-[30px] tablet:grid-cols-[1fr_1fr] tablet:gap-x-[26px] tablet:gap-y-[15px] laptop:grid-cols-[1fr_1fr_1fr]">
            {/* 본인 인증 */}
            <IsAuthDone />

            {/* 입금 계좌 */}
            <BankAccount />

            {/* 세금 계산서 발행 */}
            <TaxInvoice />
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

/* 프로젝트 안내문 */
function ProjectNotice() {
  /* 타이틀 글자 사이즈 */
  const projectTitle_480 = 'max-[480px]:text-[17px] '; // 0 ~ 479px 까지
  const projectTitle_768 = 'text-[20px] '; // 480 ~ 767px 까지

  /* 서브 글자 사이즈 */
  const projectSub_480 = 'max-[480px]:text-[10px] '; // 0 ~ 479px 까지
  const projectSub_768 = 'text-[12px] '; // 480 ~ 767px 까지

  return (
    <div className="pb-[39px]">
      <CreateProjectTitle
        title={'프로젝트를 조금 더 자세히 알려주세요'}
        sub={'기본 정보와 프로젝트에 대한 자세한 설명을 작성해주세요.'}
        gap={8}
        titleClassName={projectTitle_480 + projectTitle_768}
        subClassName={projectSub_480 + projectSub_768}
      />
    </div>
  );
}

/* 프로젝트 카테고리 */
function ProjectCategory() {
  return (
    <div className="flex flex-col gap-[15px] text-[11px]">
      <span className="flex gap-[8px] items-center">
        <span className="normal-13 font-[700]">
          프로젝트 카테고리<span className="text-error">*</span>
        </span>
        <span className='className="normal-11 font-[400] text-[#686871]'>프로젝트의 유형을 설정해주세요.</span>
      </span>

      <SelectBox isDropdown={true} mainText={'특별기획 ‧ 시즌기획'} />
    </div>
  );
}

/* 검색 태그 */
function SearchTag() {
  return (
    <div className="flex flex-col gap-[15px] text-[11px]">
      <span className="flex gap-[8px] items-center">
        <span className="normal-13 font-[700]">
          검색 태그<span className="text-error">*</span>
        </span>
        <span className="normal-10 font-[400] text-[#686871]">
          구매자의 관심사를 고려한 태그(최대 3개)를 입력해주세요.
        </span>
      </span>

      <InputIdResponsive placeholder={'예) #여름필수템 #장마'} />
    </div>
  );
}

/* 프로젝트 진행 일정 */
function ProjectPlan() {
  return (
    <div className="flex flex-col gap-[15px] flex-1 w-[50%] laptop:w-auto">
      <span className="flex gap-[8px] items-center">
        <span className="normal-13 font-[700] text-[12px]">
          프로젝트 진행 일정<span className="text-error">*</span>
        </span>
      </span>

      <SelectBox isDropdown={true} mainText={'2025.08.08'} />
    </div>
  );
}

/* 목표 금액 */
function FundingAmount() {
  return (
    <div className="flex flex-col gap-[15px] flex-1 w-[50%] laptop:w-auto">
      <span className="flex gap-[8px] items-center">
        <span className="normal-13 font-[700] text-[12px]">
          목표 금액<span className="text-error">*</span>
        </span>
      </span>

      <InputIdResponsive placeholder={'목표 금액을 입력해주세요.'} />
    </div>
  );
}

/* 프로젝트 제목 */
function ProjectName() {
  return (
    <div className="grid grid-cols-[auto_1fr] gap-[23px] mb-[18px]">
      <span className="flex gap-[8px] items-center">
        <span className="normal-13 font-[700]">
          프로젝트 제목<span className="text-error">*</span>
        </span>
      </span>

      <InputIdResponsive placeholder={'제목을 입력해 주세요'} />
    </div>
  );
}

/* 프로젝트 소개 */
function ProjectIntro() {
  return (
    <div className="flex flex-col gap-[11px] mb-[80px]">
      <span className="flex flex-col gap-[11px]">
        <span className="normal-13 font-[700]">
          프로젝트 소개<span className="text-error">*</span>
        </span>
        <span className="normal-10 font-[400] text-[#686871]">
          작성한 내용이 상품 소개 페이지에 반영됩니다. (이미지 업로드는 최대 5개까지 가능합니다.)
        </span>
      </span>

      <QuillWrapper />
    </div>
  );
}

/* 프로젝트 대표 이미지 */
function ProjectThumbnail() {
  /* 이미지 업로드 텍스트 */
  const imgUpload_480 = 'max-[480px]:text-[10px] '; // 0 ~ 479px 까지
  const imgUpload_768 = 'mobile:text-[10px] '; // 480 ~ 767px 까지
  const imgUpload_1280 = 'tablet:text-[12px] '; // 768 ~ 1279px 까지

  /* 이미지 사이즈 텍스트 */
  const imgSize_480 = 'max-[480px]:text-[8px] '; // 0 ~ 479px 까지
  const imgSize_768 = 'mobile:text-[12px] ';

  return (
    <div className="grid gap-[11px] mb-[40px] tablet:grid-cols-[auto_1fr] tablet:items-center tablet:gap-[24px]">
      <span className="flex flex-col gap-[11px]">
        <span className="normal-14 font-[700]">
          프로젝트 대표 이미지<span className="text-error">*</span>
        </span>
      </span>

      <div className="flex flex-col justify-center items-center p-[20px] normal-10 font-[500] rounded-[4px] border-[1px] border-secondary-200 cursor-pointer">
        <div className="flex flex-col gap-[8px] justify-center items-center">
          <div className="flex gap-[4px]">
            <Upload width={15} height={12} color="#091FB0" />{' '}
            <span className={imgUpload_480 + imgUpload_768 + imgUpload_1280}>이미지 업로드(0/1)</span>
          </div>
          <span className={'text-[#686871] font-[500] ' + imgSize_480 + imgSize_768 + imgUpload_1280}>
            파일 형식 : jpg 또는 png / 용량 : 5MB 이하
          </span>
          <span className={'text-[#686871] font-[500] ' + imgSize_480 + imgSize_768 + imgUpload_1280}>
            사이즈 : 가로 세로 각각 1000px 이상 <span className="text-[#17171B]">가로 세로 비율 1:1</span>
          </span>
        </div>
      </div>
    </div>
  );
}

/* 본인 인증 */
function IsAuthDone() {
  return (
    <div className="flex flex-col gap-[11px]">
      <span className="flex gap-[11px] items-center">
        <span className="normal-14 font-[700]">
          본인 인증<span className="text-error">*</span>
        </span>
        <span className="normal-10 font-[400] text-[#686871]">창작자 본인 명의의 휴대폰 번호로 인증해주세요.</span>
      </span>

      <AuthBefore />
    </div>
  );
}

/* 입금 계좌 */
function BankAccount() {
  return (
    <div className="flex flex-col gap-[11px]">
      <span className="flex gap-[11px] items-center">
        <span className="normal-14 font-[700]">
          입금 계좌<span className="text-error">*</span>
        </span>
        <span className="normal-10 font-[400] text-[#686871]">후원금을 수령할 계좌를 등록해주세요.</span>
      </span>

      <RegisterForm />
    </div>
  );
}

/* 세금 계산서 */
function TaxInvoice() {
  return (
    <div className="flex flex-col gap-[11px]">
      <span className="flex gap-[11px] items-center">
        <span className="normal-14 font-[700]">
          세금 계산서 발행<span className="text-error">*</span>
        </span>
        <span className="normal-10 font-[400] text-[#686871]">세금계산서 발행을 위한 정보를 등록해주세요</span>
      </span>

      <RegisterForm />
    </div>
  );
}

/* ReactQuill */
function QuillWrapper() {
  return <ReactQuill className="w-full h-[300px]" theme="snow" />;
}
