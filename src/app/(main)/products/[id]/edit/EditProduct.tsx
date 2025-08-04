'use client';

import { InputBox } from '@components/form/form';
import { ProjectCategory } from '../../new/detail/ProjectCategory';
import { ProjectPlan } from '../../new/detail/ProjectPlan';
import { ProjectIntro } from '../../new/detail/ProjectIntro';
import { ProjectThumbnail } from '../../new/detail/ProjectThumbnail';
import { ChangeButtonFill } from '@components/button/SquareBtn';
import { CreateProjectTitle } from '@components/common/etc';
import { useEditProjectStore } from 'zustand/useEditProjectStore';
import { useEffect, useState } from 'react';
import { getProductDetail } from '@data/functions/product';
import useUserStore from 'zustand/userStore';
import { uploadFile } from '@data/actions/file';
import Modal from '@components/modal/Modal';
import { updateProductStatus } from '@data/actions/seller';
import { allowScroll, preventScroll } from '@utils/modal';
import Link from 'next/link';
import { useRouter, useParams } from 'next/navigation';

export default function EditProduct() {
  const router = useRouter();
  const params = useParams();
  const productId = params.id;

  const user = useUserStore(state => state.user);
  const token = user?.token?.accessToken;
  const userId = user?._id;

  const [hydrated, setHydrated] = useState(false);
  const setAuthorized = useState(false)[1];
  const [loading, setLoading] = useState(true);

  // zustand 상태는 브라우저 저장소에 있기 때문에 서버에선 그 상태를 못 불러오는 현상 발생, 따라서 로그인 상태 null
  // SSR로 인해 발생하는 user === null 문제 해결 위한 수동 hydrated
  useEffect(() => {
    setHydrated(true);
  }, []);

  // 수정 권한 체크
  useEffect(() => {
    if (!hydrated) return;

    if (!token || !userId) {
      alert('로그인이 필요합니다.');
      router.push('/login');
      return;
    }

    // 상품 데이터 불러오기, 판매 상품의 seller ID와 로그인한 ID 비교
    const fetchProduct = async () => {
      try {
        const res = await getProductDetail(Number(productId));

        if (!res.ok || !res.item) {
          alert('상품 정보를 불러올 수 없습니다.');
          return;
        }

        const product = res.item;
        const sellerId = product.seller?._id;

        if (sellerId !== userId) {
          alert('본인의 상품만 수정할 수 있습니다.');
          return;
        }

        // 판매자 ID 일치할 경우 edit 접근 허용
        setAuthorized(true);
        setLoading(false);
      } catch (err) {
        console.error(err);
        alert('접근 중 오류가 발생했습니다.');
      }
    };

    fetchProduct();
  }, [hydrated, token, userId, productId, router, setAuthorized]);

  // 아직 hydration 또는 상품 권한 확인 중이면 null 반환
  if (!hydrated || loading) return null;

  return <ProductModify />;
}

