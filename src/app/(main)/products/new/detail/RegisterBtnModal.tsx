'use client';

import { ChangeButtonFill } from '@components/button/SquareBtn';
import Modal from '@components/modal/Modal';
import { useRef, useState } from 'react';
import Register from './RegisterCon';
import { userProjectStroe } from 'zustand/useProjectStore';
import { uploadFile } from '@data/actions/file';
import useUserStore from 'zustand/userStore';
import { createProduct } from '@data/actions/seller';
import { useShallow } from 'zustand/shallow';

export function RegisterBtnModal() {
  const [showModal, setShowModal] = useState(false);
  const doubleCheck = useRef(false);

  const [
    userGoalPrice,
    userDutyCheck,
    userAccountCheck,
    nowContent,
    nowTitle,
    nowPrice,
    nowDate,
    nowTage,
    nowCategory,
    mainImage,
    reset,
  ] = userProjectStroe(
    useShallow(state => [
      state.userGoalPrice,
      state.userDutyCheck,
      state.userAccountCheck,
      state.userContent,
      state.userTitle,
      state.userPrice,
      state.userDate,
      state.userTag,
      state.userCategory,
      state.userMainImage,
      state.reset,
    ]),
  );

  // seller_id
  const seller_id = useUserStore().user?._id;
  // tocken
  const token = useUserStore().user?.token?.accessToken;

  // 이미지 업로드용 함수
  async function imageUpload() {
    const img = new FormData();
    if (mainImage) {
      img.append('attach', mainImage);

      const result = await uploadFile(img);

      // 현재 이미지가 가지고 있는 주소
      if (result.ok === 1) {
        return result.item[0].path;
      }

      return null;
    }
  }

  // 최종 서버에 보낼 데이터 값
  const transferData = new FormData();
  if (seller_id) transferData.append('seller_id', seller_id.toString());
  if (nowCategory !== '') transferData.append('category', nowCategory);
  if (nowTitle !== '') transferData.append('name', nowTitle);
  if (nowPrice !== '') transferData.append('price', nowPrice);
  if (nowContent !== '') transferData.append('content', nowContent);
  if (nowDate.slice(1, -1).split(',')[0] !== '') transferData.append('startDate', nowDate.slice(1, -1).split(',')[0]);
  if (nowDate.slice(1, -1).split(',')[1] !== '') transferData.append('endDate', nowDate.slice(1, -1).split(',')[1]);
  if (nowTage !== '') transferData.append('tag', nowTage);

  // 등록하기 버튼 클릭 했을때 실행할 함수
  async function handleClick() {
    if (nowCategory === '') {
      alert('프로젝트 카테고리를 하나 선택해주세요');
      return;
    }

    // 태그 유효성 검사
    const tags = nowTage.trim().split(/\s+/).filter(Boolean);
    const hasInvalidTag = tags.some(tag => {
      const isValid = /^#[^\s#]+$/.test(tag);
      return !isValid;
    });

    if (hasInvalidTag) {
      alert('검색 태그를 형식에 맞게 등록해주세요. 예: #태그');
      return;
    }

    if (nowDate.slice(1, -1).split(',')[0] === '' || nowDate.slice(1, -1).split(',')[1] === '') {
      alert('프로젝트 진행일정을 선택해주세요.');
      return;
    }

    if (nowPrice === '' || /\D/.test(nowPrice)) {
      alert('상품 가격을 입력해주세요. (문자 x)');
      return;
    }

    if (userGoalPrice === '' || /\D/.test(userGoalPrice)) {
      alert('목표 금액을 입력해주세요. (문자 x)');
      return;
    }

    if (nowTitle === '') {
      alert('제목을 입력해주세요.');
      return;
    }

    // 유저가 현재 입력한 글자의 수 (모든 태그 제거, img 태그 제거, 공백 제거)
    const textLength = nowContent
      .replace(/<img[^>]*>/g, '')
      .replace(/<[^>]+>/g, '')
      .replace(/\s+/g, '').length;

    if (textLength < 10) {
      alert('프로젝트 소개 부분을 10글자 이상 입력해주세요.');
      return;
    }

    if (!userAccountCheck) {
      alert('입금 계좌인증을 완료해주세요.');
      return;
    }

    if (!userDutyCheck) {
      alert('세금 계산서 발행 인증을 해주세요.');
      return;
    }

    const imgPath = await imageUpload(); // 이미지 전송용 함수 이미지를 전송하고 그 주소를 받아옴
    if (imgPath) transferData.append('mainImages', imgPath);
    else if (imgPath === undefined) {
      alert('대표 이미지를 등록해주세요');
      return;
    }

    if (doubleCheck.current) return;
    doubleCheck.current = true;

    // 이미지 주소 변환 (Base64 -> 서버 주소로 변경)
    const changeContent: string = await ImageServer(nowContent);

    transferData.append('seller_id', seller_id!.toString());
    transferData.append('category', nowCategory);
    transferData.append('name', nowTitle);
    transferData.append('price', nowPrice);
    transferData.append('content', changeContent);
    transferData.append('startDate', nowDate.slice(1, -1).split(',')[0]);
    transferData.append('endDate', nowDate.slice(1, -1).split(',')[1]);
    transferData.append('tags', nowTage);
    transferData.append('goalPrice', userGoalPrice);

    /* 여기서 부터 서버 전송 */
    if (token) {
      // 서버에 전송
      const result = await createProduct(transferData, token);
      console.log('결과값:', result);
    }

    // 입력 정보 초기화
    reset();

    // 정보 보여주기
    setShowModal(true);
  }

  return (
    <>
      <div className="flex justify-center items-center tablet:justify-end">
        {/* 등록하기 버튼 */}
        <ChangeButtonFill
          label={'등록하기'}
          className={'mt-[23px] w-[240px] h-[47px] text-[14px] cursor-pointer'}
          onClick={handleClick}
        />
        <Modal onClose={() => setShowModal(false)} isShow={showModal}>
          <Register />
        </Modal>
      </div>
    </>
  );
}

// 받은 정보에서 이미지를 서버로 보내고 교체하는 부분
async function ImageServer(nowContent: string) {
  // 탐색 조건
  const SearchConditions = /<img\s+[^>]*?src="(data:image[^"]*)"/g;

  // 현재 이미지 주소 (base64형태)
  const nowPath: string[] = [];

  nowContent.replace(SearchConditions, (match, p1) => {
    nowPath.push(p1);
    return match;
  });

  // 서버로 보낼 주소 Blob 형태
  const blobServerPath = nowPath.map(item => {
    return base64ToBlob(item);
  });

  const imgForm = new FormData();

  for (let i = 0; i < blobServerPath.length; i++) {
    imgForm.append('attach', blobServerPath[i]);
  }

  // 서버로 전송
  const relsult = await uploadFile(imgForm);

  // 서버에서 받은 주소값
  const getSeverPath: string[] = [];
  let count = 0;

  if (relsult.ok === 1) {
    for (let i = 0; i < relsult.item.length; i++) {
      getSeverPath.push(relsult.item[i].path);
    }
  }

  // 최종 리턴할 문자열
  const replaced = nowContent.replace(SearchConditions, (match, srcValue) => {
    return match.replace(srcValue, getSeverPath[count++]);
  });

  return replaced;
}

// 이거 나중에 공부하기
function base64ToBlob(base64: string): Blob {
  const [meta, content] = base64.split(',');
  const mime = meta.match(/:(.*?);/)?.[1] ?? 'image/png';
  const binary = atob(content);
  const array = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i++) {
    array[i] = binary.charCodeAt(i);
  }
  return new Blob([array], { type: mime });
}
