import LOGO from '../../../public/icons/logo.svg';
import Nuprofile from '@assets/icons/unprofile.svg';
import Category from '@assets/icons/category.svg';
import Search from '@assets/icons/search.svg';
import CategoryAll from '@assets/icons/categoryall.svg';
import Food from '@assets/icons/food.svg';
import Clothes from '@assets/icons/clothes.svg';
import Home from '@assets/icons/home.svg';
import Phrase from '@assets/icons/phrase.svg';
import Perfume from '@assets/icons/prefume.svg';
import Tech from '@assets/icons/tech.svg';
import SpecialSeason from '@assets/icons/specialseason.svg';
import Kids from '@assets/icons/kids.svg';
import Game from '@assets/icons/game.svg';
import Profile from '@assets/icons/profile.svg';
import { Heart, Bell } from 'lucide-react';

import Link from 'next/link';
import BackIcon from '@assets/icons/arrowLeft.svg';

/* 헤더 로그인(x) */
/* 현재 로그인 */
export function Header() {
  return (
    <div className="w-full h-full">
      {/* header */}
      <header className="w-full fixed bg-bg shadow-[0_4px_4px_rgba(0,0,0,0.25)] z-[999]">
        <nav className="relative flex justify-between border-[1px] border-bg mx-[20px] mt-[12px] mb-[14px] semibold-10 tablet:h-[70px] tablet:text-[12px] tablet:mx-[35px] tablet:mt-[25px] tablet:mb-[20px]">
          <HeaderMenu />
          <LoginOrSignUp />
        </nav>
      </header>

      {/* 카테고리 창 */}
      <CategoryMenu />
    </div>
  );
}

/* 헤더 로그인(o) */
/* 현재 로그인 상태일때 사용해야하는 헤더 */
export function HeaderLogin() {
  return (
    <div className="w-full h-full">
      {/* header */}
      <header className="w-full fixed bg-bg shadow-[0_4px_4px_rgba(0,0,0,0.25)] z-[999]">
        <nav className="relative flex justify-between border-[1px] border-bg mx-[20px] mt-[12px] mb-[14px] semibold-10 tablet:h-[70px] tablet:text-[12px] tablet:mx-[35px] tablet:mt-[25px] tablet:mb-[20px]">
          <HeaderMenu />
          <UserProfile />
        </nav>
      </header>

      {/* 카테고리 창 */}
      <CategoryMenu />
    </div>
  );
}

/* 헤더 메뉴 */
function HeaderMenu() {
  const menu = ['인기', '신규', '오픈예정', '마감임박', '환불정책'];
  const menuEl = menu.map(txt => (
    <li key={txt} className="h-[15px] flex justify-center items-center laptop:text-[14px] hover:text-primary-800">
      {txt}
    </li>
  ));

  return (
    <>
      {/* 타이틀, 메뉴 */}
      <div className="flex flex-col gap-y-[13.5px] tablet:gap-y-[23px] laptop:gap-y-[23.5px]">
        {/* 타이틀 */}
        <LOGO width={60} height={20} className="tablet:w-[80px] tablet:h-[30px] laptop:w-[100px] laptop:h-[36px]" />
        {/* 메뉴 */}
        <ul
          className={
            'flex gap-x-[10px] max-[480px]:text-[5px] tablet:gap-x-[15px] laptop:gap-x-[25px] laptop:text-[14px]'
          }
        >
          {/* 카테고리 */}
          <li
            key={'카테고리'}
            className="flex gap-[6px] h-[15px] justify-center items-center hover:text-primary-800 hover:fill-primary-800"
          >
            {/* 카테고리 3선 이미지 */}
            <Category
              width={13}
              height={13}
              className="tablet:w-[15px] tablet:h-[15px] laptop:w-[20px] laptop:h-[20px]"
            />
            <span>카테고리</span>
          </li>

          {/* 나머지 메뉴 */}
          {menuEl}
        </ul>
      </div>
    </>
  );
}

