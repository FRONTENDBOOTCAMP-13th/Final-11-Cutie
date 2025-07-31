import { Iproduct } from '@models/product';

/**
 * 상품 배열에서 인기 키워드를 추출합니다.
 * @param products 상품 배열
 * @returns 빈도수 기준으로 정렬된 키워드 배열
 */
export const extractKeywordsFromProducts = (products: Iproduct[], maxKeywords: number = 10): string[] => {
  const keywordFrequency: { [key: string]: number } = {};

  products.forEach(product => {
    // 상품명을 공백과 특수문자로 분리하여 키워드 추출
    const words = product.name
      .replace(/[^\w가-힣\s]/g, ' ') // 특수문자 제거
      .split(/\s+/) // 공백으로 분리
      .filter(word => word.length >= 2) // 2글자 이상만
      .map(word => word.trim()) //공백제거
      .filter(word => word.length > 0); // 빈 문자열 제거

    // 개별 단어 빈도수 계산
    words.forEach(word => {
      keywordFrequency[word] = (keywordFrequency[word] || 0) + 1;
    });

    // 전체 상품명 빈도수 계산
    if (product.name.length <= 20 && product.name.length >= 2) {
      keywordFrequency[product.name] = (keywordFrequency[product.name] || 0) + 2; // 전체 상품명은 가중치 높게
    }
  });

  // 빈도수 기준으로 정렬하여 반환
  return Object.entries(keywordFrequency)
    .sort(([, a], [, b]) => b - a)
    .map(([keyword]) => keyword)
    .filter(keyword => keyword.length >= 2) // 최소 2글자 이상
    .slice(0, maxKeywords);
};

/**
 * 기본 인기 검색어 목록을 반환
 */
export const getDefaultKeywords = (): string[] => [
  '개구리 중사 캐로캐로캐로캐로 티셔츠',
  '타로카드',
  '재밌는 보드게임',
  '한복',
  '생일선물',
  '의미있는 선물',
  '11조',
  '나눈 코딩이 시러..',
  '하지만',
  '잘하고 싶어',
];

/**
 * 현재 날짜 YYYY.MM.DD
 */
export const getCurrentDate = (): string => {
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth() + 1;
  const day = today.getDate();
  return `${year}.${month.toString().padStart(2, '0')}.${day.toString().padStart(2, '0')}`;
};
