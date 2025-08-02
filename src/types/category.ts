import { IProductCategoryDB } from './product';

// DB 값 → 드롭다운 라벨
export const dbCategoryToLabel: Record<string, string> = {
  food: '푸드',
  clothes: '의류 · 잡화',
  'assorted-goods': '의류 · 잡화',
  home: '홈 · 리빙',
  living: '홈 · 리빙',
  stationery: '문구',
  beauty: '뷰티 · 향수',
  perfumes: '뷰티 · 향수',
  technology: '테크',
  special: '특별기획 · 시즌 기획',
  season: '특별기획 · 시즌 기획',
  kids: '키즈',
  game: '게임',
};

// 드롭다운 라벨 → DB 값 (단일 기준)
export const labelToDbCategoryMap: Record<string, IProductCategoryDB> = {
  푸드: 'food',
  '의류 · 잡화': 'clothes',
  '홈 · 리빙': 'living',
  문구: 'stationery',
  '뷰티 · 향수': 'beauty',
  테크: 'technology',
  '특별기획 · 시즌기획': 'special',
  키즈: 'kids',
  게임: 'game',
};
