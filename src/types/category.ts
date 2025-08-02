import { IProductCategoryDB } from './product';

// DB 값 → 드롭다운 라벨
export const dbCategoryToLabel: Record<IProductCategoryDB, string> = {
  푸드: '푸드',
  의류: '의류 · 잡화',
  잡화: '의류 · 잡화',
  홈: '홈 · 리빙',
  리빙: '홈 · 리빙',
  문구: '문구',
  뷰티: '뷰티 · 향수',
  향수: '뷰티 · 향수',
  테크: '테크',
  특별기획: '특별기획 · 시즌기획',
  시즌기획: '특별기획 · 시즌기획',
  키즈: '키즈',
  게임: '게임',
};

// 드롭다운 라벨 → DB 값 (단일 기준)
export const labelToDbCategoryMap: Record<string, IProductCategoryDB> = {
  푸드: '푸드',
  '의류 · 잡화': '의류',
  '홈 · 리빙': '홈',
  문구: '문구',
  '뷰티 · 향수': '뷰티',
  테크: '테크',
  '특별기획 · 시즌기획': '특별기획',
  키즈: '키즈',
  게임: '게임',
};
