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

  // seller_id
  const seller_id = useUserStore().user?._id;

  // tocken
  const token = useUserStore().user?.token?.accessToken;
  // console.log('액세스 토큰 ', token);

  // 최종 서버에 보낼 데이터 값
  const transferData = new FormData();
  if (seller_id) transferData.append('seller_id', seller_id.toString());
  if (nowCategory !== '') transferData.append('category', nowCategory);
  if (nowTitle !== '') transferData.append('name', nowTitle);
  if (nowPrice !== '') transferData.append('price', nowPrice);
  if (nowContent !== '') transferData.append('content', nowContent);
  if (nowDate.slice(1, -1).split(',')[0] !== '') transferData.append('startDate', nowDate.slice(1, -1).split(',')[0]);
  if (nowDate.slice(1, -1).split(',')[1] !== '') transferData.append('endDate', nowDate.slice(1, -1).split(',')[1]);
  if (nowTages !== '') transferData.append('tags', nowTages);

  // 등록하기 버튼 클릭 했을때 실행할 함수
  async function handleClick() {
    const imgPath = await imageUpload(); // 이미지 전송용 함수 이미지를 전송하고 그 주소를 받아옴
    console.log('이미지의 주소는 : ', imgPath);
    if (imgPath) transferData.append('mainImages', imgPath);
    // 서버에 전송
    if (token) {
      const result = createProduct(transferData, token);
      console.log(result);
    }
    // setShowModal(true); 테스트를 위해 잠시 비활성화 해둠

    console.log(seller_id?.toString());
    console.log(nowCategory);
    console.log(nowTitle);
    console.log(nowPrice);
    console.log(nowContent);
    console.log(nowDate.slice(1, -1).split(',')[0]);
    console.log(nowDate.slice(1, -1).split(',')[1]);
    console.log(nowTages);
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
