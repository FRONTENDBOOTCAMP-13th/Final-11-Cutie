// 상품 extra 타입
export interface IproductExtra {
  goalPercent: number; // 현재 달성률
  goalPrice: number; // 목표 금액

  funding: IproductFunding; // 펀딩 진행 일정

  category: IProductCategoryDB; // 상품에 대한 카테고리 (ex.의류..)
  status: IproductStatus; // 상품 상태 (진행중, 종료, 공개예정)
  likeCount: number; // 좋아요 수

  tag: string;
}

// extra의 펀딩 정보에 대한 타입
export interface IproductFunding {
  startDate: number; // 시작일
  endDate: number; // 종료일
  deliveryDate: number; // 배송예정일
}

// 상품 이미지 타입
export interface IproductImg {
  path: string; // 이미지 경로
  name: string; // 이미지 파일명
  originalname: string; // 이미지 alt 이름
}

// 상품 판매자 타입
export interface IproductSeller {
  _id: number;
  email: string;
  name: string;
  phone: string;
  address: string;
  image: string;
}

// 실제 DB에 저장되는 카테고리 값
export type IProductCategoryDB =
  | '푸드'
  | '의류 · 잡화'
  | '홈 · 리빙'
  | '문구'
  | '뷰티 · 향수'
  | '테크'
  | '특별기획 · 시즌기획'
  | '키즈'
  | '게임';

// URL 타입
export type IproductCategory =
  | 'food'
  | 'clothes-and-assorted-goods'
  | 'home-and-living'
  | 'stationery'
  | 'beauty-and-perfumes'
  | 'technology'
  | 'special-and-season'
  | 'kids'
  | 'game';

// URL과 DB 매핑 시 사용할 슬러그 객체
export const categorySlugMap: Record<IproductCategory, IProductCategoryDB[]> = {
  food: ['푸드'],
  'clothes-and-assorted-goods': ['의류 · 잡화'],
  'home-and-living': ['홈 · 리빙'],
  stationery: ['문구'],
  'beauty-and-perfumes': ['뷰티 · 향수'],
  technology: ['테크'],
  'special-and-season': ['특별기획 · 시즌기획'],
  kids: ['키즈'],
  game: ['게임'],
};

// 목록 조회 시 URL과 보일 이름 매핑
export const categoryNameMap: Record<IproductCategory, string> = {
  food: '푸드',
  'clothes-and-assorted-goods': '의류 · 잡화',
  'home-and-living': '홈 · 리빙',
  stationery: '문구',
  'beauty-and-perfumes': '뷰티 · 향수',
  technology: '테크',
  'special-and-season': '특별기획 · 시즌기획',
  kids: '키즈',
  game: '게임',
};

// 상품 상태
export type IproductStatus = 'funding' | 'upcomming' | 'success';

// 상태 필터 타입
export type ProductStatusFilter = '전체 프로젝트' | '진행중인 프로젝트' | '공개 예정 프로젝트' | '성사된 프로젝트';

// 상태 텍스트 -> DB 매핑, 전체 프로젝트는 상태 필터 타입에서 매핑될 필요 없으므로 제외
export const statusMap: Record<Exclude<ProductStatusFilter, '전체 프로젝트'>, IproductStatus> = {
  '진행중인 프로젝트': 'funding',
  '공개 예정 프로젝트': 'upcomming',
  '성사된 프로젝트': 'success',
};

// DB 매핑 -> 상태 텍스트
export const reverseStatusMap: Record<IproductStatus, ProductStatusFilter> = {
  funding: '진행중인 프로젝트',
  upcomming: '공개 예정 프로젝트',
  success: '성사된 프로젝트',
};

// 정렬 옵션 타입
export type ProductSortOption = '추천순' | '인기순' | '최신순' | '마감임박순';

// 정렬 옵션에 따른 쿼리 매핑
export const productSortQueryMap: Record<ProductSortOption, Record<string, number>> = {
  추천순: {}, // 기본값 (정렬 없음)
  인기순: { 'extra.likeCount': -1 },
  최신순: { createdAt: -1 },
  마감임박순: { 'extra.funding.endDate': 1 },
};

// 주문 상품 타입
export interface ISellerOrderProduct {
  _id: number;
  name: string;
  quantity: number;
  price: number;
  seller_id: number;
}

// 주문 상세 타입
export interface ISellerOrderDetail {
  _id: number;
  name: string;
  orders: {
    user_id: number;
  }[];
  createdAt: string;
  updatedAt: string;
}

// 상품 목록 조회시 상품 1개의 타입
export interface Iproduct {
  _id: number; // 펀딩 id
  seller_id: number; // 판매자 이름
  name: string; // 펀딩 이름
  content: string; // 내용
  price: number; // 가격
  //shippingFees: number; // 배송비
  show: boolean; // 사용자에게 보여줄지
  active: boolean; // 상품이 판매 중인가
  quantity: number; // 재고
  buyQuantity: number; // 구매한 수
  mainImages: IproductImg[]; // 이미지
  createdAt: string; // 펀딩 등록일
  updatedAt: string; // 마지막 수정일
  extra: IproductExtra; // extra
  seller: IproductSeller;
  myBookmarkId?: number; // 북마크한 경우 북마크 id
}

export interface ProductProps {
  product: Iproduct; // api 연결 위해 만든 type 불러오기
}
