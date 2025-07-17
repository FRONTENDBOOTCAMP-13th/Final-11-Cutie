import { UnCheckSquareBtn } from "@components/button/SquareBtn";
import { AlertCircle} from "lucide-react";

{/* 등록 하기 폼 */}
export default function RegisterForm(){
  return(
    <div className="w-[400px] h-[66px] border border-font-400 rounded-sm flex p-[15px]">
      <div className="flex justify-between items-center w-full ">
        <div className="flex flex-row gap-2 semibold-14 items-center">
          <AlertCircle className='stroke-primary-800'/>
           <p>등록을 완료해주세요</p>
        </div>
        <UnCheckSquareBtn prop="등록하기"/>
      </div>
    </div>
  );
}