import { CreateProjectTitle } from '@components/common/etc';
import { CategoryBar } from '@components/button/RoundedBtn';
import { PreviewCheckboxWithLabel } from '@components/button/SquareBtn';
import { ReadTerms } from '@components/term/TermsBtn';
import Makeproject from '@assets/images/makeproject.svg';

//새 프로젝트 만들기 페이지
export default function NewProductPage() {
  return (
    // 왼쪽 사진
    <div className="flex flex-col laptop:flex-row">
      <div className="hidden laptop:block ml-0 mt-0">
        <Makeproject className="w-[538px] h-[1249px]" />
      </div>

      {/* 오른쪽 내용 */}
      <div className="flex flex-col min-w-[460px] px-6 py-6 mobile:px-10 mobile:py-10 tablet:px-[90px] tablet:py-[64px] laptop:px-[90px] laptop:py-[64px]">
        <div className="">
          <CreateProjectTitle
            title={
              <>
                멋진 아이디어가 있으시군요! <br /> 어떤 프로젝트를 계획 중이신가요?
              </>
            }
            sub="나중에 변경 가능하니 너무 걱정마세요."
            subClassName="mt-[16px]"
          />
        </div>
        <div className="mt-[42px]">
          <CategoryBar />
        </div>
        <div className="mt-[72px] laptop:mt-[78px]">
          <CreateProjectTitle
            title="프로젝트를 간단하게 소개해주세요."
            sub="나중에 수정 가능하니 편하게 적어주세요."
            subClassName="mt-[16px]"
          />
        </div>
        <div className="mt-[42px] w-full medium-14">
          <textarea
            id="project-summary"
            placeholder="프로젝트 요약을 입력해주세요."
            className="w-full h-[173px] laptop:h-[152px] p-[18px] border border-font-400 rounded-[4px] text-font-900 placeholder:#818189"
            maxLength={50}
          />
          <p className="text-right text-secondary-200 medium-12 mt-[0px]">0/50</p>
        </div>
        <div className="mt-[72px] laptop:mt-[78px]">
          <CreateProjectTitle title="프로젝트 동의서" sub="프로젝트 등록을 위한 필수 동의 항목을 확인해주세요." />
        </div>
        <div className="flex flex-col gap-[12px] mt-[42px]">
          <PreviewCheckboxWithLabel title="대표 창작자는 만 19세 이상의 성인이어야 합니다." />
          <PreviewCheckboxWithLabel title="펀드림에서 필요 시 연락 드릴 수 있도록 본인 명의의 휴대폰 번호와 이메일 주소가 필요합니다." />
          <PreviewCheckboxWithLabel title="프로젝트 성공 후의 정산을 위해 신분증 또는 사업자 등록증, 국내 은행 계좌를 준비해주세요." />
          <PreviewCheckboxWithLabel title="펀딩 성공 시 플랫폼 수수료 및 결제수수료가 공제되는 것에 동의합니다." />
          <PreviewCheckboxWithLabel title="프로젝트 진행 및 리워드 제공에 대한 모든 책임이 등록자(본인)에게 있음을 동의합니다." />
        </div>

        <div className="relative w-full mt-[12px]">
          <div className="flex">
            <PreviewCheckboxWithLabel title="플랫폼 이용약관 및 개인정보 처리방침에 동의합니다." />
          </div>
          <div className="absolute right-0 top-0 mt-[4px] cursor-pointer">
            <ReadTerms />
          </div>
        </div>

        <div className="flex justify-end border-t border-secondary-200 mt-[32px] w-full">
          <button className="px-[32px] py-[12px] mt-[19px] cursor-pointer medium-14 bg-secondary-200  hover:bg-primary-800  text-white ">
            상세 프로젝트 등록하기
          </button>
        </div>
      </div>
    </div>
  );
}
