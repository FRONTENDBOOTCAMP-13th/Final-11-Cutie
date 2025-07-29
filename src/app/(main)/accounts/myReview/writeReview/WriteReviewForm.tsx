'use celient'

import { ChangeButtonFill } from "@components/button/SquareBtn";
import { CreateProjectTitle } from "@components/common/etc";
import { StarIcon } from "lucide-react";

export default function WriteReviewForm (){
  return(
    <div className="flex flex-col gap-8 normal-14 tablet:normal-18">

      {/* 별점 */}
      <div>
        <CreateProjectTitle title="이 상품 어때요?" />
        <div className="flex pt-2">
          <StarIcon className="fill-amber-300 stroke-amber-300 tablet:w-10 tablet:h-10"/>
          <StarIcon className="fill-amber-300 stroke-amber-300 tablet:w-10 tablet:h-10"/>
          <StarIcon className="fill-amber-300 stroke-amber-300 tablet:w-10 tablet:h-10"/>
          <StarIcon className="fill-amber-300 stroke-amber-300 tablet:w-10 tablet:h-10"/>
          <StarIcon className="fill-amber-300 stroke-amber-300 tablet:w-10 tablet:h-10"/>
        </div>
      </div>

      {/* 텍스트 후기 작성 */}
      <div>
        <CreateProjectTitle title="후기를 작성해주세요."/>
        <form action="submit" className="pt-2">
          <textarea 
          name="review" 
          id="review" 
          required 
          placeholder="구매하신 아이템의 후기를 20자 이상 남겨주시면 다른 구매자들에게도 도움이 됩니다."
          maxLength={100}
          className="border-1 border-font-400 rounded-md w-full p-2"
          />
          <span className="text-gray-400 text-right block">
            0 / 100
          </span>
        </form>
      </div>

      {/* 이미지 첨부 */}
      <div>
        <CreateProjectTitle title="사진을 첨부해주세요." sub="최대 3장까지 첨부할 수 있어요. ( jpg, png, webp)" subClassName="pb-[10px]" />
      
        {/* 이미지 리스트 */}
        <div className="flex gap-3">
          {/* 이미지 추가 버튼 */}
          <label className="w-24 h-24 flex items-center justify-center border-2 border-dashed border-secondary-200 text-secondary-200 cursor-pointer rounded">
            +
            <input type="file" className="hidden" />
          </label>
          <label className="w-24 h-24 flex items-center justify-center border-2 border-dashed border-secondary-200 text-secondary-200 cursor-pointer rounded">
            +
            <input type="file" className="hidden" />
          </label>
          <label className="w-24 h-24 flex items-center justify-center border-2 border-dashed border-secondary-200 text-secondary-200 cursor-pointer rounded">
            +
            <input type="file" className="hidden" />
          </label>
        </div>
      </div>
      <ChangeButtonFill label="리뷰 등록" className="cursor-pointer"/>
    </div>
  );
}