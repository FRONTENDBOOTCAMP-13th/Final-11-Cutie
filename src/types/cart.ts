import { Iproduct, IproductImg } from './product';

// 장바구니 아이템 타입
export interface IcartItem {
  _id: number; // 장바구니 고유 ID
  product_id: number; // 상품 ID
  quantity: number; // 선택한 수량
  user_id: number; // 사용자 ID
  createdAt: string;
  updatedAt: string;
  product: Iproduct & { image?: IproductImg };
}

// 장바구니 총 정산 타입
export interface IcartCost {
  itemPrice: number; // 전체 상품 가격
  shippingFees: number; // 배송비 합계
  totalPrice: number; // 총 결제 금액 (상품 + 배송)
}

// 장바구니 추가 요청 시 사용할 타입
export interface IcartPostReq {
  products: IcartProductReq[]; // 담을 상품 목록
}

// 장바구니에 상품 추가 후 응답 타입
export interface IcartPostRes {
  ok: 1 | 0; // 성공 여부
  item: IcartItem[]; // 추가 후 장바구니 상태
}

// 장바구니에 담을 개별 상품 요청 타입
export interface IcartProductReq {
  _id: number; // 상품 id
  quantity: number; // 담을 수량
}

// 장바구니 전체 조회 시 응답 타입
export interface IcartProductRes {
  ok: 0 | 1; // 성공 여부
  item: IcartItem[]; // 장바구니 상품 목록
  cost: IcartCost; // 총 금액 정보
}

// 장바구니 아이템 삭제 후 응답 타입
export interface IcartDeletRes {
  item: IcartItem[]; // 남은 장바구니 상품 목록
  cost: IcartCost; // 새로 계산된 금액 정보
}
