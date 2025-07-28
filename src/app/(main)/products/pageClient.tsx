'use client';

import { ProductDBItem } from '@components/product/ProductItem';
import { getProducts } from '@data/functions/product';
import { categoryNameMap, Iproduct, IproductCategory } from '@models/product';
import { useEffect, useState } from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { useSearchParams } from 'next/navigation';

// 상품 목록 조회
export default function ProductPageClient() {
  const [products, setProducts] = useState<Iproduct[]>([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);

  // 상품 불러오기
  const searchParams = useSearchParams();
  const categorySlug = searchParams.get('custom') as IproductCategory | null;

  useEffect(() => {
    setLoading(true);
    setError('');

    getProducts(categorySlug || undefined)
      .then(res => {
        if (res.ok && res.item) {
          setProducts(res.item);
        } else if (res.ok === 0) {
          setError(res.message || '상품 로딩 실패');
        }
        setLoading(false);
      })
      .catch(() => {
        setError('상품을 불러오는 중 오류가 발생했습니다.');
        setLoading(false);
      });
  }, [categorySlug]);

  return (
    <main className="p-5 tablet:p-10 laptop:p-[90px]">
      <ProductListCategory />
      <div className="grid grid-cols-2 tablet:grid-cols-3 laptop:grid-cols-4 gap-2.5 mobile:pt-10 pt-6">
        {loading ? (
          // 로딩동안 스켈레톤 보이도록 설정
          Array.from({ length: 8 }).map((_, idx) => <ProductItemSkeleton key={idx} />)
        ) : error ? (
          // 에러 안내
          <p className="col-span-full medium-14 text-center text-error">{error}</p>
        ) : (
          // 로딩 이후 상품 렌더링
          products.map(product => <ProductDBItem key={product._id} product={product} />)
        )}
      </div>
    </main>
  );
}

// 데이터 로딩 시간 동안 보일 스켈레톤 이미지
function ProductItemSkeleton() {
  return (
    <div className="flex flex-col gap-[15px]">
      {/* 썸네일 */}
      <Skeleton height={194} borderRadius={16} />

      {/* 텍스트 부분 */}
      <div className="space-y-2.5 tablet:space-y-5">
        <Skeleton height={24} width="70%" />
        <Skeleton height={20} width="40%" />
        <Skeleton height={18} width="50%" />
      </div>
    </div>
  );
}

// 전체, 공개 예정, 진행중, 성사된 프로젝트 필터링 카테고리
function ProductListCategory() {
  const categories = ['전체 프로젝트', '진행중인 프로젝트', '공개 예정 프로젝트', '성사된 프로젝트'];
  const [selectedCategory, setSelectedCategory] = useState('전체 프로젝트');

  const searchParams = useSearchParams();
  const customSlug = searchParams.get('custom');
  const title = customSlug ? (categoryNameMap[customSlug as IproductCategory] ?? '전체 프로젝트') : '전체 프로젝트';

  const innerStyle = 'w-[480px] h-[95px] normal-18 flex flex-col gap-[20px] ' + 'tablet:w-auto ' + 'laptop:gap-[40px]';
  const titleStyle = 'font-[700] ' + 'tablet:text-[20px] ' + 'laptop:text-[24px]';
  const projectListStyle =
    'flex h-[30px] items-center text-[14px] cursor-pointer ' + 'tablet:gap-[10px] ' + 'laptop:text-[16px]';
  const nowProjectStyle = ' font-[700] p-[5] border-[0.8px] border-[#B8B8BD] rounded-[50px] ' + 'tablet:p-[10px]';
  const projectStyle = 'p-[5px] border-[0.8px] border-[#B8B8BD] rounded-[50px] ' + 'tablet:p-[10px]';

  return (
    <div className={innerStyle}>
      <span className={titleStyle}>{title}</span>

      <div className="flex tablet:flex-row justify-between flex-col gap-5">
        <ul className={projectListStyle}>
          {categories.map(category => (
            <li
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={category === selectedCategory ? nowProjectStyle : projectStyle}
            >
              {category}
            </li>
          ))}
        </ul>
        <FilterToggleCategory filterList={['추천순', '인기순', '최신순', '마감임박순']} className="w-[110px]" />
      </div>
    </div>
  );
}

// 추천순, 인기순 등 필터링 하기 위한 카테고리
interface FilterToggleCategoryProps {
  filterList: string[];
  className?: string;
}

// className에 width 값만 주면 됨!!
function FilterToggleCategory({ filterList, className = '' }: FilterToggleCategoryProps) {
  const [selectedFilter, setSelectedFilter] = useState(filterList[0]);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`z-10 relative bg-white ${className}`}>
      {/* 필터 버튼 */}
      <div>
        <button
          name="filter"
          type="button"
          onClick={() => setIsOpen(prev => !prev)}
          className=" w-full flex p-[10px] border-1 border-font-400 items-center justify-between cursor-pointer"
        >
          <p className="bold-14 text-font-400">{selectedFilter}</p>

          {/* 드롭다운 열림 여부에 따라 아이콘 바꾸기 */}
          {isOpen ? (
            <ChevronUp className="w-[20px] h-[14px] text-font-400 bg-white" />
          ) : (
            <ChevronDown className="w-[20px] h-[14px] text-font-400 bg-white" />
          )}
        </button>
      </div>

      {/* 필터 리스트 */}
      {isOpen && (
        <div className="medium-14 w-full border border-font-400 absolute top-full left-0 ">
          {filterList.map(filter => (
            <button
              key={filter}
              onClick={() => {
                setSelectedFilter(filter);
                setIsOpen(false);
              }}
              className={`w-full text-right px-[10px] py-[5px] cursor-pointer hover:bg-primary-50
                ${filter === selectedFilter ? 'text-error bold-14' : 'text-font-400'}`}
            >
              {filter}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
