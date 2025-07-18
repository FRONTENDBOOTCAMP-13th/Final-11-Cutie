import { CircleQuestionMark } from "lucide-react";

{/* 자주 묻는 질문 화이트 */}
export function FaqWhite(){
  return(
    <div>
      <button className="bg-white w-[214px] h-[15px] mobile:w-[342px] mobile:h-[41px] laptop:w-[346px] flex items-center gap-1 normal-14 mobile:text-[14px] laptop:text-[16px] text-font-900 hover:bg-primary-50">
        <CircleQuestionMark className="stroke-primary-800 w-[15px] mobile:w-[19px]"/>
        <span>[결제]</span>
        <span>할부 결제가 가능한가요?</span>
      </button>
    </div>
  );
}

{/* 자주 묻는 질문 파란색 */}
export function FaqBlue(){
  return(
    <div>
      <button className="bg-primary-50 w-[214px] h-[15px] mobile:w-[342px] mobile:h-[41px] laptop:w-[346px] flex items-center gap-1 normal-14 mobile:text-[14px] laptop:text-[16px] text-font-900">
        <CircleQuestionMark className="stroke-primary-800 w-[15px] mobile:w-[19px]"/>
        <span>[결제]</span>
        <span>할부 결제가 가능한가요?</span>
      </button>
    </div>
  );
}

{/* 문의 버튼 화이트 */}
export function QnaItemWhite(){
  return(
    <div>
    <button className="normal-14 rounded-sm bg-white text-left w-[492px] h-[37px] hover:bg-primary-50">
      일반문의
    </button>
    </div>
  );
}

{/* 문의 버튼 파란색 */}
export function QnaItemBlue(){
  return(
    <div>
    <button className="normal-14 rounded-sm bg-primary-50 text-left w-[492px] h-[37px] ">
      일반문의
    </button>
    </div>
  );
}