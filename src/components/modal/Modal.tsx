import { CheckCircle, UnCheckCircle } from '@components/checkbox/CircleCheckbox';

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