/* 로그인/회원가입 버튼 */
function LoginOrSignUp() {
  return (
    <>
      {/* 로그인, 회원가입, 검색어 입력 */}
      <div className="flex flex-col gap-[10px] tablet:gap-[11px] laptop:gap-[14px] items-end ">
        {/* 로그인/회원가입 */}
        <div className="flex gap-[15px] max-[480px] items-center">
          <span className="semibold-8 max-[480px]:text-[6px] tablet:text-[12px] laptop:text-[14px] h-[16px] flex justify-center items-center">
            프로젝트 만들기
          </span>
          <button className="border-[1px] rounded-[6px] border-secondary-200 cursor-pointer">
            <div className="flex gap-[8px] px-[4px] py-[2px] tablet:px-[15px] tablet:py-[3.5px] laptop:px-[12.6px] laptop:py-[5px] laptop:gap-[8.75px] items-center">
              {/* 프로필 이미지 */}
              <Nuprofile
                width={12}
                height={12}
                className="tablet:w-[18px] tablet:h-[18px] laptop:w-[20px] laptop:h-[20px]"
              />

              {/* 로그인/회원가입 */}
              <span className="semibold-8 max-[480px]:text-[6px] tablet:text-[12px] laptop:text-[14px]">
                로그인/회원가입
              </span>
            </div>
          </button>
        </div>

        {/* 검색창 */}
        <div className="relative">
          <input
            id="search"
            type="search"
            className="bg-[#D9D9D9] rounded-[10px] pt-[6px] pl-[14px] pb-[9px] pr-[42px] normal-9 max-[480px]:text-[6px] max-[480px]:pt-[7px] max-[480px]:pb-[8px] max-[480px]:pr-[10px] tablet:pl-[20px] tablet:py-[10px] tablet:pr-[79px] tablet:text-[12px] laptop:pl-[19px] laptop:py-[10px] laptop:pr-[62px] laptop:text-[14px]"
            placeholder="검색어를 입력해주세요."
          />
          <Search
            width="12"
            height="12"
            className="absolute top-[50%] translate-y-[-50%] right-[13px] tablet:w-[16px] tablet:h-[16px]"
          />
        </div>
      </div>
    </>
  );
}

/* 프로필 */
function UserProfile() {
  return (
    <>
      {/* 유저 프로필 */}
      <div className="absolute right-[0px] flex flex-col gap-[10px] tablet:gap-[11px] laptop:gap-[14px] items-end ">
        <div className="flex gap-[15px] items-center max-[480px]:gap-[10px] laptop:gap-[25px]">
          <span className="semibold-10 max-[480px]:text-[8px] tablet:text-[12px] laptop:text-[14px] h-[16px] flex justify-center items-center">
            프로젝트 만들기
          </span>

          {/* 빈 하트 */}
          <Heart className="w-[18px] h-[16px] max-[480px]:w-[10px] max-[480px]:h-[10px] tablet:w-[22px] tablet:h-[20px] laptop:w-[30px] laptop:h-[30px]" />

          {/* 종 모양 */}
          <Bell className="w-[18px] h-[18px] max-[480px]:w-[10px] max-[480px]:h-[10px] tablet:w-[22px] tablet:h-[20px] laptop:w-[30px] laptop:h-[30px]" />

          <button className="border-[1px] rounded-[6px] border-secondary-200 cursor-pointer">
            <div className="flex gap-[6px] px-[4px] py-[2px] tablet:px-[15px] tablet:py-[3.5px] laptop:px-[12.6px] laptop:py-[5px] laptop:gap-[8.75px] items-center">
              {/* 프로필 이미지 */}
              <Profile
                width={12}
                height={12}
                className="tablet:w-[18px] tablet:h-[18px] laptop:w-[20px] laptop:h-[20px]"
              />

              {/* 닉네임 */}
              <span className="semibold-8 tablet:text-[12px] laptop:text-[14px]">닉네임</span>
            </div>
          </button>
        </div>

        {/* 검색창 */}
        <div className="relative">
          <input
            id="search"
            type="search"
            className="bg-[#D9D9D9] rounded-[10px] pt-[6px] pl-[14px] pb-[9px] pr-[42px] normal-9 max-[480px]:text-[6px] max-[480px]:pt-[7px] max-[480px]:pb-[8px] max-[480px]:pr-[10px] tablet:pl-[20px] tablet:py-[10px] tablet:pr-[79px] tablet:text-[12px] laptop:pl-[19px] laptop:py-[10px] laptop:pr-[62px] laptop:text-[14px]"
            placeholder="검색어를 입력해주세요."
          />
          <Search
            width="12"
            height="12"
            className="absolute top-[50%] translate-y-[-50%] right-[13px] tablet:w-[16px] tablet:h-[16px]"
          />
        </div>
      </div>
    </>
  );
}

