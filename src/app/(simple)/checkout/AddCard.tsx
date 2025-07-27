import { UserSelect } from '@components/button/RoundedBtn';
import { ChangeButtonFill, PreviewCheckboxWithLabel } from '@components/button/SquareBtn';

/* 카드 등록 모달 내용 */
export function AddCard() {
  const innerPadding = `p-[24px] ` + `mobile:p-[40px] ` + `tablet:p-[40px] ` + `laptop:p-[43px] `;
  const innerWidth = `w-[300px] ` + `mobile:w-[450px] ` + `tablet:w-[684px] ` + `laptop:w-[684px] `;

  return (
    <div className={`${innerWidth} ${innerPadding}`}>
      <AddCardTitle />
      <SelectUserType />
      <InputCardNumber />
      <ExpirationDate />
      <CardPasswordAndBirthday />
      <DefaultPayment />
      <ChangeButtonFill
        label={'등록 완료'}
        className="w-full py-[8px] tablet:text-[20px] tablet:py-[16px] laptop:py-[20px]"
      />
    </div>
  );
}

/* 신용/체크 카드 등록 타이틀 */
function AddCardTitle() {
  const textSize = 'normal-18 tablet:text-[20px] laptop:text-[24px]';
  const textStlye = 'font-[700]';

  return (
    <div className={`${textSize} ${textStlye}`}>
      <p>신용/체크 카드 등록</p>
    </div>
  );
}

/* 개인/법인 체크 박스 */
function SelectUserType() {
  const stlye = 'pt-[20px] pb-[12px]';

  return (
    <div className={`${stlye}`}>
      <UserSelect />
    </div>
  );
}

/* 카드 번호 입력창 */
function InputCardNumber() {
  const style = 'pb-[12px]';
  const sortStyle = 'flex flex-col gap-[10px]';
  const textSize = 'normal-14 laptop:text-[16px]';
  const textStyle = 'font-[600]';

  const inputStlye = 'bg-bg border-secondary-200 border w-full rounded-sm p-[9px] h-[37px]';
  const inputTextSize = 'normal-14 laptop:text-[16px]';
  const inputTextStyle = 'font-[400]';

  return (
    <div className={`${style} ${sortStyle}`}>
      <p className={`${textSize} ${textStyle}`}>카드번호</p>
      <input
        type="tel"
        placeholder="1234 5678 9012 3456"
        className={`${inputStlye} ${inputTextSize} ${inputTextStyle}`}
      />
    </div>
  );
}

/* 카드 유효기간 입력 */
function ExpirationDate() {
  const style = 'pb-[12px]';
  const sortStyle = 'flex flex-col gap-[12px]';
  const textSize = 'normal-14';
  const textStyle = 'font-[600]';

  const daySortStyle = 'flex gap-[24px]';
  const dayTextStyle = 'font-[500]';
  const dayTextSize = 'normal-14 laptop:text-[16px]';

  const dropDownStyle = 'p-[9px] bg-bg border border-secondary-200 rounded-sm w-[103px]';

  return (
    <div className={`${style} ${sortStyle}`}>
      <p className={`${textSize} ${textStyle}`}>카드유효기간</p>
      {/* 월, 연도 선택 */}
      <div className={`${daySortStyle} ${dayTextStyle} ${dayTextSize}`}>
        {/* 월 드롭다운 */}
        <div>
          <select name="birthMonth" id="birthMonth" className={`${dropDownStyle}`}>
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
        <div>
          <select name="birthMonth" id="birthYear" className={`${dropDownStyle}`}>
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
  );
}

/* 카드 비밀번호, 소유주 생년월일 */
function CardPasswordAndBirthday() {
  const style = 'pb-[12px]';
  const sortStyle = 'grid gap-[10px] mobile:grid-cols-[1fr_1fr] mobile:gap-[33px]';
  const inputSortStyle = 'flex flex-col gap-[10px]';

  const textSize = 'normal-14 laptop:text-[16px]';
  const textStyle = 'font-[600]';

  const inputStlye = 'bg-bg border-secondary-200 border p-[9px] rounded-[4px]';
  const inputTextSize = 'normal-8 tablet:text-[14px] laptop:text-[16px]';
  const inputTextStyle = 'font-[400]';

  return (
    <div className={`${style} ${sortStyle}`}>
      {/* 카드 비밀번호 앞 2자리 */}
      <div className={`${inputSortStyle}`}>
        <p className={`${textSize} ${textStyle}`}>카드 비밀번호 앞 2자리</p>
        <input
          type="tel"
          placeholder="카드 비밀번호 앞 2자리를 입력해주세요."
          className={`${inputStlye} ${inputTextSize} ${inputTextStyle}`}
        />
      </div>

      {/* 소유주 생년월일 */}
      <div className={`${inputSortStyle}`}>
        <p className={`${textSize} ${textStyle}`}>소유주 생년월일</p>
        <input type="tel" placeholder="예)250808" className={`${inputStlye} ${inputTextSize} ${inputTextStyle}`} />
      </div>
    </div>
  );
}

/* 기본 결제 수단으로 등록 체크 박스 */
function DefaultPayment() {
  const style = 'pb-[24px]';

  return (
    <div className={`${style}`}>
      <PreviewCheckboxWithLabel title={'기본 결제 수단으로 등록'} />
    </div>
  );
}
