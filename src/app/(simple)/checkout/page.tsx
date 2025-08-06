import CheckoutClient from '@app/(simple)/checkout/CheckoutClient';

export default function CheckoutPage() {
  return (
    <div className="flex flex-col items-center p-[24px] mobile:p-[40px] tablet:px-[90px] tablet:py-[64px] laptop:px-[120px] laptop:py-[64px] bg-bg text-font-900">
      <div className="w-full mt-[100px] max-w-[1200px] flex flex-col laptop:flex-row gap-[53px] tablet:gap-[57px] laptop:gap-[57px]">
        <CheckoutClient />
      </div>
    </div>
  );
}
