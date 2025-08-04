'use client';

import LOGO from '../../../public/icons/logo.svg';
import Nuprofile from '@assets/icons/unprofile.svg';
import Category from '@assets/icons/category.svg';
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
import Image from 'next/image';
import { Heart, Bell } from 'lucide-react';

import Link from 'next/link';

import BackIcon from '@assets/icons/arrowLeft.svg';

/* 헤더 */
import { ArrowLeft } from 'lucide-react';
import { useEffect, useState } from 'react';
import useUserStore from 'zustand/userStore';
import { Searchbar } from './Searchbar';
import { allowScroll, preventScroll } from '@utils/modal';

interface HeaderMenuProps {
  categorySetting: () => void;
}

interface LoginProfileProps {
  user: {
    name: string;
    image?: string;
  };
}

// const API_URL = process.env.NEXT_PUBLIC_API_URL;

export default function Header() {
  const { user, resetUser } = useUserStore();

  const handleLogout = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    resetUser();
    alert('로그아웃 되었습니다.');
  };
  const innerStyle = 'w-full h-full';
  const headerStyle =
    'flex flex-col gap-[12.5px] w-full fixed bg-bg shadow-[0_4px_4px_rgba(0,0,0,0.25)] z-[999] min-w-[320px]';

  /* 카테고리 상태 관리 */
  const [category, setCategory] = useState(false);

  function categorySetting() {
    setCategory(!category);
  }

  return (
    <div className={innerStyle}>
      {/* header */}
      <header className={headerStyle}>
        {user ? (
          <form onSubmit={handleLogout}>
            <LoginProfile user={user} />
          </form>
        ) : (
          <NotLoginProfile />
        )}

        {/* 메뉴 */}
        <HeaderMenu categorySetting={categorySetting} />
      </header>

      {/* 카테고리 창 */}
      {/* 클릭이벤트 or 호버 연결 필요 */}
      {category ? <CategoryMenu /> : null}
    </div>
  );
}

/* 타이틀, 프로젝트 만들기, 로그인/회원가입 */
/* 로그인 안했을때 이거 사용 */
export function NotLoginProfile() {
  const innerStyle =
    'pt-[12px] px-[20px] flex justify-between items-center normal-14 ' +
    'max-[480px]:text-[12px] max-[480px]:px-[5px] ' +
    'tablet:text-[14px] tablet:pt-[25px] tablet:px-[35px] ' +
    'laptop:px-[75px] laptop:pt-[30px] laptop:text-[16px]';
  const innerProfileStyle = 'flex gap-[15px] font-[600] ' + 'max-[480px]:text-[11px] max-[480px]:gap-[5px]';
  const logoStyle = 'laptop:w-[100px] laptop:h-[36px]';
  const loginOrsignButtonStyle =
    'flex gap-[8px] font-[500] px-[15px] py-[3.5px] border-[1px] border-secondary-200 rounded-[10px] items-center';

  return (
    <div className={innerStyle}>
      <Link href={'/'}>
        <LOGO width={80} height={30} className={logoStyle} />
      </Link>

      <div className={innerProfileStyle}>
        <Link href={'/login'} className="cursor-pointer">
          <span>프로젝트</span> <span>만들기</span>
        </Link>

        <Link href={'/login'} className={'cursor-pointer ' + loginOrsignButtonStyle}>
          <Nuprofile width={20} height={20} />
          <span>로그인/회원가입</span>
        </Link>
      </div>
    </div>
  );
}

