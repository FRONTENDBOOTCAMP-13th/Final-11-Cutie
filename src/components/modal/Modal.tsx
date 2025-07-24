import { CheckCircle, UnCheckCircle } from '@components/checkbox/CircleCheckbox';
import { useEffect } from 'react';

// 창작자 계좌 등록 모달 (개인)
export function RegisterPersonalBankModal() {
  return (
    <div className="w-[315px] h-[469px] laptop:w-[400px] laptop:h-[587px] border rounded-2xl p-5">
      <div className="flex flex-col gap-3 laptop:gap-[27px]">
        <p className="semibold-14">계좌 종류</p>

        {/* 개인, 법인 체크 */}
        <div className="flex flex-row gap-[50px]">
          <CheckCircle prop="개인" />
          <UnCheckCircle prop="법인" />
        </div>

        {/* 카드 번호 */}
        <div className="">
          <p className="semibold-14 pb-2">예금주 생년월일</p>
          <input type="tel" placeholder="250808" className="border rounded-xs normal-14 w-full h-[34px] p-2.5" />
        </div>

        {/* 거래 은행 */}
        <div className="flex flex-col gap-2">
          <p className="semibold-14">거래 은행</p>
          <select
            name="bank"
            id="bank"
            className="border w-full rounded-xs h-[34px] normal-14 text-font-400 border-font-900 pl-2"
          >
            <option value="">은행을 선택해주세요</option>
            <option value="kb">KB국민은행</option>
            <option value="shinhan">신한은행</option>
            <option value="woori">우리은행</option>
            <option value="hana">하나은행</option>
            <option value="ibk">IBK기업은행</option>
            <option value="nh">NH농협은행</option>
            <option value="kakaobank">카카오뱅크</option>
          </select>
          <p className="normal-14 text-font-400">케이뱅크와 카카오뱅크는 등록이 불가능합니다.</p>
        </div>

        {/* 예금주명 */}
        <div className="">
          <p className="semibold-14 pb-2">예금주명</p>
          <input
            type="text"
            placeholder="케로로"
            className="bg-primary-50 rounded-xs normal-14 w-full h-[34px] p-2.5"
          />
        </div>

        {/* 계좌번호 */}
        <div className="">
          <p className="semibold-14 pb-2">계좌번호</p>
          <input
            type="tel"
            placeholder="숫자로만 입력해주세요"
            className="border rounded-xs normal-14 w-full h-[34px] p-2.5"
          />
        </div>

        {/* 취소, 등록 버튼 */}
        <div className="flex gap-2.5 pt-2.5 laptop:pt-11">
          <button className="w-full h-[33px] p-2 bg-white border medium-14 rounded-xs flex items-center justify-center">
            취소
          </button>
          <button className="w-full h-[33px] p-2 bg-primary-800 text-white medium-14 rounded-xs flex items-center justify-center">
            등록완료
          </button>
        </div>
      </div>
    </div>
  );
}

// 창작자 계좌 등록 모달 (사업자)
export function RegisterCorpBankModal() {
  return (
    <div className="w-[315px] h-[469px] laptop:w-[400px] laptop:h-[587px] border rounded-2xl p-5">
      <div className="flex flex-col gap-3 laptop:gap-[27px]">
        <p className="semibold-14">계좌 종류</p>

        {/* 개인, 법인 체크 */}
        <div className="flex flex-row gap-[50px]">
          <UnCheckCircle prop="개인" />
          <CheckCircle prop="법인" />
        </div>

        {/* 사업자 번호 */}
        <div className="">
          <p className="semibold-14 pb-2">사업자 번호</p>
          <input type="tel" placeholder="예)2423424" className="border rounded-xs normal-14 w-full h-[34px] p-2.5" />
        </div>

        {/* 거래 은행 */}
        <div className="flex flex-col gap-2">
          <p className="semibold-14">거래 은행</p>
          <select
            name="bank"
            id="bank"
            className="border w-full rounded-xs h-[34px] normal-14 text-font-400 border-font-900 pl-2"
          >
            <option value="">은행을 선택해주세요</option>
            <option value="kb">KB국민은행</option>
            <option value="shinhan">신한은행</option>
            <option value="woori">우리은행</option>
            <option value="hana">하나은행</option>
            <option value="ibk">IBK기업은행</option>
            <option value="nh">NH농협은행</option>
            <option value="kakaobank">카카오뱅크</option>
          </select>
          <p className="normal-14 text-font-400">케이뱅크와 카카오뱅크는 등록이 불가능합니다.</p>
        </div>

        {/* 예금주명 */}
        <div className="">
          <p className="semibold-14 pb-2">예금주명</p>
          <input
            type="text"
            placeholder="케로로"
            className="bg-primary-50 rounded-xs normal-14 w-full h-[34px] p-2.5"
          />
        </div>

        {/* 계좌번호 */}
        <div className="">
          <p className="semibold-14 pb-2">계좌번호</p>
          <input
            type="tel"
            placeholder="숫자로만 입력해주세요"
            className="border rounded-xs normal-14 w-full h-[34px] p-2.5"
          />
        </div>

        {/* 취소, 등록 버튼 */}
        <div className="flex gap-2.5 pt-2.5 laptop:pt-11">
          <button className="w-full h-[33px] p-2 bg-white border medium-14 rounded-xs flex items-center justify-center">
            취소
          </button>
          <button className="w-full h-[33px] p-2 bg-primary-800 text-white medium-14 rounded-xs flex items-center justify-center">
            등록완료
          </button>
        </div>
      </div>
    </div>
  );
}

