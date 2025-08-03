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
  const nowTage = userProjectStroe(state => state.userTag);
  // 유저가 입력한 날짜
  const nowDate = userProjectStroe(state => state.userDate);
  // 유저가 입력한 금액
  const nowPrice = userProjectStroe(state => state.userPrice);
  // 유저가 입력한 타이틀
  const nowTitle = userProjectStroe(state => state.userTitle);
  // 유저가 입력한 자세한 정보
  const nowContent = userProjectStroe(state => state.userContent);
  // 입금 계좌 확인 변수
  const userAccountCheck = userProjectStroe(state => state.userAccountCheck);
  // 세금 계산서 발행 확인 변수
  const userDutyCheck = userProjectStroe(state => state.userDutyCheck);

  // seller_id
  const seller_id = useUserStore().user?._id;
  // tocken
  const token = useUserStore().user?.token?.accessToken;

  // 전체 초기화용 함수
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
    /* 입력 조건 검사 */
    if (nowCategory === '') {
      alert('프로젝트 카테고리를 하나 선택해주세요.');
      return;
    }

    // 태그 유효성 검사
    // 공백으로 나누고, 빈 문자열 제거
    const tags = nowTage.split(/\s+/).filter(Boolean);
    // tags에서 하나라도 #이 안붙어있다면 false
    const hasInvalidTag = tags.some(tag => !tag.startsWith('#'));

    if (hasInvalidTag) {
      alert('검색 태그를 형식에 맞게 등록해주세요. 예: #태그');
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

    transferData.append('seller_id', seller_id!.toString());
    transferData.append('category', nowCategory);
    transferData.append('name', nowTitle);
    transferData.append('price', nowPrice);
    transferData.append('content', nowContent);
    transferData.append('startDate', nowDate.slice(1, -1).split(',')[0]);
    transferData.append('endDate', nowDate.slice(1, -1).split(',')[1]);
    transferData.append('tags', nowTage);

    /* 여기서 부터 서버 전송 */
    if (token) {
      // 서버에 전송
      const result = createProduct(transferData, token);
      console.log(result);
    }

    // 입력 정보 초기화
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