/* 타이틀, 닉네임 */
/* 로그인 했을때 이거 사용 */
export function LoginProfile({ user }: LoginProfileProps) {
  const innerStyle =
    'pt-[12px] px-[20px] flex justify-between items-center normal-14 ' +
    'max-[480px]:px-[5px] max-[480px]:text-[11px] ' +
    'tablet:text-[14px] tablet:pt-[25px] tablet:px-[35px] ' +
    'laptop:px-[75px] laptop:pt-[30px] laptop:text-[16px]';
  const innerProfileStyle = 'flex gap-[4px] tablet:gap-[10px] font-[600] items-center';
  const logoStyle = 'laptop:w-[100px] laptop:h-[36px] mr-[4px]';
  const profileButtonStyle =
    'flex gap-[8px] font-[500] px-[5px] py-[2px] border-[1px] border-secondary-200 rounded-[10px] items-center ' +
    'tablet:px-[7px] tablet:py-[5px]';
  const nickNameStyle =
    'text-[14px] ' + 'max-[480px]:text-[12px] ' + 'mobile:text-[14px] ' + 'tablet:text-[14px] ' + 'laptop:text-[16px]';
  const iconStyle = 'mobile:w-[16px] h-[16px] tablet:w-[30px] h-[30px]';

  const imageUrl = user.image
    ? user.image.startsWith('http')
      ? user.image
      : `${process.env.NEXT_PUBLIC_API_URL}/${user.image}`
    : null;

  return (
    <div className={innerStyle}>
      <Link href={'/'}>
        <LOGO width={80} height={30} className={logoStyle} />
      </Link>

      <div className={innerProfileStyle}>
        {/* <button className="cursor-pointer">프로젝트 만들기</button> */}
        <Link href={'/products/new'} className="cursor-pointer whitespace-nowrap">
          프로젝트 만들기
        </Link>
        <Link href={'/accounts'}>
          <Heart width={14} height={14} className={iconStyle} />
        </Link>
        <Link href={'/accounts'}>
          <Bell width={14} height={14} className={iconStyle} />
        </Link>

        <Link href={'/accounts'} className={profileButtonStyle}>
          {imageUrl ? (
            <div className="relative w-[30px] h-[30px] tablet:w-[35px] tablet:h-[35px] flex-shrink-0 mt-[2px]  overflow-hidden">
              <Image
                src={imageUrl}
                alt="프로필 이미지"
                fill
                className="object-contain"
                sizes="(max-width: 768px) 27px, 40px"
              />
            </div>
          ) : (
            <Profile width={27} height={27} className="tablet:w-[40px] h-[40px] flex-shrink-0" />
          )}
          <span className={nickNameStyle}>{user.name}</span>
        </Link>
        <button type="submit" className={profileButtonStyle + ' cursor-pointer'}>
          로그아웃
        </button>
      </div>
    </div>
  );
}

/* 메뉴, 검색창 */
function HeaderMenu({ categorySetting }: HeaderMenuProps) {
  const innerStyle =
    'px-[20px] pb-[14px] normal-12 font-[600] flex justify-between ' +
    'max-[480px]:px-[5px] ' +
    'tablet:text-[14px] tablet:px-[35px] tablet:pb-[20px] ' +
    'laptop:px-[75px] laptop:pb-[14px] laptop:text-[16px]';
  const categoryStyle = 'flex items-center gap-[6px] hover:text-primary-800 ' + 'tablet:gap-[10px]';
  const categoryIconStyle = 'mobile:w-[15px] mobile:h-[15px] ' + 'laptop:w-[20px] laptop:h-[20px]';
  const menuListStyle =
    'flex gap-[8px] items-center ' + 'max-[480px]:gap-[5px] ' + 'tablet:gap-[15px] ' + 'laptop:gap-[25px]';
  const menuStyle = 'hover:text-primary-800';

  const menu = ['인기', '신규', '오픈예정', '마감임박', '환불정책'];
  const menuEl = menu.map(txt => (
    <li className={'cursor-pointer ' + menuStyle} key={txt}>
      {txt}
    </li>
  ));

  menuEl.unshift(
    <li key={'카테고리'} className={'cursor-pointer ' + categoryStyle} onClick={categorySetting}>
      <Category width={13} height={13} className={categoryIconStyle} />
      <span>카테고리</span>
    </li>,
  );

  return (
    <nav className={innerStyle}>
      <ul className={menuListStyle}>{menuEl}</ul>
      {/* 검색바 */}
      <Searchbar />
    </nav>
  );
}

