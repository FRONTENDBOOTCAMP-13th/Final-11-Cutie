import { CircleQuestionMark } from 'lucide-react';

// 항목 아이템 재사용 위한 props의 타입 지정
type QuestionListItemProps = {
  title: string;
  content: string;
};

// 질문 리스트 항목 아이템 (반응형o)
export function QuestionListItem({ title, content }: QuestionListItemProps) {
  return (
    <>
      <div className="flex h-[41px] bg-bg normal-14 items-center gap-1 hover:bg-primary-50 mobile:text-[10px] mobile:h-[21px] tablet:h-[41px] tablet:text-[14px]">
        <CircleQuestionMark className="stroke-primary-800 tablet:w-[19px] tablet:h-[19px] mobile:w-[15px] mobile:h-[15px] flex-shrink-0" />
        <p className="mobile:truncate">
          [{title}]<span className="ml-1.5">{content}</span>
        </p>
      </div>
    </>
  );
}

// 문의하기 자주묻는 질문 리스트 (반응형 o)
export function QuestionList() {
  return (
    <>
      <div className="flex flex-col gap-3 desktop:w-[346px] desktop:h-[392px] laptop:w-[342px] laptop:h-[370px] tablet:w-[334px] tablet:h-[335px] mobile:w-[235px] mobile:h-[203px] bg-bg ">
        <p className="bold-18 mobile:text-[17px] tablet:text-[18px]">후원자 질문</p>
        <div>
          <QuestionListItem title="결제" content="할부 결제가 가능한가요?" />
          <QuestionListItem title="후원" content="후원은 어떻게 하나요?" />
          <QuestionListItem title="결제" content="결제수단 변경/삭제는 어떻게 하나요?" />
          <QuestionListItem title="결제" content="결제에 실패했습니다. 다시 결제는 어떻게 하나요?" />
          <QuestionListItem title="후원" content="후원을 변경하거나 취소할 수 있나요?" />
          <QuestionListItem title="결제" content="결제 수단별 환불 일정을 알고 싶어요." />
        </div>
      </div>
    </>
  );
}

// 문의하기 자주묻는 질문 리스트 1280px
export function QuestionListLapTop() {}
