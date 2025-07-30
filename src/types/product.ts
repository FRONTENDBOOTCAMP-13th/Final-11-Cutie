// 상품 extra 타입
export interface IproductExtra {
  goalAmount: number; // 목표 달성률
  goalPercent: number; // 현재 달성률

  funding: IproductFunding; // 펀딩 진행 일정

  category: string; // 상품에 대한 카테고리 (ex.의류..)
  status: string; // 상품 상태 (진행중, 종료, 공개예정)
  likeCount: number; // 좋아요 수
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

// 상품 목록 조회시 상품 1개의 타입
export interface Iproduct {
  _id: number; // 펀딩 id
  seller_id: number; // 판매자 이름
  name: string; // 펀딩 이름
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
}