/* 카테고리 메뉴 */
function CategoryMenu() {
  const category = [
    '전체',
    '푸드',
    '의류/잡화',
    '홈/리빙',
    '문구',
    '뷰티/향수',
    '테크',
    '특별기획/시즌기획',
    '키즈',
    '게임',
  ];

  const icon = [
    <CategoryAll
      width={15}
      height={15}
      key={'CategoryAll'}
      className="max-[480px]:w-[10px] laptop:w-[20px] laptop:h-[20px]"
    />,
    <Food width={15} height={15} key={'Food'} className="max-[480px]:w-[10px] laptop:w-[20px] laptop:h-[20px]" />,
    <Clothes width={15} height={15} key={'Clothes'} className="max-[480px]:w-[10px] laptop:w-[20px] laptop:h-[20px]" />,
    <Home width={15} height={15} key={'Home'} className="max-[480px]:w-[10px] laptop:w-[20px] laptop:h-[20px]" />,
    <Phrase width={15} height={15} key={'Phrase'} className="max-[480px]:w-[10px] laptop:w-[20px] laptop:h-[20px]" />,
    <Perfume width={15} height={15} key={'Perfume'} className="max-[480px]:w-[10px] laptop:w-[20px] laptop:h-[20px]" />,
    <Tech width={15} height={15} key={'Tech'} className="max-[480px]:w-[10px] laptop:w-[20px] laptop:h-[20px]" />,
    <SpecialSeason
      width={15}
      height={15}
      key={'SpecialSeason'}
      className="max-[480px]:w-[10px] laptop:w-[20px] laptop:h-[20px]"
    />,
    <Kids width={15} height={15} key={'Kids'} className="max-[480px]:w-[10px] laptop:w-[20px] laptop:h-[20px]" />,
    <Game width={15} height={15} key={'Game'} className="max-[480px]:w-[10px] laptop:w-[20px] laptop:h-[20px]" />,
  ];

  const categoryEl = category.map((txt, index) => (
    <li
      key={txt}
      className="flex gap-[8px] semibold-12 max-[480px]:text-[10px] laptop:text-[14px] laptop:gap-[10px] hover:fill-primary-800 hover:text-primary-800 tablet:shrink-0"
    >
      {icon[index]}
      <Link href={'#'}>{txt}</Link>
    </li>
  ));

  return (
    <div className="fixed top-[79px] w-full h-full z-[0] tablet:w-auto tablet:h-auto tablet:top-[117px] laptop:top-[136px]">
      {/* 카테고리 메뉴 */}
      <ul className="w-[164px] h-full px-[20px] py-[15px] flex flex-col gap-[20px] bg-bg z-[1] max-[480px]:w-[120px]  tablet:flex-row tablet:w-full tablet:h-auto tablet:pt-[20.5px] tablet:pb-[19px] tablet:pl-[45px] tablet:pr-[15px] tablet:gap-[10px] laptop:pl-[95px] laptop:pt-[17px] laptop:pb-[18px] laptop:pr-[234px] laptop:gap-[25px]">
        {categoryEl}
      </ul>

      {/* 클릭 금지 구역 */}
      <div className="absolute left-[164px] top-0 right-0 bottom-0 bg-[rgba(23,23,27,0.4)] z-[1] max-[480px]:left-[120px] tablet:hidden tablet:w-0 tablet:h-0 tablet:gap-[15px]"></div>
    </div>
  );
}

// 480 카테고리 x 헤더 (세부 상품, 결제하기 480에서 사용)
export function HeaderMobile() {
  return (
    <header className="flex w-120 bg-bg shadow-[0_4px_4px_rgba(0,0,0,0.25)] text-center h-[110px] items-center gap-[77px] pl-5 pr-[106px] fixed z-50 ">
      <Link href="/">
        <BackIcon />
      </Link>
      <p className="semibold-20 w-[257px]">개구리 중사 케로케로케로 티셔츠</p>
    </header>
  );
}
