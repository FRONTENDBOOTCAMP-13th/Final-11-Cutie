/* 본인 인증, 입금 계좌,세금 계산서 발행 form */

import { StarTitle } from '@components/common/etc';
import RegisterForm from '@components/product/ProductCreatorInfo';

interface isAuthDoneProps {
  title: string;
  subDesc: string;
  type: 'auth' | 'account' | 'tax';
}

export function IsAuthDone({ title, subDesc, type }: isAuthDoneProps) {
  return (
    <div className="flex flex-col gap-[11px]">
      <StarTitle title={title} subTitle={subDesc} className="flex-col items-start gap-[4px]" />
      {/* 큰화면 */}
      <RegisterForm type={type} />
    </div>
  );
}