// 창작자 세금 계산서 발행 모달 (개인)
export function RegisterPersonalTaxModal() {
  return (
    <div className="w-[315px] h-[469px] laptop:w-[400px] laptop:h-[587px] border rounded-2xl p-5">
      <div className="flex flex-col gap-4 laptop:gap-[30px]">
        <p className="semibold-14">발행 종류</p>

        {/* 개인, 법인 체크 */}
        <div className="flex flex-row gap-[50px]">
          <CheckCircle prop="개인" />
          <UnCheckCircle prop="법인" />
        </div>

        {/* 카드 번호 */}
        <div className="">
          <p className="semibold-14 pb-2">이메일</p>
          <input
            type="tel"
            placeholder="이메일을 입력해주세요"
            className="border rounded-xs normal-14 w-full h-[34px] p-2.5"
          />
        </div>

        {/* 성명 */}
        <div className="">
          <p className="semibold-14 pb-2">성명(개인)</p>
          <input
            type="text"
            placeholder="케로로"
            className="bg-primary-50 rounded-xs normal-14 w-full h-[34px] p-2.5"
          />
        </div>

        {/* 주민등록번호 */}
        <div className="">
          <p className="semibold-14 pb-2">주민등록번호</p>
          <input
            type="text"
            placeholder="250808-250808"
            className="bg-primary-50 rounded-xs normal-14 w-full h-[34px] p-2.5"
          />
        </div>

        {/* 주소 */}
        <div className="">
          <p className="semibold-14 pb-2">주소</p>
          <input
            type="tel"
            placeholder="주소를 입력해주세요"
            className="border rounded-xs normal-14 w-full h-[34px] p-2.5"
          />
        </div>

        {/* 취소, 등록 버튼 */}
        <div className="flex gap-2.5 pt-2.5 laptop:pt-11">
          <button className="w-full h-[33px] p-2 bg-white border medium-14 rounded-xs flex items-center justify-center">
            취소
          </button>
          <button className="w-full h-[33px] p-2 bg-primary-800 text-white medium-14 rounded-xs flex items-center justify-center">
            등록완료
          </button>
        </div>
      </div>
    </div>
  );
}

