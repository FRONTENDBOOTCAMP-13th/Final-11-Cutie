import '@app/globals.css';
import Image from 'next/image';
import productKeroro from 'assets/images/productKeroro.jpg';
import like from 'assets/icons/heart-empty.svg';
import likeFilled from 'assets/icons/heart-fill.svg';

// 샛별 담당

export function ProductItem(){
  return (
    <div className='bg-blue-300 normal-14'>
      <div className='relative'>
      <Image className='h-[194px] rounded-2xl desktop:w-[285px] laptop:w-[260px] tablet:w-[222px] mobile:w-[215px]' src={ productKeroro } alt='/'/>
        <div className='absolute group left-[240px] top-[150px]'>
          <Image className='group-hover:hidden' src={ like } alt={'/'}/>
          <Image className='hidden group-hover:block' src={ likeFilled } alt={'/'}/>
        </div>
      </div>
      <div className='flex gap-2.5 pt-2.5 bold-24'>
        <p className='text-primary-800'>5,394% 달성</p>
        <span className='text-font-400'>D-7</span>
      </div>
      <p className='text-font-900 pt-2.5 '>개구리 중사 케로케로케로케로 티셔츠</p>
      <p className='text-font-900'>500,000원</p>
      <p className='text-font-400 pt-2.5 '>(주) 1더하기1은귀요미</p>
    </div>
  );
}