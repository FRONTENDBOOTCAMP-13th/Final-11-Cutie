'use client';
import '@app/globals.css';
import { InputBox } from '@components/form/form';
import { ProjectNotice } from './ProjectNotice';
import { ProjectCategory } from './ProjectCategory';
import { ProjectPlan } from './ProjectPlan';
import { ProjectIntro } from './ProjectIntro';
import { ProjectThumbnail } from './ProjectThumbnail';
import { IsAuthDone } from './IsAuthDone';
import { RegisterBtnModal } from './RegisterBtnModal';
import { userProjectStroe } from 'zustand/useProjectStore';

export function NewProductDetail() {
  // zustand 저장 함수를 불러옴
  const saveTag = userProjectStroe(state => state.setUserTag);
  // 유저가 선택한 태그를 저장
  function setTags(tags: string) {
    saveTag(tags); // 원본 그대로 저장
  }
  // 유저가 가격 설정하는 함수를 불러옴 (zustand)
  const setPrice = userProjectStroe(state => state.setPrice);

  // 문자열 안에 숫자 말고 다른값이 있는지 확인 함수
  function setPriceCheck(price: string) {
    const hasNonNumber = /[^0-9]/.test(price);
    if (!hasNonNumber) {
      setPrice(price);
    }
  }

  // 유저의 목표 금액 정하는 함수 불러옴 (zustand)
  const setGoalPrice = userProjectStroe(state => state.setGoalPrice);

  // 최종 목표 금액
  function setGoalPriceCheck(goalPrice: string) {
    const hasNonNumber = /[^0-9]/.test(goalPrice);
    if (!hasNonNumber) {
      setGoalPrice(goalPrice);
    }
  }

  // 유저가 타이틀을 설정하는 함수를 불러옴
  const setTitle = userProjectStroe(state => state.setTitle);

  return (
    <div
      className={
        'm-auto min-w-[320px] max-[480px]:p-[10px] mobile:p-[24px] tablet:p-[40px] laptop:py-[64px] laptop:px-[0px] laptop:w-[1100px] min-[1440px]:w-[1200px]'
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
              subtitle=" 구매자의 관심사를 고려한 태그를 입력해주세요."
              setData={setTags}
            />
          </div>

          <div className="flex flex-col gap-[19px] mb-[20px] mobile:grid mobile:grid-cols-[1fr_1fr] laptop:contents">
            {/* 프로젝트 진행 일정 */}
            <ProjectPlan />

            {/* 상품 가격 */}
            <InputBox
              placeholder="1000000"
              title="상품 가격"
              subtitle="상품 가격을 입력해주세요."
              setData={setPriceCheck}
            />
          </div>
        </div>

        {/* 목표금액 */}
        <InputBox
          placeholder="1000000"
          title="목표 금액"
          subtitle="최종 목표 금액을 입력해주세요."
          setData={setGoalPriceCheck}
        />

        {/* 프로젝트 제목 */}
        <InputBox
          placeholder="'제목을 입력해 주세요'"
          title="프로젝트 제목"
          className="grid grid-cols-[auto_1fr] gap-[23px] mb-[18px] items-center"
          setData={setTitle}
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

        <RegisterBtnModal />
      </div>
    </div>
  );
}
