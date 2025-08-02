'use client';

import { InputBox } from '@components/form/form';
import { ProjectCategory } from '../../new/detail/ProjectCategory';
import { ProjectPlan } from '../../new/detail/ProjectPlan';
import { ProjectIntro } from '../../new/detail/ProjectIntro';
import { ProjectThumbnail } from '../../new/detail/ProjectThumbnail';
import { ChangeButtonFill } from '@components/button/SquareBtn';
import { CreateProjectTitle } from '@components/common/etc';
import { useParams } from 'next/navigation';
import { useEditProjectStore } from 'zustand/useEditProjectStore';
import { useEffect, useState } from 'react';
import { getProductDetail } from '@data/functions/product';
import useUserStore from 'zustand/userStore';
import { uploadFile } from '@data/actions/file';
import Modal from '@components/modal/Modal';
import { updateProductStatus } from '@data/actions/seller';

export default function EditProduct() {
  return <ProductModify />;
}

// 프로젝트 수정
function ProductModify() {
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
        setTitle(product.name);
        setPrice(product.price.toString());
        setTag(product.extra.tag);
        setCategory(product.extra.category);
        setContent(product.content);

        if (product.mainImages?.[0]?.path) {
          setMainImage(product.mainImages[0].path);
        }
      }
    };
    fetchData();
  }, []);

  const { category, tag, price, title } = useEditProjectStore();
  const { setCategory, setTag, setPrice, setTitle, setContent, setMainImage } = useEditProjectStore();

  return (
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

            {/* 목표 금액 */}
            <InputBox
              placeholder="1000000"
              title="목표 금액"
              subtitle="목표금액을 입력해주세요."
              value={price}
              setData={setPrice}
            />
          </div>
        </div>

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
        <Modal onClose={() => setShowModal(false)} isShow={showModal}>
          수정이 완료되었습니다.
        </Modal>
      </div>
    </>
  );
}
