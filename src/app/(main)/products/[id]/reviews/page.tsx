/* 태경 담당 */
import { Star } from 'lucide-react';

/* 상자 전체 패딩 */
const innerPadding = 'p-[20px] ';

/* 해당 판매자에 대한 구매 만족도 정렬 방식*/
const selleRatingSort = 'flex flex-col items-center ';

const allScoreSort = 'flex gap-[10px] items-center ';
const nowScoreText = 'normal-18 ';
const maxScoreText = 'normal-10 ';

export default function ProductIDPage() {
  return (
    <div className={innerPadding}>
      <div>
        {/* 해당 판매자에 대한 구매 만족도 */}
        <div className={selleRatingSort}>
          <span className="normal-10">해당 판매자에 대한 구매 만족도</span>
          <div className={allScoreSort}>
            <Star size={18} fill="#e3fb2d" stroke="#e3fb2d" />
            <div>
              <span className={'font-[700] ' + nowScoreText}>5.0</span>
              <span className={'font-[400] ' + maxScoreText}>/5.0</span>
            </div>
          </div>
        </div>

        {/* 사진후기 | 높은평점순 | 낮은평점순 | 최신순 */}
        <div>
          <ul className="flex">
            <li>사진 후기</li>
            <li>높은평점순</li>
            <li>낮은평점순</li>
            <li>최신순</li>
          </ul>
        </div>

        {/* 댓글 */}
        <div>
          <Comment />
        </div>
      </div>
    </div>
  );
}

function Comment() {
  return (
    <div>
      <div>
        {/* 프로필 사진 */}
        <span>프로필 이미지</span>

        {/* 닉네임, 별점, 사진기 이미지 */}
        <div>
          <span>닉네임</span>
          <div>
            <span>별 이미지</span>
            <span>5.0</span>
            <span>사진기 이미지</span>
          </div>
        </div>

        {/* 첨부 이미지들 */}
        <div>첨부 이미지들</div>

        {/* 댓글 */}
        <span>대만족 합니다.</span>
      </div>
    </div>
  );
}
