import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

export default function ProductItemSkeleton() {
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
