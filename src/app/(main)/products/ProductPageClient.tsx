'use client';

import { ProductDBItem } from '@components/product/ProductItem';

import {
  categoryNameMap,
  Iproduct,
  IproductCategory,
  IproductStatus,
  ProductSortOption,
  ProductStatusFilter,
  reverseStatusMap,
} from '@models/product';
import { useEffect, useState } from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { useSearchParams, useRouter } from 'next/navigation';
import { getProducts } from '@data/functions/product';
import useUserStore from 'zustand/userStore';

// 상품 목록 조회
export default function ProductPageClient() {
  const [products, setProducts] = useState<Iproduct[]>([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);
  const accessToken = useUserStore(state => state.user?.token?.accessToken);
  const router = useRouter();
  const searchParams = useSearchParams();

  // 쿼리 파라미터 통해 custom과 status 값 가져오기 없다면 전체 리스트 반환
  const categorySlug = searchParams.get('custom') as IproductCategory | null;
  const urlStatus = searchParams.get('status') as IproductStatus | null;

  // DB에 저장된 상태를 한글 라벨로 변환하기 위한 변수, product.ts에서 지정해놓은거 불러옴
  const getStatusLabel = (status: IproductStatus | null): ProductStatusFilter =>
    status ? reverseStatusMap[status] : '전체 프로젝트';

  // 프로젝트 상태 관리
  const [statusFilter, setStatusFilter] = useState<ProductStatusFilter>(getStatusLabel(urlStatus));

  // 상태 필터 바뀔 때 URL 갱신
  const handleStatusChange = (next: ProductStatusFilter) => {
    // url에서 상태 부분 쿼리만 변경
    const params = new URLSearchParams(searchParams.toString());

    // 전체 프로젝트 클릭 시에는 쿼리 지우도록 (/products 로 나오도록)
    if (next === '전체 프로젝트') {
      params.delete('status');
    } else {
      const statusMap = {
        '진행중인 프로젝트': 'funding',
        '공개 예정 프로젝트': 'upcomming',
        '성사된 프로젝트': 'success',
      };
      params.set('status', statusMap[next]);
    }

    // 상태만 바뀔 때 명시적으로 url 변경하기 위함
    router.push(`/products?${params.toString()}`);
  };

  // 쿼리 파라미터 가져오기
  const sortParam = searchParams.get('sort') as ProductSortOption | null;

  // sortOption 초기값 설정
  const [sortOption, setSortOption] = useState<ProductSortOption>(sortParam ?? '추천순');

  const handleSortChange = (nextSort: ProductSortOption) => {
    setSortOption(nextSort); // 상태 변경

    const params = new URLSearchParams(searchParams.toString());

    // 정렬 옵션 쿼리에 반영
    params.set('sort', nextSort);

    router.push(`/products?${params.toString()}`);
  };

  // 키워드 쿼리 가져오기
  const keyword = searchParams.get('keyword') ?? undefined;

  // 헤더 카테고리로 접근 시 설정
  useEffect(() => {
    // 정렬 값과 상태 값 가져오기
    const nextSort = searchParams.get('sort') as ProductSortOption | null;
    const nextStatus = searchParams.get('status') as IproductStatus | null;

    // 값 매핑
    const label = getStatusLabel(nextStatus);

    // 토글 필터링
    if (nextSort && nextSort !== sortOption) {
      setSortOption(nextSort);
    } else if (!nextSort && sortOption !== '추천순') {
      setSortOption('추천순');
    }

    // status 동기화
    if (label !== statusFilter) {
      setStatusFilter(label);
    }
  }, [searchParams, sortOption, statusFilter]);

  // getProducts 함수 통해 상품 불러오기
  useEffect(() => {
    setLoading(true);
    setError('');

    getProducts({ categorySlug, statusFilter, sortOption, keyword, accessToken })
      // 응답 처리
      .then(res => {
        // 서버 응답 성공 시, 상품 불러오기
        if (res.ok && res.item) {
          setProducts(res.item);
        }

        // 응답 실패 시 메세지 및 로딩 false 처리
        else if (res.ok === 0) {
          setError(res.message || '상품 로딩 실패');
        }
      })
      // 예외 처리
      .catch(() => {
        setError('상품을 불러오는 중 오류가 발생했습니다.');
      })
      .finally(() => {
        setLoading(false);
      });
  }, [categorySlug, statusFilter, sortOption, keyword, accessToken]); // 의존성 배열, 배열에 있는 값 중 하나라도 바뀌면 상품을 다시 불러오도록 설정

  return (
    <main className="p-5 tablet:p-10 laptop:p-[90px]">
      <ProductListCategory
        selected={statusFilter}
        onSelect={handleStatusChange}
        sort={sortOption}
        onSortChange={handleSortChange}
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

// 전체, 진행중, 공개예정, 성사된 프로젝트 및 토글 필터링, 타이틀 컴포넌트
function ProductListCategory({ selected, onSelect, sort, onSortChange }: Props) {
  const categories: ProductStatusFilter[] = [
    '전체 프로젝트',
    '진행중인 프로젝트',
    '공개 예정 프로젝트',
    '성사된 프로젝트',
  ];

  // 카테고리 따라 타이틀 변경되도록 하기 위한 쿼리 찾기
  const searchParams = useSearchParams();
  const customSlug = searchParams.get('custom');

  // 타이틀 기본값 -> 전체 프로젝트
  const title = customSlug ? (categoryNameMap[customSlug as IproductCategory] ?? '전체 프로젝트') : '전체 프로젝트';

  const innerStyle = 'w-full h-auto normal-18 flex flex-col gap-[20px] tablet:w-auto laptop:gap-[40px]';
  const titleStyle = 'font-[700] tablet:text-[20px] laptop:text-[24px]';
  const projectListStyle =
    'grid gap-[10px] w-fit whitespace-nowrap text-center text-[14px] cursor-pointer ' +
    'max-[408px]:!grid-cols-2 small:grid-cols-3 mobile:grid-cols-4 ' +
    'tablet:gap-[10px] laptop:text-[16px]';
  const nowProjectStyle = 'font-[700] p-[5px] border-[0.8px] border-[#B8B8BD] rounded-[50px] tablet:p-[10px]';
  const projectStyle = 'p-[5px] border-[0.8px] border-[#B8B8BD] rounded-[50px] tablet:p-[10px]';

  return (
    <div className={innerStyle}>
      {/* 선택된 카테고리에 따른 타이틀 */}
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
          onSelect={onSortChange} // 필터값 전달받음
          className="w-[110px]"
        />
      </div>
    </div>
  );
}

// 추천순, 인기순 등 필터링 컴포넌트
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
    <div className={`z-1 relative bg-white ${className}`}>
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
                onSelect(filter); // 선택한 필터 값 전달
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
export function ProductItemSkeleton() {
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