// 프로젝트 수정
function ProductModify() {
  // 수정 zustand
  const { category, tag, price, goalPrice, title } = useEditProjectStore();
  const { setCategory, setTag, setPrice, setGoalPrice, setTitle, saveContent, setMainImage } = useEditProjectStore();

  // 상품 ID 가져오기
  const params = useParams();
  const productId = params.id;

  // 상품 데이터 불러오기
  useEffect(() => {
    const fetchData = async () => {
      const res = await getProductDetail(Number(productId));
      if (res.ok && res.item) {
        const product = res.item;

        // zustand 초기 세팅
        // TODO 목표 금액 추가 필요
        setTitle(product.name);
        setPrice(product.price.toString());
        setGoalPrice(product.extra.goalPrice.toString());
        setTag(product.extra.tag);
        setCategory(product.extra.category);
        saveContent(product.content);

        if (product.mainImages?.[0]?.path) {
          setMainImage(product.mainImages[0].path);
        }
      }
    };
    fetchData();
  }, []);

  return (
    // TODO 목표 금액 추가 필요
    <div
      className={
        'm-auto min-w-[320px] max-[480px]:p-[10px] mobile:p-[24px] tablet:p-[40px] laptop:py-[64px] laptop:px-[0px] laptop:w-[1100px] min-[1440px]:w-[1200px]'
      }
    >
      {/* 프로젝트 수정 안내문 */}
      <ProjectHeader />

      <div className="flex flex-col laptop:gap-[21px]">
        <div className="laptop:grid laptop:grid-cols-[1fr_1fr_auto_auto] laptop:gap-[12px]">
          <div className="grid gap-[16px] mb-[18px] tablet:grid-cols-[1fr_1fr] tablet:gap-[28px] laptop:contents">
            {/* 프로젝트 카테고리 */}
            <ProjectCategory initialValue={category} />

            {/* 검색 태그 */}
            <InputBox
              placeholder="'예) #여름필수템 #장마"
              title="검색 태그"
              subtitle=" 구매자의 관심사를 고려한 태그를 입력해주세요."
              value={tag}
              setData={setTag}
            />
          </div>

          <div className="flex flex-col gap-[19px] mb-[20px] mobile:grid mobile:grid-cols-[1fr_1fr] laptop:contents">
            {/* 프로젝트 진행 일정 */}
            <ProjectPlan isEditMode={true} />

            {/* 상품 가격 */}
            <InputBox
              placeholder="1000000"
              title="상품 가격"
              subtitle="상품 가격을 입력해주세요."
              value={price}
              setData={setPrice}
            />
          </div>
        </div>

        {/* 목표금액 */}
        <InputBox
          placeholder="1000000"
          title="목표 금액"
          subtitle="최종 목표 금액을 입력해주세요."
          value={goalPrice}
          setData={setGoalPrice}
        />

        {/* 프로젝트 제목 */}
        <InputBox
          placeholder="'제목을 입력해 주세요'"
          title="프로젝트 제목"
          className="grid grid-cols-[auto_1fr] gap-[23px] mb-[18px] items-center"
          value={title}
          setData={setTitle}
        />

        {/* 프로젝트 소개 */}
        <ProjectIntro isEditMode={true} />

        <div className="flex flex-col gap-[30px]">
          {/* 프로젝트 대표 이미지 */}
          <ProjectThumbnail isEditMode={true} />
        </div>

        <EditBtnModal />
      </div>
    </div>
  );
}

// 프로젝트 수정안내 문구
function ProjectHeader() {
  /* 타이틀 글자 사이즈 */
  const projectTitle_480 = 'max-[480px]:text-[15px] '; // 0 ~ 479px 까지
  const projectTitle_768 = 'text-[20px] '; // 480 ~ 767px 까지

  /* 서브 글자 사이즈 */
  const projectSub_480 = 'max-[480px]:text-[10px] '; // 0 ~ 479px 까지
  const projectSub_768 = 'text-[12px] '; // 480 ~ 767px 까지

  return (
    <div className="pb-[39px]">
      <CreateProjectTitle
        title={'프로젝트를 수정하시나요?'}
        sub={'이전에 작성하신 내용에서 원하시는 부분을 수정하실 수 있습니다.'}
        gap={8}
        titleClassName={projectTitle_480 + projectTitle_768}
        subClassName={projectSub_480 + projectSub_768}
      />
    </div>
  );
}

