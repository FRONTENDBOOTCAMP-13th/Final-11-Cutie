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


// 항목 아이템 재사용 위한 props의 타입 지정
type QuestionListItemProps = {
  category: string;
  title: string;
  content: string;
};

type QuestionListProps = {
  category: string;
};

// 질문 리스트 항목 아이템
export function QuestionListItem({ title, content }: QuestionListItemProps) {
  return (
    <>
      <div className="flex h-[31px] bg-bg normal-14 items-center gap-1 hover:bg-primary-50 mobile:text-[16px] mobile:h-[41px]">
        <CircleQuestionMark className="w-[15px] h-[15px] stroke-primary-800 tablet:w-[19px] tablet:h-[19px] flex-shrink-0" />
        <p className="truncate tablet:truncate-none">
          [{title}]<span className="ml-1.5">{content}</span>
        </p>
      </div>
    </>
  );
}

// 문의하기 자주묻는 질문 리스트
// 가져다 쓸때 props category 전달하여 사용해야함 !
export function QuestionList({ category }: QuestionListProps) {
  // 나중에 db에서 가져다 쓸것. 지금은 임시로 강제로 넣어둠
  const questionData = [
    {
      category: '후원자 질문',
      title: '결제',
      content: '할부 결제가 가능한가요?',
    },
    {
      category: '후원자 질문',
      title: '후원',
      content: '후원은 어떻게 하나요?',
    },
    {
      category: '후원자 질문',
      title: '결제',
      content: '결제수단 변경/삭제는 어떻게 하나요?',
    },
    {
      category: '후원자 질문',
      title: '결제',
      content: '결제에 실패했습니다. 다시 결제는 어떻게 하나요?',
    },
    {
      category: '후원자 질문',
      title: '후원',
      content: '후원을 변경하거나 취소할 수 있나요?',
    },
    {
      category: '후원자 질문',
      title: '결제',
      content: '결제 수단별 환불 일정을 알고 싶어요.',
    },
  ];

  return (
    <div className="flex flex-col gap-3 w-[252px] h-[236px] mobile:w-[334px] mobile:h-[335px] tablet:w-[342px] tablet:h-[370px] laptop:w-[346px] laptop:h-[392px] bg-bg">
      <p className="bold-18 mobile:text-[24px]">{category}</p>
      <div>
        {questionData.map((item, index) => (
          <QuestionListItem key={index} category={item.category} title={item.title} content={item.content} />
        ))}
      </div>
    </div>
  );
}
