import { ChangeButton, ChangeButtonFill, CheckboxBtn} from "@components/button/SquareBtn";
import { CartItemChecked, CartItemUnchecked } from "@components/cart/CartItem";
import { MapPin } from "lucide-react";

//장바구니 탭
export default function CartTab() {
  return (
    <>
      <div className="min-w-[250px] p-2.5 normal-14 flex flex-col justify-center gap-6 w-full">

        {/* 배송정보 */}
        <div className="flex flex-col gap-6 w-full">

          <div className="flex flex-row justify-between [@media(min-width:250px)_and_(max-width:394px)]:flex-col">
            <div className="bold-18 flex gap-2">
              <span>일반배송</span>
              <span>2</span>
            </div>
            <div className="bold-14 text-font-400 flex gap-2.5">
              <span>장바구니</span> 
              &gt; 
              <span>주문/결제</span> 
              &gt; 
              <span>완료</span>
            </div>
          </div>

          <div className="items-center flex flex-row p-2.5 gap-2.5 rounded-2xl bg-primary-50">
            <MapPin className="text-primary-800"/>
            <div className="flex flex-col">
              <div className="flex gap-2 bold-14">
                <span>배송지</span>
                &#58;
                <span>회사</span>
              </div>
              <span className="text-font-400">서울 종로구 종로3길 17, 광화문 D타워 D1동 16층, 17층</span>
            </div>
            <ChangeButton label="변경" className="min-w-[50px]"/>
          </div>

        </div>

        {/* 장바구니 아이템 */}
        <div className="flex flex-col gap-6">

          <div className="flex flex-row justify-between [@media(min-width:250px)_and_(max-width:394px)]:flex-col gap-2.5">
            <div className="bold-18 flex items-center gap-1.5">
              <CheckboxBtn />
              <span>전체 선택</span>
            </div>
            <div className="flex flex-row gap-2">
              <ChangeButton label='X 선택 삭제'/>
              <ChangeButton label='주문불가삭제'/>
            </div>
          </div>

          {/* 아이템 리스트*/}
          <div className="flex flex-col gap-5">
            <CartItemChecked/>
            <CartItemChecked/>
            <CartItemUnchecked />
          </div>
        </div>

        {/* 총 결제액 */}
        <div className="bg-primary-50 w-full h-[100px] flex flex-col gap-2.5 justify-center p-6">
          <div className="flex justify-between text-font-900 bold-18 [@media(min-width:250px)_and_(max-width:394px)]:text-[14px]">
            <span>총 2건 주문 금액</span>
            <span>1,000,000 원</span>
          </div>
          <div className="flex justify-end">
          <ChangeButtonFill label="주문하기" className="border-0 w-[197px] cursor-pointer"/>
          </div>
        </div>

      </div>
    </>
  );
}