// 창작자 세금 계산서 발행 모달 (사업자)
export function RegisterCorpTaxModal() {
  return (
    <div className="w-[315px] h-[469px] laptop:w-[400px] laptop:h-[587px] border rounded-2xl p-5">
      <div className="flex flex-col gap-4 laptop:gap-[30px]">
        <p className="semibold-14">발행 종류</p>

        {/* 개인, 법인 체크 */}
        <div className="flex flex-row gap-[50px]">
          <UnCheckCircle prop="개인" />
          <CheckCircle prop="법인" />
        </div>

        {/* 카드 번호 */}
        <div className="">
          <p className="semibold-14 pb-2">이메일</p>
          <input
            type="tel"
            placeholder="이메일을 입력해주세요"
            className="border rounded-xs normal-14 w-full h-[34px] p-2.5"
          />
        </div>

        {/* 상호명 */}
        <div className="">
          <p className="semibold-14 pb-2">상호명(사업자)</p>
          <input
            type="text"
            placeholder="케로로"
            className="bg-primary-50 rounded-xs normal-14 w-full h-[34px] p-2.5"
          />
        </div>

        {/* 주민등록번호 */}
        <div className="">
          <p className="semibold-14 pb-2">사업자번호</p>
          <input
            type="text"
            placeholder="25080808"
            className="bg-primary-50 rounded-xs normal-14 w-full h-[34px] p-2.5"
          />
        </div>

        {/* 주소 */}
        <div className="">
          <p className="semibold-14 pb-2">주소</p>
          <input
            type="tel"
            placeholder="주소를 입력해주세요"
            className="border rounded-xs normal-14 w-full h-[34px] p-2.5"
          />
        </div>

        {/* 취소, 등록 버튼 */}
        <div className="flex gap-2.5 pt-2.5 laptop:pt-11">
          <button className="w-full h-[33px] p-2 bg-white border medium-14 rounded-xs flex items-center justify-center">
            취소
          </button>
          <button className="w-full h-[33px] p-2 bg-primary-800 text-white medium-14 rounded-xs flex items-center justify-center">
            등록완료
          </button>
        </div>
      </div>
    </div>
  );
}

interface TermsModalProps {
  onClose: () => void;
}

export function TermsModal({ onClose }: TermsModalProps) {
  // ESC 키로 닫기
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="bg-white w-[90%] max-w-[40vw] max-h-[70vh] rounded-[12px] p-[24px] overflow-y-scroll shadow-lg">
        <div className="semibold-16 text-primary-800 mb-2">제1조 (목적)</div>
        <p className="normal-14 text-font-400 leading-relaxed mb-4">
          이 약관은 1더하기1은귀요미 주식회사(이하 &quot;회사&quot;)가 제공하는 펀딩 플랫폼 서비스 펀드림(이하
          &quot;서비스&quot;)의 이용조건 및 절차, 이용자와 회사 간의 권리·의무 및 책임사항을 규정함을 목적으로 합니다.
        </p>

        <div className="semibold-16 text-primary-800 mb-2">제2조 (정의)</div>
        <ul className="list-decimal ml-5 text-font-400 normal-14 leading-relaxed mb-4">
          <li>&quot;플랫폼&quot;이란 회사가 온라인상에서 제공하는 펀딩 관련 서비스를 의미합니다.</li>
          <li>&quot;이용자&quot;란 본 약관에 따라 플랫폼에 가입하여 서비스를 이용하는 자를 말합니다.</li>
          <li>&quot;프로젝트&quot;란 이용자가 플랫폼을 통해 게시한 후원 유치를 위한 기획안을 말합니다.</li>
          <li>&quot;서포터&quot;란 프로젝트에 참여하여 후원한 이용자를 말합니다.</li>
          <li>&quot;창작자&quot;란 프로젝트를 개설하여 자금을 모집하는 이용자를 말합니다.</li>
        </ul>

        <div className="semibold-16 text-primary-800 mb-2">제3조 (약관의 효력 및 변경)</div>
        <ul className="list-disc ml-5 text-font-400 normal-14 leading-relaxed mb-4">
          <li>본 약관은 회사가 플랫폼에 게시하거나 기타 방법으로 공지함으로써 효력이 발생합니다.</li>
          <li>회사는 관계법령을 위배하지 않는 범위 내에서 본 약관을 변경할 수 있습니다.</li>
          <li>
            변경된 약관은 제1항과 같은 방법으로 공지하며, 이용자가 동의하지 않을 경우 서비스 이용을 중단할 수 있습니다.
          </li>
        </ul>

        <div className="semibold-16 text-primary-800 mb-2">제4조 (서비스의 제공 및 변경)</div>
        <ul className="list-disc ml-5 text-font-400 normal-14 leading-relaxed mb-4">
          <li>
            회사는 다음과 같은 서비스를 제공합니다.
            <ul className="list-disc ml-5">
              <li>프로젝트 등록 및 관리 시스템</li>
              <li>후원 결제 및 정산 시스템</li>
              <li>커뮤니티 및 소통 기능</li>
              <li>기타 회사가 정하는 서비스</li>
            </ul>
          </li>
        </ul>

        <div className="flex justify-center mt-6">
          <button onClick={onClose} className="px-6 py-2 bg-primary-800 text-white rounded-[4px] hover:bg-primary-900">
            닫기
          </button>
        </div>
      </div>
    </div>
  );
}
