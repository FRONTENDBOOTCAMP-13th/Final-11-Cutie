// 상품 extra 타입
export interface IproductExtra {
  goalAmount: number;
  goalPercent: number;

  funding: IproductImg[];

  category: string;
  status: string;
  likeCount: number;
}

// extra의 펀딩 정보에 대한 타입
export interface IproductFunding {
  startDate: number;
  endDate: number;
  deliveryDate: number;
}

// 상품 이미지 타입
export interface IproductImg {
  path: string;
  name: string;
  originalname: string;
}

// 상품 목록 조회시 상품 1개의 타입
export interface Iproduct {
  _id: number;
  seller_id: number;
  price: number;
  shippingFees: number;
  show: boolean;
  active: boolean;
  name: string;
  quantity: number;
  buyQuantity: number;
  mainImages: IproductImg[];
  createdAt: string;
  updatedAt: string;
  extra: IproductExtra;
  replies: number;
  bookmarks: number;
  options: number;
}
