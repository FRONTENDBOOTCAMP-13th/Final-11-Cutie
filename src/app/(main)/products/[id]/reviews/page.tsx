/* 태경 담당 */
import { ReviewImageList } from '@components/review/ReviewSummary';
import { Star } from 'lucide-react';

const innerPadding = 'p-[20px] ';

const selleRatingSort = 'flex flex-col items-center ';

const allScoreSort = 'flex gap-[10px] items-center ';
const nowScoreText = 'font-[700] normal-18 ' + 'mobile:text-[24px] ';
const maxScoreText = 'font-[400] normal-10 ' + 'mobile:text-[14px] ';

const sizeStar = 'w-[18px] h-[18px] ' + 'mobile:w-[24px] mobile:h-[24px] ';

const filterOptionSort = 'flex justify-end pt-[40px] ';
const filterOptionText = 'normal-10 font-[400] ' + 'mobile:text-[12px]';

const sortCommentList = 'grid gap-[40px] justify-center ';

const titleText = 'normal-10 ' + 'mobile:text-[12px]';

/* 각 상품에 댓글 */
export default function ProductIDCommentPage() {
  return (
    <div className={innerPadding}>
      <div>
        {/* 해당 판매자에 대한 구매 만족도 */}
        <div className={selleRatingSort}>
          <span className={titleText}>해당 판매자에 대한 구매 만족도</span>
          <div className={allScoreSort}>
            <Star size={18} className={sizeStar} fill="#e3fb2d" stroke="#e3fb2d" />
            <div>
              <span className={nowScoreText}>5.0</span>
              <span className={maxScoreText}>/5.0</span>
            </div>
          </div>
        </div>

        {/* 사진후기 | 높은평점순 | 낮은평점순 | 최신순 */}
        <div className={filterOptionSort + filterOptionText}>
          <ul className="flex gap-[5px] whitespace-nowraps">
            <li>사진 후기</li>
            <li>|</li>
            <li>높은평점순</li>
            <li>|</li>
            <li>낮은평점순</li>
            <li>|</li>
            <li>최신순</li>
          </ul>
        </div>

        {/* 댓글 */}
        <div className={sortCommentList + 'mobile:pt-10 pt-6'}>
          <ReviewImageList />
          <ReviewImageList />
          <ReviewImageList />
          <ReviewImageList />
        </div>
      </div>
    </div>
  );
}
