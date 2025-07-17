import { CheckSquareBtn, UnCheckSquareBtn } from "@components/button/SquareBtn";
import { AlertCircle, User} from "lucide-react";

{/* 등록 하기 폼 */}
export default function RegisterForm(){
  return(
    <div className="w-[400px] h-[66px] border border-font-400 rounded-sm flex p-[15px]">
      <div className="flex justify-between items-center w-full ">
        <div className="flex flex-row gap-2 semibold-14 items-center">
          <AlertCircle className='stroke-primary-800'/>
           <p>등록을 완료해주세요</p>
        </div>
        <UnCheckSquareBtn label="등록하기"/>
      </div>
    </div>
  );
}


{/* 창작자 본인 인증 전 */}
export function AuthBefore(){
  return(
    <div className="w-[352px] h-[66px] border border-font-400 rounded-sm flex p-[15px]">
      <div className="flex justify-between items-center w-full ">
        <div className="flex flex-row gap-2 semibold-14 items-center">
          <AlertCircle className='stroke-primary-800'/>
           <p>인증을 완료해주세요</p>
        </div>
        <UnCheckSquareBtn label="인증하기"/>
      </div>
    </div>
  );
}

{/* 창작자 본인 인증 후 */}
export function AuthDone(){
  return(
    <div className="w-[352px] h-[66px] border border-font-400 rounded-sm flex p-[15px]">
      <div className="flex justify-between items-center w-full ">
        <div className="flex flex-col gap-2 normal-14 ">
          <div className="flex gap-2 items-center">
            <User className="stroke-primary-800 fill-primary-800"/>
            <p className="font-bold">케로로</p>
          </div>
          <div className="flex gap-2 text-font-400">
            <p>250808</p>
            /
            <p>01077773333</p>
          </div>
        </div>
        <CheckSquareBtn label="인증완료"/>
      </div>
    </div>
  );
}