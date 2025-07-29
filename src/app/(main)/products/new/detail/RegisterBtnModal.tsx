'use client';

import { ChangeButtonFill } from '@components/button/SquareBtn';
import Modal from '@components/modal/Modal';
import { useState } from 'react';
import Register from './RegisterCon';
import { userProjectStroe } from 'zustand/useProjectStore';

export function RegisterBtnModal() {
  const [showModal, setShowModal] = useState(false);

  // 여기에서 현재 유제 로그인 인지 하고 고유의 ID값을 확인하고 넘기기

  // 메인 이미지 정보
  const mainImage = userProjectStroe(state => state.userMainImage);
  // 현재가 유저가 선택한 카테고리 정보
  const nowCategory = userProjectStroe(state => state.userCategory);
  // 유저가 입력한 자세한 정보
  const nowContent = userProjectStroe(state => state.userContent);
  // 유저가 입력한 검색 태그
  const nowTages = userProjectStroe(state => state.userTag);
  // 유저가 입력한 날짜
  const nowDate = userProjectStroe(state => state.userDate);
  // 유저가 입력한 금액
  const nowPrice = userProjectStroe(state => state.userPrice);
  // 유저가 입력한 타이틀
  const nowTitle = userProjectStroe(state => state.userTitle);

  const handleClick = () => {
    if (mainImage) console.log('메인 이미지가 등록 되었습니다');
    else console.error('메인 이미지가 없습니다.');

    if (nowCategory.length > 0) console.log('현재 선택된 카테고리 :', nowCategory);
    else console.error('현재 선택된 카테고리가 없습니다.');

    if (nowContent.length === 0) console.error('입력한 내용이 없습니다.');
    else console.log('현재 유저가 입력한 내용은 :', nowContent);

    if (nowTages.length > 0) console.log('현재 유저가 입력한 태그는 :', nowTages);
    else console.error('현재 입력된 태그가 없습니다.');

    if (nowDate === '[null,null]') console.error('입력한 날짜가 없습니다.');
    else console.log('현재 유저가 입력한 날짜는 :', nowDate);

    if (nowPrice.length > 0) console.log('현재 유저가 입력한 금액은 :', nowPrice);
    else console.error('현재 입력한 금액이 없습니다.');

    if (nowTitle.length > 0) console.log('현재 유저가 입력한 제목은 :', nowTitle);
    else console.error('현재 입력한 제목이 없습니다.');

    // setShowModal(true); 테스트를 위해 잠시 비활성화 해둠
  };
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
