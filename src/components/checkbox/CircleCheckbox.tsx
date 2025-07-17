import CircleUncheck from '@assets/icons/circle-uncheck.svg';
import CircleCheck from '@assets/icons/circle-check.svg';

type CheckCircleProps = {
  prop: string;
};

{/* 체크 됨 */}
{/* 클릭이벤트 추가해야함 */}
export function CheckCircle({ prop }: CheckCircleProps){
  return (
     <div className='flex flex-row gap-2 items-center justify-center'>
       <button>
         <CircleCheck className='w-[18px]'/>
       </button>
       <p className='normal-10 tablet:text-[14px] laptop:text-[16px]'>{ prop }</p>
     </div>
  );
}

{/*체크 안 됨 */}
{/* 클릭이벤트 추가해야함 */}
export function UnCheckCircle({ prop }: CheckCircleProps){
  return (
      <div className='flex flex-row gap-2 items-center justify-center'>
        <button>
        <CircleUncheck className='w-[18px]'/>
        </button>
        <p className='normal-10 tablet:text-[14px] laptop:text-[16px]'>{ prop }</p>
      </div>
  );
}