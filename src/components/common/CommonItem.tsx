import { CircleQuestionMark } from 'lucide-react';

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
      <div className="flex h-[21px] bg-bg normal-10 items-center gap-1 hover:bg-primary-50 tablet:h-[41px] tablet:text-[14px]">
        <CircleQuestionMark className="w-[15px] h-[15px] stroke-primary-800 tablet:w-[19px] tablet:h-[19px] flex-shrink-0" />
        <p className="truncate tablet:truncate-none">
          [{title}]<span className="ml-1.5">{content}</span>
        </p>
      </div>
    </>
  );
}

// 문의하기 자주묻는 질문 리스트
// 리스트
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
    <div className="flex flex-col gap-3 w-[211px] h-[236px] mobile:w-[334px] mobile:h-[335px] tablet:w-[342px] tablet:h-[370px] laptop:w-[346px] laptop:h-[392px] bg-bg">
      <p className="bold-18">{category}</p>
      <div>
        {questionData.map((item, index) => (
          <QuestionListItem key={index} category={item.category} title={item.title} content={item.content} />
        ))}
      </div>
    </div>
  );
}
