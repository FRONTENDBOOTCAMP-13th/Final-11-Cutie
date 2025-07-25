import { ChangeButton, ChangeButtonFill, CheckboxBtn } from '@components/button/SquareBtn';
import { CartItemChecked, CartItemUnchecked } from '@components/cart/CartItem';
import { MapPin } from 'lucide-react';

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
            <MapPin className="text-primary-800" />
            <div className="flex flex-col min-w-0">
              <div className="flex gap-2 bold-14">
                <span>배송지</span>
                &#58;
                <span>회사</span>
              </div>
              <span
                className="text-font-400 block max-w-full 
              [@media(max-width:510px)]:overflow-hidden
              [@media(max-width:510px)]:whitespace-nowrap
              [@media(max-width:510px)]:text-ellipsis
              [@media(max-width:510px)]:max-w-[100%]"
              >
                서울 종로구 종로3길 17, 광화문 D타워 D1동 16층, 17층
              </span>
            </div>
            <ChangeButton label="변경" className="min-w-[50px]" />
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
              <ChangeButton label="X 선택 삭제" />
              <ChangeButton label="주문불가삭제" />
            </div>
          </div>

          {/* 아이템 리스트*/}
          <div className="flex flex-col gap-5">
            <CartItemChecked />
            <CartItemChecked />
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
            <ChangeButtonFill label="주문하기" className="border-0 w-[197px] cursor-pointer" />
          </div>
        </div>
      </div>
    </>
  );
}

import { PurchaseHistoryItemWrapContainer } from '@components/product/ProductItem';

// 구매내역
export function PurchaseHistoryTab() {
  return (
    <>
      <PurchaseHistoryItemWrapContainer />
    </>
  );
}

// 펀드 페이지
export function FundPageTab() {
  return (
    <>
      <PurchaseHistoryItemWrapContainer />
    </>
  );
}

export function MyReviewTab() {
  return (
    <>
      <section className="p-[10px]">
        <div className="w-full text-center bold-14 laptop:text-[16px]">
          {/* 제목 부분 */}
          <div className="grid grid-cols-[auto_1fr_auto] overflow-hidden rounded-lg">
            <p className="bg-primary-800 px-2 min-w-10 py-1.5 text-white">NO</p>
            <p className="bg-primary-800 border-x border-white py-1.5 text-white">제목</p>
            <p className="bg-primary-800 px-2 hidden mobile:block mobile:min-w-24 py-1.5 text-white">날짜</p>
          </div>

          {/* 리뷰 부분 */}
          <div className="flex flex-col gap-3 normal-14 laptop:text-[16px] text-font-900 mt-3">
            <div className="grid grid-cols-[auto_1fr_auto] items-center border rounded-lg overflow-hidden hover:bg-primary-50 cursor-pointer">
              <div className="px-2 min-w-10 py-1.5">1</div>
              <div className="border-x px-2 text-left py-1.5 truncate">색깔이 생각보다 어둡네요</div>
              <div className="px-2 hidden mobile:block mobile:min-w-24 py-1.5">2025.08.08</div>
            </div>
            <div className="grid grid-cols-[auto_1fr_auto] items-center border rounded-lg overflow-hidden hover:bg-primary-50 cursor-pointer">
              <div className="px-2 min-w-10 py-1.5">1</div>
              <div className="border-x px-2 text-left py-1.5 truncate">색깔이 생각보다 어둡네요</div>
              <div className="px-2 hidden mobile:block mobile:min-w-24 py-1.5">2025.08.08</div>
            </div>
            <div className="grid grid-cols-[auto_1fr_auto] items-center border rounded-lg overflow-hidden hover:bg-primary-50 cursor-pointer">
              <div className="px-2 min-w-10 py-1.5">1</div>
              <div className="border-x px-2 text-left py-1.5 truncate">색깔이 생각보다 어둡네요</div>
              <div className="px-2 hidden mobile:block mobile:min-w-24 py-1.5">2025.08.08</div>
            </div>
            <div className="grid grid-cols-[auto_1fr_auto] items-center border rounded-lg overflow-hidden hover:bg-primary-50 cursor-pointer">
              <div className="px-2 min-w-10 py-1.5">1</div>
              <div className="border-x px-2 text-left py-1.5 truncate">색깔이 생각보다 어둡네요</div>
              <div className="px-2 hidden mobile:block mobile:min-w-24 py-1.5">2025.08.08</div>
            </div>
            <div className="grid grid-cols-[auto_1fr_auto] items-center border rounded-lg overflow-hidden hover:bg-primary-50 cursor-pointer">
              <div className="px-2 min-w-10 py-1.5">1</div>
              <div className="border-x px-2 text-left py-1.5 truncate">색깔이 생각보다 어둡네요</div>
              <div className="px-2 hidden mobile:block mobile:min-w-24 py-1.5">2025.08.08</div>
            </div>
            <div className="grid grid-cols-[auto_1fr_auto] items-center border rounded-lg overflow-hidden hover:bg-primary-50 cursor-pointer">
              <div className="px-2 min-w-10 py-1.5">1</div>
              <div className="border-x px-2 text-left py-1.5 truncate">색깔이 생각보다 어둡네요</div>
              <div className="px-2 hidden mobile:block mobile:min-w-24 py-1.5">2025.08.08</div>
            </div>
            <div className="grid grid-cols-[auto_1fr_auto] items-center border rounded-lg overflow-hidden hover:bg-primary-50 cursor-pointer">
              <div className="px-2 min-w-10 py-1.5">1</div>
              <div className="border-x px-2 text-left py-1.5 truncate">색깔이 생각보다 어둡네요</div>
              <div className="px-2 hidden mobile:block mobile:min-w-24 py-1.5">2025.08.08</div>
            </div>
            <div className="grid grid-cols-[auto_1fr_auto] items-center border rounded-lg overflow-hidden hover:bg-primary-50 cursor-pointer">
              <div className="px-2 min-w-10 py-1.5">1</div>
              <div className="border-x px-2 text-left py-1.5 truncate">색깔이 생각보다 어둡네요</div>
              <div className="px-2 hidden mobile:block mobile:min-w-24 py-1.5">2025.08.08</div>
            </div>
            <div className="grid grid-cols-[auto_1fr_auto] items-center border rounded-lg overflow-hidden hover:bg-primary-50 cursor-pointer">
              <div className="px-2 min-w-10 py-1.5">1</div>
              <div className="border-x px-2 text-left py-1.5 truncate">색깔이 생각보다 어둡네요</div>
              <div className="px-2 hidden mobile:block mobile:min-w-24 py-1.5">2025.08.08</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
