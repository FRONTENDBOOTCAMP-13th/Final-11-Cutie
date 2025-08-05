import { IproductImg } from './product';

// 주문한 상품
export interface IOrderProduct {
  _id: number;
  state: string;
  name: string;
  image: IproductImg;
  quantity: number;
  price: number;
  review_id: number;
}

// 주문 가격
export interface IOrderCost {
  products: number;
  shippingFees: number;
  discount: {
    products: number;
    shippingFees: number;
  };
  total: number;
}

// 주문 배송지
export interface IOrderAddress {
  name: string; // 배송지명 (ex. "회사", "집")
  value: string; // 실제 주소 문자열
}

// 상세 주문 정보
export interface ISellerOrderDetail {
  _id: number;
  user_id: number;
  state: string; // 전체 주문 상태
  products: IOrderProduct[];
  cost: IOrderCost;
  address: IOrderAddress;
  createdAt: string;
  updatedAt: string;
}

// 구매 목록
export interface IUserOrderList {
  _id: number;
  user_id: number;
  state: string; // 전체 주문 상태
  products: IOrderProduct[];
  cost: IOrderCost;
  address: IOrderAddress;
  createdAt: string;
  updatedAt: string;
}
