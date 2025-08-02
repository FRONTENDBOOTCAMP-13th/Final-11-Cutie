'use client';

import { getProducts } from '@data/functions/product';
import { extractKeywordsFromProducts, getDefaultKeywords, getCurrentDate } from '@utils/keywordUtils';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

interface PopularKeywordsProps {
  maxKeywords?: number;
}
export function PopularKeywords({ maxKeywords = 10 }: PopularKeywordsProps) {
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
          const keywords = extractKeywordsFromProducts(response.item);
          // 상위 키워드 10개 추출
          setPopularKeywords(keywords);
        } else {
          // 응답 실패 시 기본 검색어 설정
          setPopularKeywords(getDefaultKeywords().slice(0, maxKeywords));
        }
      } catch (error) {
        console.error('인기 검색어 조회 실패', error);
        setPopularKeywords(getDefaultKeywords().slice(0, maxKeywords));
      } finally {
        setLoading(false); // 로딩
      }
    };
    fetchPopularKeywords();
  }, [maxKeywords]);

  // 키워드 클릭 -> 페이지 이동
  const handleKeywordClick = (keyword: string) => {
    router.push(`/products?keyword=${encodeURIComponent(keyword)}`);
  };

  return (
    <>
      <section className="flex justify-between px-3 medium-14 tablet:text-[16px] text-font-900 mb-[30px]">
        <span>인기 검색어</span>
        <span className="text-font-400">{getCurrentDate()}</span>
      </section>

      {/* 인기 목록 */}
      <ol className="flex flex-col normal-14 tablet:text-[16px] gap-3 mobile:gap-5 list-decimal px-8 ">
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
                className="cursor-pointer transition-colors hover:text-primary-800 w-fit "
                onClick={() => handleKeywordClick(keyword)}
              >
                {keyword}
              </li>
            ))}
      </ol>
    </>
  );
}