/* 카테고리 메뉴 */
function CategoryMenu() {
  const innerStyle =
    'fixed top-[95px] w-full h-full z-[2] ' + 'tablet:h-auto tablet:top-[125px] ' + 'laptop:top-[133px]';
  const iconStyle = 'laptop:w-[20px] laptop:h-[20px] ';
  const categoryListStyle =
    'w-[164px] h-full px-[20px] py-[15px] flex flex-col gap-[20px] bg-bg ' +
    'tablet:flex-row tablet:w-full tablet:h-auto tablet:pt-[20.5008px] tablet:pb-[19px] tablet:pl-[45px] tablet:pr-[15px] tablet:gap-[10px] ' +
    'laptop:pl-[95px] laptop:pt-[17px] laptop:pb-[18px] laptop:pr-[234px] laptop:gap-[25px]';
  const notTouchStyle =
    'absolute left-[164px] top-0 right-0 bottom-0 bg-[rgba(23,23,27,0.5)] z-[50] ' +
    'tablet:hidden tablet:w-0 tablet:h-0 tablet:gap-[15px] ';
  const categoryStyle =
    'flex gap-[8px] semibold-12 hover:fill-primary-800 hover:text-primary-800 ' +
    'tablet:shrink-0 ' +
    'laptop:text-[14px] laptop:gap-[10px]';

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

  const href = [
    '/products',
    '/products?custom=food',
    '/products?custom=clothes-and-assorted-goods',
    '/products?custom=home-and-living',
    '/products/?custom=stationery',
    '/products/?custom=beauty-and-perfumes',
    '/products/?custom=technology',
    '/products/?custom=special-and-season',
    '/products/?custom=kids',
    '/products/?custom=game',
  ];

  const icon = [
    <CategoryAll width={15} height={15} key={'CategoryAll'} className={iconStyle} />,
    <Food width={15} height={15} key={'Food'} className={iconStyle} />,
    <Clothes width={15} height={15} key={'Clothes'} className={iconStyle} />,
    <Home width={15} height={15} key={'Home'} className={iconStyle} />,
    <Phrase width={15} height={15} key={'Phrase'} className={iconStyle} />,
    <Perfume width={15} height={15} key={'Perfume'} className={iconStyle} />,
    <Tech width={15} height={15} key={'Tech'} className={iconStyle} />,
    <SpecialSeason width={15} height={15} key={'SpecialSeason'} className={iconStyle} />,
    <Kids width={15} height={15} key={'Kids'} className={iconStyle} />,
    <Game width={15} height={15} key={'Game'} className={iconStyle} />,
  ];

  // 이거 첫번째꺼에만 넣기
  const categoryEl = category.map((txt, index) => (
    <li key={txt}>
      <Link href={href[index]} className={categoryStyle}>
        {icon[index]}
        <span>{txt}</span>
      </Link>
    </li>
  ));

  const [isMobile, setIsMobile] = useState(false);

  // 모바일 체크
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 767);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // 모바일에서 카테고리 열릴 시 스크롤 방지
  useEffect(() => {
    if (!isMobile) return;

    const prevScrollY = preventScroll();
    return () => {
      allowScroll(prevScrollY);
    };
  }, [isMobile]);

  return (
    <div className={innerStyle}>
      {/* 카테고리 메뉴 */}
      <ul className={categoryListStyle}>{categoryEl}</ul>

      {/* 클릭 금지 구역 */}
      <div className={notTouchStyle}></div>
    </div>
  );
}

// 480 카테고리 x 헤더 (세부 상품, 결제하기 480에서 사용)
export function HeaderMobile() {
  return (
    <header className="flex text-font-900  w-120 bg-bg shadow-[0_4px_4px_rgba(0,0,0,0.25)] text-center h-[73px] items-center gap-[77px] pl-5 pr-[106px] fixed z-50 ">
      <Link href="/">
        <ArrowLeft className="stroke-font-900" />
      </Link>
      <p className="semibold-18 w-[257px]">개구리 중사 케로케로케로 티셔츠</p>
    </header>
  );
}

type InquiryHeaderProps = {
  title: string;
};

// 카테고리 x 헤더 (문의하기, 결제하기에서 사용)
export function InquiryHeader({ title }: InquiryHeaderProps) {
  return (
    <>
      <div className="block mobile:hidden">
        <header className="flex w-full px-4 py-4 bg-bg shadow-md fixed z-50 items-center">
          <Link href="/">
            <BackIcon className="w-5 h-5 flex-shrink-0" />
          </Link>
          <p className="flex-1 text-center semibold-20 text-font-900 leading-tight truncate">{title}</p>
        </header>
      </div>

      <div className="hidden mobile:block">
        <div className="w-full max-w-screen-lg px-[40px] py-[40px] tablet:pl-[100px] bg-white shadow-md box-border">
          <div className="flex items-center gap-[4px]">
            <Link href="/">
              <LOGO className="w-[93px] h-auto cursor-pointer" />
            </Link>
            <span className="semibold-24 text-font-900">· {title}</span>
          </div>
        </div>
      </div>
    </>
  );
}