// 수정하기 버튼
function EditBtnModal() {
  const [showModal, setShowModal] = useState(false);

  // 상태값들
  const mainImage = useEditProjectStore(state => state.mainImage);
  const nowCategory = useEditProjectStore(state => state.category);
  const nowTage = useEditProjectStore(state => state.tag);
  const startDate = useEditProjectStore(state => state.startDate);
  const endDate = useEditProjectStore(state => state.endDate);
  const nowPrice = useEditProjectStore(state => state.price);
  const nowTitle = useEditProjectStore(state => state.title);
  const nowContent = useEditProjectStore(state => state.content);

  const token = useUserStore().user?.token?.accessToken;
  const params = useParams();
  const productId = params.id;

  async function imageUpload() {
    if (typeof mainImage === 'string') {
      return mainImage; // 기존 이미지 URL
    }

    if (mainImage instanceof File) {
      const img = new FormData();
      img.append('attach', mainImage);

      const result = await uploadFile(img);
      if (result.ok === 1 && result.item?.[0]?.path) {
        return result.item[0].path;
      }
    }

    return null;
  }

  // 수정 버튼 클릭
  async function handleClick() {
    if (!token || !productId) return;

    if (!token || !productId) return;

    // 태그 유효성 검사
    // 공백으로 나누고, 빈 문자열 제거
    const tags = nowTage.split(/\s+/).filter(Boolean);
    // tags에서 하나라도 #이 안붙어있다면 false
    const hasInvalidTag = tags.some(tag => !tag.startsWith('#'));

    if (hasInvalidTag) {
      alert('검색 태그를 형식에 맞게 등록해주세요. 예: #태그');
      return;
    }

    const imgPath = await imageUpload();

    const updateData = {
      name: nowTitle,
      price: Number(nowPrice),
      content: nowContent,
      active: true,
      show: true,
      mainImages: imgPath
        ? [
            {
              path: imgPath,
              name: imgPath,
              originalname: imgPath,
            },
          ]
        : undefined,
      extra: {
        funding: {
          startDate,
          endDate,
        },
        category: nowCategory,
        tag: nowTage,
      },
    };

    try {
      await updateProductStatus(Number(productId), updateData, token);
      setShowModal(true);
    } catch (err) {
      console.error('상품 상태 변경 실패:', err);
    }
  }

  return (
    <>
      <div className="flex justify-center items-center tablet:justify-end">
        <ChangeButtonFill
          label="수정하기"
          className="mt-[23px] w-[240px] h-[47px] text-[14px] cursor-pointer"
          onClick={handleClick}
        />
        {showModal && <EditSuccessModal isShow={showModal} onClose={() => setShowModal(false)} />}
      </div>
    </>
  );
}

interface EditSuccessModalProps {
  isShow: boolean;
  onClose: () => void;
}

// 수정 완료 시 모달
function EditSuccessModal({ isShow, onClose }: EditSuccessModalProps) {
  const router = useRouter();

  useEffect(() => {
    const prevScrollY = preventScroll();
    return () => {
      allowScroll(prevScrollY);
    };
  }, [isShow]);

  const handleClose = () => {
    const path = window.location.pathname.replace(/\/edit$/, '');
    router.push(path);
    onClose();
  };

  const params = useParams();
  const productId = params.id;

  return (
    <>
      {/* 알림 클릭 시 모달 */}
      <Modal isShow={isShow} onClose={handleClose}>
        <div className="p-6">
          {/* 수정 완료 안내 텍스트 */}
          <div className="p-10 text-font-900 medium-18 text-center text-[16px] tablet:text-[18px]">
            수정이 완료되었습니다.
          </div>
          {/* 홈 / 프로젝트 확인 버튼 */}
          <div className="flex flex-col items-center gap-1 mobile:gap-2 tablet:flex-row tablet:justify-center ">
            <Link href={'/'}>
              <ChangeButtonFill
                label="홈으로 돌아가기"
                className="w-50 mobile:w-55 mobile:h-10 tablet:w-60 tablet:h-12 text-[14px] tablet:text-[16px]"
              />
            </Link>
            <Link href={`/products/${productId}`}>
              <ChangeButtonFill
                label="나의 프로젝트 확인하기"
                className="w-50 mobile:w-55 mobile:h-10 tablet:w-60 tablet:h-12 text-[14px] tablet:text-[16px]"
              />
            </Link>
          </div>
        </div>
      </Modal>
    </>
  );
}
