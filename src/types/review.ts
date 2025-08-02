// 후기 작성자 타입
export interface IReviewUser {
  _id: number;
  name: string;
  image: string;
}

// 후기 extra 타입
export interface IReviewExtra {
  title: string;
  images: string[];
}

// 후기 항목
export interface IReview {
  _id: number;
  user_id: number;
  user: IReviewUser;
  order_id: number;
  product_id: number;
  rating: number;
  content: string;
  createdAt?: string;
  extra: IReviewExtra;
  replies: IReview[]
}

// 상품 판매자 정보 타입 
export interface IProductSeller {
  _id: number;
  email: string;
  name: string;
  phone: string;
  address: string;
  image: string;
}

// 상품 정보 타입 
export interface IProduct {
  _id: number;
  seller_id: number;
  name: string;
  price: number;
  seller: IProductSeller;
}

// 데이터 검증 실패 메세지
export interface ServerValidationError {
  type: string;
  value: string;
  msg: string;
  location: string;
}

// 서버 검증 에러 타입
export type ServerValidationErrors<E> = Partial<Record<keyof E, ServerValidationError>>;

// API 응답 타입
export type ApiRes<T, E = never> = 
  | { ok: 1; item: T } 
  | { ok: 0; message: string; errors?: ServerValidationErrors<E> };

// API 응답 Promise 타입 (실제 정의에 맞게 수정)
export type ApiResPromise<T> = Promise<ApiRes<T>>;


// 구매 후기 등록 요청 타입
export interface IReviewCreateReq {
  order_id: number;
  product_id: number;
  rating?: number;
  content: string;
  extra?: {
    title?: string;
    images?: string[];
  };
}
