import { IProductCategoryDB } from './product';

// DB → 드롭다운
export const dbCategoryToLabel: Record<IProductCategoryDB, string> = {
  푸드: '푸드',
  '의류 · 잡화': '의류 · 잡화',
  '홈 · 리빙': '홈 · 리빙',
  문구: '문구',
  '뷰티 · 향수': '뷰티 · 향수',
  테크: '테크',
  '특별기획 · 시즌기획': '특별기획 · 시즌기획',
  키즈: '키즈',
  게임: '게임',
};

// 드롭다운 → DB
export const labelToDbCategoryMap: Record<string, IProductCategoryDB> = {
  푸드: '푸드',
  '의류 · 잡화': '의류 · 잡화',
  '홈 · 리빙': '홈 · 리빙',
  문구: '문구',
  '뷰티 · 향수': '뷰티 · 향수',
  테크: '테크',
  '특별기획 · 시즌기획': '특별기획 · 시즌기획',
  키즈: '키즈',
  게임: '게임',
};
