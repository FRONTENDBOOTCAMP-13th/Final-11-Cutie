import '@app/globals.css';
import CloseBtn from '@assets/icons/close-btn.svg';
import { CheckCircle } from '@components/checkbox/CircleCheckbox';
import { CheckSquare } from '@components/checkbox/SquareCheckbox';

{
  /* 신용/체크 카드 등록 모달 */
}
export function CardModal() {
  return (
    <div className="w-[393px] h-[381px] mobile:w-[587px] mobile:h-[596px] laptop:w-[684px] laptop:h-[691px] p-6 mobile:p-10 laptop:p-[43px] laptop:pt-[64px] laptop:pb-[64px] rounded-2xl bg-primary-50 flex flex-col gap-3 mobile:gap-10">
      <div className="flex flex-col gap-3 mobile:gap-6">
        {/* 신용/체크 카드 등록 */}
        <div className=" flex flex-row justify-between bold-16 mobile:text-[20px] laptop:text-[24px] mobile:pb-5">
          <p>신용/체크 카드 등록</p>
          <button type="button">
            <CloseBtn />
          </button>
        </div>

        {/* 개인, 법인 체크 */}
        <div className="flex flex-row gap-[90px]">
          <CheckCircle prop="개인" />
          <CheckCircle prop="법인" />
        </div>

        {/* 카드 번호 */}
        <div className="flex flex-col gap-2.5">
          <p className="bold-14 laptop:text-[16px]">카드번호</p>
          <input
            type="tel"
            placeholder="1234 5678 9012 3456"
            className="bg-bg border-secondary-200 border w-full h-[28px] mobile:h-[40px] laptop:h-[47px] p-2.5 rounded-sm normal-14 laptop:text-[16px]"
          />
        </div>

        {/* 카드 유효기간 */}
        <div className="flex flex-col gap-2.5 ">
          <p className="bold-14 laptop:text-[16px]">카드유효기간</p>
          {/* 월, 연도 선택 */}
          <div className="flex gap-6">
            {/* 월 드롭다운 */}
            <div className="">
              <select
                name="birthMonth"
                id="birthMonth"
                className="w-[103px] h-[35px] bg-bg border border-secondary-200 rounded-sm normal-14 laptop:text-[16px] p-[5px] mobile:h-[47px] laptop:h-[59px]"
              >
                <option value="1">1월</option>
                <option value="2">2월</option>
                <option value="3">3월</option>
                <option value="4">4월</option>
                <option value="5">5월</option>
                <option value="6">6월</option>
                <option value="7">7월</option>
                <option value="8">8월</option>
                <option value="9">9월</option>
                <option value="10">10월</option>
                <option value="11">11월</option>
                <option value="12">12월</option>
              </select>
            </div>
            {/* 연도 드롭다운 */}
            <div className="">
              <select
                name="birthMonth"
                id="birthMonth"
                className="w-[103px] h-[35px] bg-bg border border-secondary-200 rounded-sm normal-14 laptop:text-[16px] p-[5px] mobile:h-[47px] laptop:h-[59px]"
              >
                <option value="2025">2025</option>
                <option value="2024">2024</option>
                <option value="2023">2023</option>
                <option value="2022">2022</option>
                <option value="2021">2021</option>
                <option value="2020">2020</option>
                <option value="2019">2019</option>
                <option value="2018">2018</option>
                <option value="2017">2017</option>
                <option value="2016">2016</option>
                <option value="2015">2015</option>
                <option value="2014">2014</option>
                <option value="2013">2013</option>
                <option value="2012">2012</option>
                <option value="2011">2011</option>
                <option value="2010">2010</option>
                <option value="2009">2009</option>
                <option value="2008">2008</option>
                <option value="2007">2007</option>
                <option value="2006">2006</option>
                <option value="2005">2005</option>
                <option value="2004">2004</option>
                <option value="2003">2003</option>
                <option value="2002">2002</option>
                <option value="2001">2001</option>
                <option value="2000">2000</option>
                <option value="1999">1999</option>
                <option value="1998">1998</option>
                <option value="1997">1997</option>
                <option value="1996">1996</option>
                <option value="1995">1995</option>
              </select>
            </div>
          </div>
        </div>

        {/* 카드 비밀번호, 소유주 생년월일 */}
        <div className="flex gap-6">
          {/* 카드 비밀번호 앞 2자리 */}
          <div className="flex flex-col gap-2.5">
            <p className="bold-14 laptop:text-[16px]">카드 비밀번호 앞 2자리</p>
            <input
              type="tel"
              placeholder="카드 비밀번호 앞 2자리를 입력해주세요."
              className="bg-bg border-secondary-200 border w-[160px] h-[28px] p-2.5 rounded-sm normal-10 mobile:h-[41px] mobile:w-[241px] laptop:w-[287px] laptop:h-[49px] mobile:text-[14px] laptop:text-[16px]"
            />
          </div>
          {/* 소유주 생년월일 */}
          <div className="flex flex-col gap-2.5">
            <p className="bold-14 laptop:text-[16px]">소유주 생년월일</p>
            <input
              type="tel"
              placeholder="예)250808"
              className="bg-bg border-secondary-200 border w-[160px] h-[28px] p-2.5 rounded-sm normal-10 mobile:h-[40px] mobile:w-[241px] laptop:w-[287px] laptop:h-[49px] mobile:text-[14px] laptop:text-[16px]"
            />
          </div>
        </div>

        {/* 기본 결제수단 등록 */}
        <CheckSquare prop="기본 결제 수단으로 등록" />
      </div>

      {/* 등록완료 버튼 */}
      <button className="w-[345px] h-[33px] mobile:w-[507px] mobile:h-[56px] laptop:w-[598px] laptop:h-[64px] p-2 flex items-center justify-center bg-primary-800 text-white semibold-14 mobile:text-[20px] rounded-sm ">
        등록완료
      </button>
    </div>
  );
}

