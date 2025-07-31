'use client';

import { ChangeButtonFill } from '@components/button/SquareBtn';
import Modal from '@components/modal/Modal';
import { useState } from 'react';
import Register from './RegisterCon';
import { userProjectStroe } from 'zustand/useProjectStore';
import { uploadFile } from '@data/actions/file';
import useUserStore from 'zustand/userStore';
import { createProduct } from '@data/actions/seller';

export function RegisterBtnModal() {
  const [showModal, setShowModal] = useState(false);

  // 메인 이미지 정보
  const mainImage = userProjectStroe(state => state.userMainImage);
  // 현재가 유저가 선택한 카테고리 정보
  const nowCategory = userProjectStroe(state => state.userCategory);
  // 유저가 입력한 검색 태그
  const nowTages = userProjectStroe(state => state.userTag);
  // 유저가 입력한 날짜
  const nowDate = userProjectStroe(state => state.userDate);
  // 유저가 입력한 금액
  const nowPrice = userProjectStroe(state => state.userPrice);
  // 유저가 입력한 타이틀
  const nowTitle = userProjectStroe(state => state.userTitle);
  // 유저가 입력한 자세한 정보
  const nowContent = userProjectStroe(state => state.userContent);
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

  // 등록하기 버튼 클릭 했을때 실행할 함수
  async function handleClick() {
    /* 입력 조건 검사 */
    if (nowCategory === '') {
      alert('프로젝트 카테고리를 하나 선택해주세요.');
      return;
    }

    if (nowTages.length === 0) {
      alert('검색 태그를 형식에 맞게 등록해주요.');
      return;
    }

    if (nowDate.slice(1, -1).split(',')[0] === '' || nowDate.slice(1, -1).split(',')[1] === '') {
      alert('프로젝트 진행일정을 선택해주세요.');
      return;
    }

    if (nowPrice === '') {
      alert('목표 금액을 입력해주세요. (문자 x)');
      return;
    }

    if (nowTitle === '') {
      alert('제목을 입력해주세요.');
      return;
    }

    // 유저가 현재 입력한 글자의 수 (전체 공백 제거, 줄바꿈 제거)
    const textLength = nowContent.replace(/,|<br>|"|\s+/g, '').trim().length;
    if (textLength < 10) {
      alert('프로젝트 소개 부분을 10글자 이상 입력해주세요.');
      return;
    }

    const imgPath = await imageUpload(); // 이미지 전송용 함수 이미지를 전송하고 그 주소를 받아옴
    if (imgPath) transferData.append('mainImages', imgPath);
    else if (imgPath === undefined) {
      alert('대표 이미지를 등록해주세요');
      return;
    }

    transferData.append('seller_id', seller_id!.toString());
    transferData.append('category', nowCategory);
    transferData.append('name', nowTitle);
    transferData.append('price', nowPrice);
    transferData.append('content', nowContent);
    transferData.append('startDate', nowDate.slice(1, -1).split(',')[0]);
    transferData.append('endDate', nowDate.slice(1, -1).split(',')[1]);
    transferData.append('tags', nowTages);

    if (token) {
      // 서버에 전송
      const result = createProduct(transferData, token);
      console.log(result);
    }

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
