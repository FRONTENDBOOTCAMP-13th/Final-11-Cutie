'use client';

import { getProducts } from '@data/functions/product';
import { useEffect, useState } from 'react';

export function PopularKeywords() {
  // 인기 키워드 목록
  const [popularKeywords, setPopularKeywords] = useState<string[]>([]);
  // 로딩
  const [loading, setLoading] = useState(true);

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
          const keywords = extractKeywordsFromProducts(response.item);
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
  });
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
        <li>박선영은 최고야</li>
        <li>나눈 코딩이 시러..</li>
        <li>하지만</li>
        <li>잘하고 싶어</li>
        <li>개구리 중사 캐로캐로캐로캐로 티셔츠</li>
        <li>타로카드</li>
        <li>재밌는 보드게임</li>
        <li>한복</li>
        <li>생일선물</li>
        <li>의미있는 선물</li>
      </ol>
    </>
  );
}
