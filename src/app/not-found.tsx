import keroroShock from '@assets/images/keroroShock.png';
import Image from 'next/image';

export default function ErrorPage() {
  return (
      <>
        <div className="bg-primary-50 w-full ">
          
          {/* 내부 요소들 묶은 box */}
          <div className='flex flex-col items-center min-h-[700px] justify-between'>

            {/* 상단 이미지 */}
            <div className='flex flex-row justify-center items-center'>
              <Image
                src={keroroShock}
                alt="404"
                priority
                className="scale-y-[-1] w-[200px] h-auto"
              />
               <Image
                src={keroroShock}
                alt="404 캐릭터"
                priority
                className="scale-y-[-1] w-[200px] h-auto"
              />
              
              <Image
                src={keroroShock}
                alt="404 캐릭터"
                priority
                className="hidden mobile:block scale-x-[-1] scale-y-[-1] w-[200px] h-auto"
              />
              <Image
                src={keroroShock}
                alt="404 캐릭터"
                priority
                className="hidden mobile:block scale-x-[-1] scale-y-[-1] w-[200px] h-auto"
              />
            </div>

            {/* 텍스트 */}
            <div className='flex flex-col justify-center items-center'>
              <p className="text-[100px] font-bold text-primary-800 leading-none [text-shadow:2px_4px_2px_rgba(0,0,0,0.5)]" style={{ WebkitTextStroke: '1px white' }}>
                404 
              </p>
              <p className="bold-24 text-font-400 pb-3">
                Page not found
              </p>
            </div>

            {/* 하단 이미지 */}
            <div className='flex flex-row justify-center items-center'>
              <Image
                src={keroroShock}
                alt="404"
                priority
                className="w-[200px] h-auto"
              />
               <Image
                src={keroroShock}
                alt="404 캐릭터"
                priority
                className="w-[200px] h-auto"
              />
              
              <Image
                src={keroroShock}
                alt="404 캐릭터"
                priority
                className="hidden mobile:block scale-x-[-1] w-[200px] h-auto"
              />
              <Image
                src={keroroShock}
                alt="404 캐릭터"
                priority
                className="hidden mobile:block scale-x-[-1] w-[200px] h-auto"
              />
            </div>

          </div>
        
        </div>
     </>
  );
}
