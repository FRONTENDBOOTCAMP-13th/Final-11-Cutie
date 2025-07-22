// 펀딩 상품 날짜 정보 타입 (시작일, 종료일, 배송일)
export interface IFundingDateInfo {
  startDate: string;
  endDate: string;
  deliveryDate: string;
}

// 펀딩 상품 타입
export interface IFundingProduct {
  _id: number;
  seller: number;
  title: string;
  description: string; // html 포함
  image: string;
  price: number;
  goalAmount: number;
  currentAmount: number;
  goalPercent: number;
  funding: IFundingDateInfo;
  category: string;
  stock: number;
  status: 'funding' | 'ended' | 'scheduled'; // 펀딩 상태 (펀딩중, 끝, 공개예정)
  likeCount: number;
  createdAt: string;
  updatedAt: string;
}
