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

  // Zustand 상태값 가져오기
  const mainImage = userProjectStroe(state => state.userMainImage);
  const nowCategory = userProjectStroe(state => state.userCategory);
  const nowTage = userProjectStroe(state => state.userTag);
  const nowDate = userProjectStroe(state => state.userDate);
  const nowPrice = userProjectStroe(state => state.userPrice);
  const nowTitle = userProjectStroe(state => state.userTitle);
  const nowContent = userProjectStroe(state => state.userContent);
  const userAccountCheck = userProjectStroe(state => state.userAccountCheck);
  const userDutyCheck = userProjectStroe(state => state.userDutyCheck);

  const seller_id = useUserStore().user?._id;
  const token = useUserStore().user?.token?.accessToken;

  // 초기화용 상태 설정 함수
  const setMainImage = userProjectStroe(state => state.setMainImage);
  const setCategory = userProjectStroe(state => state.setCategory);
  const setContent = userProjectStroe(state => state.setContent);
  const setUserTag = userProjectStroe(state => state.setUserTag);
  const setDate = userProjectStroe(state => state.setDate);
  const setPrice = userProjectStroe(state => state.setPrice);
  const setTitle = userProjectStroe(state => state.setTitle);
  const setBirthday = userProjectStroe(state => state.setBirthday);
  const setBank = userProjectStroe(state => state.setBank);
  const setName = userProjectStroe(state => state.setName);
  const setAccountNumber = userProjectStroe(state => state.setAccountNumber);
  const setBusinessNumber = userProjectStroe(state => state.setBusinessNumber);
  const setIndividual = userProjectStroe(state => state.setIndividual);
  const setAccountCheck = userProjectStroe(state => state.setAccountCheck);
  const setEmail = userProjectStroe(state => state.setEmail);
  const setDutyName = userProjectStroe(state => state.setDutyName);
  const setSSN = userProjectStroe(state => state.setSSN);
  const setAddress = userProjectStroe(state => state.setAddress);
  const setBusinessName = userProjectStroe(state => state.setBusinessName);
  const setBusinessPersonNumber = userProjectStroe(state => state.setBusinessPersonNumber);
  const setDutyType = userProjectStroe(state => state.setDutyType);
  const setDutyCheck = userProjectStroe(state => state.setDutyCheck);

  // 이미지 업로드 함수
  async function imageUpload() {
    if (!mainImage) return null;

    const img = new FormData();
    img.append('attach', mainImage);

    const result = await uploadFile(img);
    if (result.ok === 1) {
      return result.item[0].path;
    }
    return null;
  }

  // 등록 버튼 클릭 시 실행
  async function handleClick() {
    if (!seller_id || !token) {
      alert('로그인이 필요합니다.');
      return;
    }

    if (!nowCategory) {
      alert('프로젝트 카테고리를 하나 선택해주세요.');
      return;
    }

    // 태그 유효성 검사
    const tags = nowTage
      .split(/\s+/)
      .map(tag => tag.trim())
      .filter(Boolean);
    if (!tags.length || tags.some(tag => !tag.startsWith('#') || tag.length < 2)) {
      alert('검색 태그를 형식에 맞게 등록해주세요. 예: #태그');
      return;
    }

    const [startDate, endDate] = nowDate.replace(/\[|\]/g, '').split(',');
    if (!startDate || !endDate) {
      alert('프로젝트 진행일정을 선택해주세요.');
      return;
    }

    if (!nowPrice) {
      alert('상품 가격을 입력해주세요. (문자 x)');
      return;
    }

    if (!nowTitle) {
      alert('제목을 입력해주세요.');
      return;
    }

    const textLength = nowContent.replace(/,|<br>|"|\s+/g, '').trim().length;
    if (textLength < 10) {
      alert('프로젝트 소개를 10글자 이상 입력해주세요.');
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

    // 이미지 업로드
    const imgPath = await imageUpload();
    if (!imgPath) {
      alert('대표 이미지를 등록해주세요.');
      return;
    }

    // 유효성 통과 후 FormData 생성
    const transferData = new FormData();
    transferData.append('seller_id', seller_id.toString());
    transferData.append('category', nowCategory);
    transferData.append('name', nowTitle);
    transferData.append('price', nowPrice);
    transferData.append('content', nowContent);
    transferData.append('startDate', startDate);
    transferData.append('endDate', endDate);
    transferData.append('tag', nowTage);
    transferData.append('mainImages', imgPath);

    // 서버 전송
    try {
      const result = await createProduct(transferData, token);
      console.log('등록 결과:', result);
      setShowModal(true);

      // 초기화
      setMainImage(null);
      setCategory('');
      setContent('');
      setUserTag('');
      setDate('');
      setPrice('');
      setTitle('');
      setBirthday('');
      setBank('');
      setName('');
      setAccountNumber('');
      setBusinessNumber('');
      setIndividual(true);
      setAccountCheck(false);
      setEmail('');
      setDutyName('');
      setSSN('');
      setAddress('');
      setBusinessName('');
      setBusinessPersonNumber('');
      setDutyType(true);
      setDutyCheck(false);
    } catch (err) {
      console.error('상품 등록 실패:', err);
      alert('등록에 실패했습니다.');
    }
  }

  return (
    <>
      <div className="flex justify-center items-center tablet:justify-end">
        <ChangeButtonFill
          label="등록하기"
          className="mt-[23px] w-[240px] h-[47px] text-[14px] cursor-pointer"
          onClick={handleClick}
        />
        <Modal onClose={() => setShowModal(false)} isShow={showModal}>
          <Register />
        </Modal>
      </div>
    </>
  );
}