{
  /* 배송지 등록 모달 */
}
export function ShippingAddressModal() {
  return (
    <div className="w-[393px] h-[381px] mobile:w-[587px] mobile:h-[596px] laptop:w-[684px] laptop:h-[691px] p-6  mobile:p-10 laptop:p-[43px] laptop:pt-[64px] laptop:pb-[64px] rounded-2xl bg-primary-50 flex flex-col gap-6 mobile:gap-10">
      <div className="flex flex-col gap-3 mobile:gap-6">
        {/* 배송지 추가 */}
        <div className=" flex flex-row justify-between bold-16 mobile:text-[20px] laptop:text-[24px] mobile:pb-5">
          <p>배송지 추가</p>
          <button type="button">
            <CloseBtn />
          </button>
        </div>

        {/* 받는 사람 */}
        <div className="flex flex-col gap-2.5">
          <p className="bold-14 laptop:text-[16px]">받는 사람</p>
          <input
            type="tel"
            placeholder="받는 분 성함을 입력해주세요."
            className="bg-bg border-secondary-200 border w-full h-[28px] mobile:h-[40px] laptop:h-[47px] p-2.5 rounded-sm normal-12 mobile:text-[14px] laptop:text-[16px]"
          />
        </div>

        {/* 주소 */}
        <div className="flex flex-col gap-2.5">
          <p className="bold-14 laptop:text-[16px]">주소</p>
          <input
            type="tel"
            placeholder="받는 분 주소를 입력해 주세요."
            className="bg-bg border-secondary-200 border w-full h-[28px] mobile:h-[40px] laptop:h-[47px] p-2.5 rounded-sm normal-12 mobile:text-[14px] laptop:text-[16px]"
          />
        </div>

        {/* 받는 사람 휴대폰 번호 */}
        <div className="flex flex-col gap-2.5">
          <p className="bold-14 laptop:text-[16px]">받는 사람 휴대폰 번호</p>
          <input
            type="tel"
            placeholder="받는 분 휴대폰 번호를 입력해주세요."
            className="bg-bg border-secondary-200 border w-full h-[28px] mobile:h-[40px] laptop:h-[47px] p-2.5 rounded-sm normal-12 mobile:text-[14px] laptop:text-[16px]"
          />
        </div>

        {/* 기본 결제수단 등록 */}
        <CheckSquare prop="기본 결제 수단으로 등록" />
        <CheckSquare prop="개인정보 수집 및 이용 동의" />
      </div>

      {/* 등록완료 버튼 */}
      <button className="w-[345px] h-[33px] mobile:w-[507px] mobile:h-[56px] laptop:w-[598px] laptop:h-[64px] p-2 flex items-center justify-center bg-primary-800 text-white semibold-14 mobile:text-[20px] rounded-sm ">
        등록완료
      </button>
    </div>
  );
}
