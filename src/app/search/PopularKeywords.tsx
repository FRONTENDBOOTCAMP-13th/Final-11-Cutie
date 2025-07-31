'use client';

import { getProducts } from '@data/functions/product';
import { Iproduct } from '@models/product';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export function PopularKeywords() {
  // 인기 키워드 목록
  const [popularKeywords, setPopularKeywords] = useState<string[]>([]);
  // 로딩
  const [loading, setLoading] = useState(true);
  //페이지 이동 훅
  const router = useRouter();

  // 인기 검색어 생성 로직
  useEffect(() => {
    const fetchPopularKeywords = async () => {
      try {
        setLoading(true); // 로딩

        // 인기순으로 상품 리스트 조회하기
        const response = await getProducts({
          categorySlug: undefined, // 전체 카테고리
          statusFilter: '전체 프로젝트',
          sortOption: '인기순',
          keyword: undefined,
        });

        if (response.ok && response.item) {
          // 상품명에서 키워드 추출
          const keywords = extractProductsKeywords(response.item);
          // 상위 키워드 10개 추출
          setPopularKeywords(keywords.slice(0, 10));
        }
      } catch (error) {
        console.error('인기 검색어 조회 실패', error);
        setPopularKeywords([
          '개구리 중사 캐로캐로캐로캐로 티셔츠',
          '타로카드',
          '재밌는 보드게임',
          '한복',
          '생일선물',
          '의미있는 선물',
          '박선영은 최고야',
          '나눈 코딩이 시러..',
          '하지만',
          '잘하고 싶어',
        ]);
      } finally {
        setLoading(false); // 로딩
      }
    };
    fetchPopularKeywords();
  }, []);

  // 상품명에서 키워드 추출 (빈도 높은 순)
  const extractProductsKeywords = (products: Iproduct): string[] => {
    // 키워드 빈도
    const keywordFrequecy: { [key: string]: number } = {};

    products.forEach(product => {
      const words = product.name
        .replace(/[^\w가-힣\s]/g, ' ') // 특수문자 제거
        .split(/\s+/) // 공백 분리
        .filter(word => word.length >= 2) // 2글자 이상 단어
        .map(word => word.trim()) //공백 제거
        .filter(word => word.length > 0); // 빈 문자열 제거

      words.forEach(word => {
        keywordFrequecy[word] = (keywordFrequecy[product.name] || 0) + 1;
      });

      // 빈도수로 정렬하고 키워드만 반환
      return Object.entries(keywordFrequecy)
        .sort(([, a], [, b]) => b - a) // 빈도 내림차순
        .map(([keyword]) => keyword)
        .filter(keyword => keyword.length >= 2); // 2글자 이상
    });

    // 키워드 클릭 -> 페이지 이동
    const handleKeywordClick = (keyword: string) => {
      router.push(`/products?keyword=${encodeURIComponent(keyword)}`);
    };
  };

  // 현재 날짜
  const getCurrentDate = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth() + 1;
    const day = today.getDate();
    return `${year}.${month.toString().padStart(2, '0')}.${day.toString().padStart(2, '0')}`;
  };

  return (
    <>
      <section className="flex justify-between px-3 medium-14 tablet:text-[16px] text-font-900 mb-[30px]">
        <span>인기 검색어</span>
        <span className="text-font-400">{getCurrentDate()}</span>
      </section>

      {/* 인기 목록 */}
      <ol className="flex flex-col normal-14 tablet:text-[16px] gap-3 mobile:gap-5 list-decimal px-8">
        {loading
          ? // 로딩 중
            Array.from({ length: 10 }).map((_, idx) => (
              <li key={idx} className="animate-pulse">
                <div className="h-4 bg-gray-200 rounded w-3/4"></div>
              </li>
            ))
          : // 인기 검색어
            popularKeywords.map((keyword, index) => (
              <li
                key={index}
                className="cursor-pointer hover:text-primary-500 transition-colors"
                onClick={() => handleKeywordClick(keyword)}
              >
                {keyword}
              </li>
            ))}
      </ol>
    </>
  );
}
