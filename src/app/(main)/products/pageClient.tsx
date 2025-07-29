'use client';

import { ProductDBItem } from '@components/product/ProductItem';

import {
  categoryNameMap,
  Iproduct,
  IproductCategory,
  IproductStatus,
  ProductSortOption,
  ProductStatusFilter,
} from '@models/product';
import { useEffect, useState } from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { useSearchParams, useRouter } from 'next/navigation';
import { getProducts } from '@data/functions/product';

// 상품 목록 조회
export default function ProductPageClient() {
  const [products, setProducts] = useState<Iproduct[]>([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);

  const router = useRouter();
  const searchParams = useSearchParams();

  const categorySlug = searchParams.get('custom') as IproductCategory | null;
  const urlStatus = searchParams.get('status') as IproductStatus | null;

  // ✅ 상태 필터 초기값: status 쿼리값 → 한글 라벨로 매핑
  const getStatusLabel = (status: IproductStatus | null): ProductStatusFilter => {
    if (status === 'funding') return '진행중인 프로젝트';
    if (status === 'upcoming') return '공개 예정 프로젝트';
    if (status === 'success') return '성사된 프로젝트';
    return '전체 프로젝트';
  };

  const [statusFilter, setStatusFilter] = useState<ProductStatusFilter>(getStatusLabel(urlStatus));

  // ✅ 상태 필터 바뀔 때 URL 갱신
  const handleStatusChange = (next: ProductStatusFilter) => {
    setStatusFilter(next);

    const params = new URLSearchParams(searchParams.toString());

    if (next === '전체 프로젝트') {
      params.delete('status');
    } else {
      const statusMap = {
        '진행중인 프로젝트': 'funding',
        '공개 예정 프로젝트': 'upcoming',
        '성사된 프로젝트': 'success',
      };
      params.set('status', statusMap[next]);
    }

    router.push(`/products?${params.toString()}`);
  };

  const [sortOption, setSortOption] = useState<ProductSortOption>('추천순');

  useEffect(() => {
    setLoading(true);
    setError('');

    getProducts({ categorySlug: categorySlug ?? undefined, statusFilter, sortOption })
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
  }, [categorySlug, statusFilter, sortOption]); // ✅ sortOption 의존성 추가

  return (
    <main className="p-5 tablet:p-10 laptop:p-[90px]">
      <ProductListCategory
        selected={statusFilter}
        onSelect={handleStatusChange}
        sort={sortOption}
        onSortChange={setSortOption}
      />

      <div className="grid grid-cols-2 tablet:grid-cols-3 laptop:grid-cols-4 gap-2.5 mobile:pt-10 pt-6">
        {loading ? (
          Array.from({ length: 8 }).map((_, idx) => <ProductItemSkeleton key={idx} />)
        ) : error ? (
          <p className="col-span-full medium-14 text-center text-error">{error}</p>
        ) : (
          products.map(product => <ProductDBItem key={product._id} product={product} />)
        )}
      </div>
    </main>
  );
}

type Props = {
  selected: ProductStatusFilter;
  onSelect: (category: ProductStatusFilter) => void;
  sort: ProductSortOption;
  onSortChange: (sort: ProductSortOption) => void;
};

function ProductListCategory({ selected, onSelect, sort, onSortChange }: Props) {
  const categories: ProductStatusFilter[] = [
    '전체 프로젝트',
    '진행중인 프로젝트',
    '공개 예정 프로젝트',
    '성사된 프로젝트',
  ];

  const searchParams = useSearchParams();
  const customSlug = searchParams.get('custom');
  const title = customSlug ? (categoryNameMap[customSlug as IproductCategory] ?? '전체 프로젝트') : '전체 프로젝트';

  const innerStyle = 'w-[480px] h-[95px] normal-18 flex flex-col gap-[20px] tablet:w-auto laptop:gap-[40px]';
  const titleStyle = 'font-[700] tablet:text-[20px] laptop:text-[24px]';
  const projectListStyle = 'flex h-[30px] items-center text-[14px] cursor-pointer tablet:gap-[10px] laptop:text-[16px]';
  const nowProjectStyle = 'font-[700] p-[5] border-[0.8px] border-[#B8B8BD] rounded-[50px] tablet:p-[10px]';
  const projectStyle = 'p-[5px] border-[0.8px] border-[#B8B8BD] rounded-[50px] tablet:p-[10px]';

  return (
    <div className={innerStyle}>
      <span className={titleStyle}>{title}</span>
      <div className="flex tablet:flex-row justify-between flex-col gap-5">
        <ul className={projectListStyle}>
          {categories.map(category => (
            <li
              key={category}
              onClick={() => onSelect(category)}
              className={category === selected ? nowProjectStyle : projectStyle}
            >
              {category}
            </li>
          ))}
        </ul>
        <FilterToggleCategory
          filterList={['추천순', '인기순', '최신순', '마감임박순']}
          selected={sort}
          onSelect={onSortChange}
          className="w-[110px]"
        />
      </div>
    </div>
  );
}

// 추천순, 인기순 등 필터링 하기 위한 카테고리
interface FilterToggleCategoryProps {
  filterList: ProductSortOption[];
  selected: ProductSortOption;
  onSelect: (filter: ProductSortOption) => void;
  className?: string;
}

// className에 width 값만 주면 됨!!
function FilterToggleCategory({ filterList, selected, onSelect, className = '' }: FilterToggleCategoryProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`z-10 relative bg-white ${className}`}>
      <div>
        <button
          name="filter"
          type="button"
          onClick={() => setIsOpen(prev => !prev)}
          className=" w-full flex p-[10px] border-1 border-font-400 items-center justify-between cursor-pointer"
        >
          <p className="bold-14 text-font-400">{selected}</p>
          {isOpen ? (
            <ChevronUp className="w-[20px] h-[14px] text-font-400 bg-white" />
          ) : (
            <ChevronDown className="w-[20px] h-[14px] text-font-400 bg-white" />
          )}
        </button>
      </div>

      {isOpen && (
        <div className="medium-14 w-full border border-font-400 absolute top-full left-0 ">
          {filterList.map(filter => (
            <button
              key={filter}
              onClick={() => {
                onSelect(filter); // ✅ 상위로 전달
                setIsOpen(false);
              }}
              className={`w-full text-right bg-bg px-[10px] py-[5px] cursor-pointer hover:bg-primary-50
                ${filter === selected ? 'text-error bold-14' : 'text-font-400'}`}
            >
              {filter}
            </button>
          ))}
        </div>
      )}
    </div>
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
