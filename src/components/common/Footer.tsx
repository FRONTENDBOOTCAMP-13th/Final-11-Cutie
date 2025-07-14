// 태경 담당
import '@app/globals.css';

export function Footer() {
  return (
    <footer className="bg-color-bg  w-full border-t-1 border-secondary-200">
      {/* 회사 정보, 고객 지원 */}
      <div className="mx-auto flex flex-col gap-2.5 max-w-[1200px] p-[20px] justify-between mobile:flex-row">
        {/* 회사 정보 */}
        <address className=" flex flex-wrap gap-x-3.5 gap-y-2 not-italic medium-13 mobile:max-w-[350px] laptop:max-w-[1280px]">
          <div className="flex gap-2 items-center">
            <p className="text-font-900">회사명(주)</p>
            <p className="text-font-400">1더하기1은귀요미</p>
          </div>

          <div className="flex gap-2 items-center">
            <p className="text-font-900">주소</p>
            <p className="text-font-400">서울 종로구 종로3길17, 광화문D타워 D1동 16층, 17층</p>
          </div>

          <div className="flex gap-2 items-center">
            <p className="text-font-900">대표</p>
            <p className="text-font-400">오서현</p>
          </div>

          <div className="flex gap-2 items-center">
            <p className="text-font-900">사업자등록번호</p>
            <p className="text-font-400">808-11-45678</p>
          </div>

          <div className="flex gap-2 items-center">
            <p className="text-font-900">통신판매업 신고번호</p>
            <p className="text-font-400">2025-서울종로-1311호</p>
          </div>

          <div className="flex gap-2 items-center">
            <p className="text-font-900">대표번호</p>
            <p className="text-font-400">02-1234-5678</p>
          </div>

          <div className="flex gap-2 items-center">
            <p className="text-font-900">메일주소</p>
            <p className="text-font-400 w1440:flex-1">support_fundream@cutie.kr</p>
          </div>

          <div className="flex gap-2 items-center">
            <p className="text-font-900">ⓒ</p>
            <p className="text-font-400">2025 FEcutie Inc.</p>
          </div>
        </address>

        {/* 고객 지원 */}
        <div className="w-[200px] flex flex-col flex-shrink-0 gap-[.5rem]">
          <p className="bold-16">고객지원</p>
          <div className="flex flex-col gap-[.625rem]">
            <p className="medium-11 text-font-400">평일 9:00 ~ 18:00 (12:00 ~13:00 제외)</p>
            <button className="w-[180px] h-[36px] border-2 border-secondary-200 text-font-400 rounded-[4px] medium-13 hover:bg-primary-800 hover:border-0 hover:text-white transition-colors">
              펀드림에 문의
            </button>
          </div>
        </div>
      </div>

      {/* 경고문 */}
      <div className=" bg-primary-50 w-full">
        <p className="mx-auto max-w-[1200px] p-[20px] normal-12">
          펀드림은 next.js로 개발된 가상의 펀딩 플랫폼 프로젝트로, 실제 상업적 서비스가 아니며, 본 사이트의 모든 모금,
          거래, 배송에 대한 내용은 실제로 이루어지지 않습니다.
        </p>
      </div>
    </footer>
  );
}
