import '@app/globals.css';
import Checkbox from '@assets/icons/checkbox.svg';
import UnCheckbox from '@assets/icons/uncheckbox.svg';

type CheckSquareProps = {
  prop: string;
};

{/* 체크 됨 */}
export function CheckSquare({ prop }: CheckSquareProps) {
  return(
    <div className='flex gap-1.5'>
      <button>
        <UnCheckbox className='w-[12px]'/>
      </button>
      <p className='medium-10 tablet:text-[15px]'>{ prop }</p>
    </div>
  );
}

{/* 체크 안 됨 */}
export function UncheckSquare({ prop }: CheckSquareProps){
  return(
    <div className='flex gap-1.5'>
      <button>
        <Checkbox className='w-[12px]' />
      </button>
      <p className='medium-10 tablet:text-[15px]'>{ prop }</p>
    </div>
  );
}