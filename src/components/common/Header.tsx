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

import Link from 'next/link';

export function Header() {
  return (
    <div className="w-full h-full">
      {/* header */}
      <header className="w-full fixed bg-bg shadow-[0_4px_4px_rgba(0,0,0,0.25)] z-[999]">
        <nav className="flex justify-between border-[1px] border-bg mx-[20px] mt-[12px] mb-[14px] semibold-10">
          <HeaderMenu />
          <LoginOrSignUp />
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
    <li key={txt} className="h-[15px] flex justify-center items-center ">
      {txt}
    </li>
  ));

  return (
    <>
      {/* 타이틀, 메뉴 */}
      <div className="flex flex-col gap-y-[14px]">
        {/* 타이틀 */}
        <LOGO width={60} height={20} />
        {/* 메뉴 */}
        <ul className={'flex gap-x-[10px]'}>
          {/* 카테고리 */}
          <li key={'카테고리'} className="flex gap-[6px] h-[15px] justify-center items-center">
            {/* 카테고리 3선 이미지 */}
            <Category width={13} height={13} />
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
      <div className="flex flex-col gap-[10px] items-end ">
        {/* 로그인/회원가입 */}
        <div className="flex gap-[15px] items-center">
          <span className="semibold-8 h-[16px] flex justify-center items-center">프로젝트 만들기</span>
          <button className="border-[1px] rounded-[6px] border-secondary-200 cursor-pointer">
            <div className="flex gap-[8px] px-[4px] py-[2px]  items-center">
              {/* 프로필 이미지 */}
              <Nuprofile width={12} height={12} />

              {/* 로그인/회원가입 */}
              <span className="semibold-8">로그인/회원가입</span>
            </div>
          </button>
        </div>

        {/* 검색창 */}
        <div className="relative">
          <input
            id="search"
            type="search"
            className="bg-[#D9D9D9] rounded-[10px] pt-[6px] pl-[14px] pb-[9px] pr-[42px] normal-9"
            placeholder="검색어를 입력해주세요."
          />
          <Search width="12" height="12" className="absolute top-[50%] translate-y-[-50%] right-[13px] h-[16px]" />
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
    <CategoryAll width={15} height={15} key={'CategoryAll'} />,
    <Food width={15} height={15} key={'Food'} />,
    <Clothes width={15} height={15} key={'Clothes'} />,
    <Home width={15} height={15} key={'Home'} />,
    <Phrase width={15} height={15} key={'Phrase'} />,
    <Perfume width={15} height={15} key={'Perfume'} />,
    <Tech width={15} height={15} key={'Tech'} />,
    <SpecialSeason width={15} height={15} key={'SpecialSeason'} />,
    <Kids width={15} height={15} key={'Kids'} />,
    <Game width={15} height={15} key={'Game'} />,
  ];

  const categoryEl = category.map((txt, index) => (
    <li key={txt} className="flex gap-[8px] semibold-12 hover:fill-primary-800 hover:text-primary-800">
      {icon[index]}
      <Link href={'#'}>{txt}</Link>
    </li>
  ));

  return (
    <div className="fixed top-[79px] w-full h-full z-[0]">
      {/* 카테고리 메뉴 */}
      <ul className="w-[164px] h-full px-[20px] py-[15px] flex flex-col gap-[20px] bg-bg z-[1]">{categoryEl}</ul>

      {/* 클릭 금지 구역 */}
      <div className="absolute left-[164px] top-0 right-0 bottom-0 bg-[rgba(23,23,27,0.4)] z-[1]"></div>
    </div>
  );
}
