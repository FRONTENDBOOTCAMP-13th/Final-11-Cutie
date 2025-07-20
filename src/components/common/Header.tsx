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

/* 헤더 */
import { ArrowLeft } from 'lucide-react';
        
/* 헤더 로그인(x) */
/* 현재 로그인 */
export function Header() {
  const innerStyle = 'w-full h-full';
  const headerStyle =
    'flex flex-col gap-[12.5px] w-full fixed bg-bg shadow-[0_4px_4px_rgba(0,0,0,0.25)] z-[999] min-w-[320px]';

  return (
    <div className={innerStyle}>
      {/* header */}
      <header className={headerStyle}>
        {/* 테스트 할 때 <NotLoginProfile /> , <LoginProfile /> 이거 둘 중 하나만 실행시켜주세요 */}

        {/* 로그인 안했을 때 */}
        <NotLoginProfile />

        {/* 로그인 했을 때 */}
        {/* <LoginProfile /> */}

        {/* 메뉴 */}
        <HeaderMenu />
      </header>

      {/* 카테고리 창 */}
      <CategoryMenu />
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
      <LOGO width={80} height={30} className={logoStyle} />

      <div className={innerProfileStyle}>
        <button>
          <span>프로젝트</span> <span>만들기</span>
        </button>
        <button className={loginOrsignButtonStyle}>
          <Nuprofile width={20} height={20} />
          <span>로그인/회원가입</span>
        </button>
      </div>
    </div>
  );
}

/* 타이틀, 닉네임 */
/* 로그인 했을때 이거 사용 */
export function LoginProfile() {
  const innerStyle =
    'pt-[12px] px-[20px] flex justify-between items-center normal-14 ' +
    'max-[480px]:px-[5px] max-[480px]:text-[11px] ' +
    'tablet:text-[14px] tablet:pt-[25px] tablet:px-[35px] ' +
    'laptop:px-[75px] laptop:pt-[30px] laptop:text-[16px]';
  const innerProfileStyle = 'flex gap-[10px] font-[600] items-center';
  const logoStyle = 'laptop:w-[100px] laptop:h-[36px]';
  const profileButtonStyle =
    'flex gap-[8px] font-[500] px-[5px] py-[2px] border-[1px] border-secondary-200 rounded-[10px] items-center ' +
    'tablet:px-[7px] tablet:py-[5px]';
  const nickNameStyle =
    'text-[14px] ' + 'max-[480px]:text-[12px] ' + 'mobile:text-[14px] ' + 'tablet:text-[14px] ' + 'laptop:text-[16px]';
  const iconStyle = 'tablet:w-[30px] h-[30px]';
  const profileIconStyle = 'tablet:w-[20px] tablet:h-[20px]';

  return (
    <div className={innerStyle}>
      <LOGO width={80} height={30} className={logoStyle} />

      <div className={innerProfileStyle}>
        <button>프로젝트 만들기</button>
        <Heart width={20} height={20} className={iconStyle} />
        <Bell width={20} height={20} className={iconStyle} />
        <button className={profileButtonStyle}>
          <Profile width={12} height={12} className={profileIconStyle} />
          <span className={nickNameStyle}>닉네임</span>
        </button>
      </div>
    </div>
  );
}

/* 메뉴, 검색창 */
function HeaderMenu() {
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
    <li className={menuStyle} key={txt}>
      {txt}
    </li>
  ));

  const inputStyle =
    'w-[150px] pl-[14px] pt-[6px] pb-[7px] pr-[36px] bg-[#D9D9D9] rounded-[10px] text-[9px] font-[400] ' +
    'tablet:w-auto tablet:pl-[20px] tablet:py-[10px] tablet:pr-[79px] tablet:text-[12px] ' +
    'laptop:text-[14px] laptop:pl-[19px] laptop:pr-[42px]';
  const searchIconStyle = 'absolute right-[13px] top-[50%] translate-y-[-50%]';

  menuEl.unshift(
    <li key={'카테고리'} className={categoryStyle}>
      <Category width={13} height={13} className={categoryIconStyle} />
      <span>카테고리</span>
    </li>,
  );

  return (
    <nav className={innerStyle}>
      <ul className={menuListStyle}>{menuEl}</ul>

      {/* 480px 이상일 때 검색창 제대로 보이도록 구성 */}
      <div className="relative max-[480px]:hidden">
        <input id="search" type="search" className={inputStyle} placeholder="검색어를 입력해주세요." />
        <Search width="12" height="12" className={searchIconStyle} />
      </div>

      {/* 320px ~ 479px 일때 검색창 버튼형식으로 구성*/}
      <button className="relative w-[25px] h-[25px] bg-[#D9D9D9] rounded-[4px] mobile:hidden">
        <Search
          width="12"
          height="12"
          className="absolute left-[50%] top-[50%] translate-y-[-50%] translate-x-[-50%]"
        />
      </button>
    </nav>
  );
}

/* 카테고리 메뉴 */
function CategoryMenu() {
  const innerStyle =
    'fixed top-[95px] w-full h-full z-[0] ' + 'tablet:w-auto tablet:h-auto tablet:top-[125px] ' + 'laptop:top-[136px]';
  const iconStyle = 'laptop:w-[20px] laptop:h-[20px] ';
  const categoryListStyle =
    'w-[164px] h-full px-[20px] py-[15px] flex flex-col gap-[20px] bg-bg z-[1] ' +
    'tablet:flex-row tablet:w-full tablet:h-auto tablet:pt-[20.5008px] tablet:pb-[19px] tablet:pl-[45px] tablet:pr-[15px] tablet:gap-[10px] ' +
    'laptop:pl-[95px] laptop:pt-[17px] laptop:pb-[18px] laptop:pr-[234px] laptop:gap-[25px]';
  const notTouchStyle =
    'absolute left-[164px] top-0 right-0 bottom-0 bg-[rgba(23,23,27,0.4)] z-[1] ' +
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

  const categoryEl = category.map((txt, index) => (
    <li key={txt} className={categoryStyle}>
      {icon[index]}
      <Link href={'#'}>{txt}</Link>
    </li>
  ));

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

// 카테고리 x 헤더 (문의하기에서 사용)
export function InquiryHeader() {
  return (
    <>
      <div className="block mobile:hidden">
        <header className="flex w-full px-4 py-4 bg-bg shadow-md fixed z-50 items-center">
          <Link href="/">
            <BackIcon className="w-5 h-5 flex-shrink-0" />
          </Link>
          <p className="ml-4 text-[20px] font-semibold text-font-900 leading-tight">개구리 중사 케로케로케로 티셔츠</p>
        </header>
      </div>

      <div className="hidden mobile:block">
        <div className="w-full max-w-screen-lg px-[40px] py-[40px] tablet:pl-[100px] bg-white shadow-md box-border">
          <div className="flex items-center gap-[4px]">
            <LOGO className="w-[93px] h-auto" />
            <span className="semibold-24 text-font-900">· 문의하기</span>
          </div>
        </div>
      </div>
    </>
  );
}
