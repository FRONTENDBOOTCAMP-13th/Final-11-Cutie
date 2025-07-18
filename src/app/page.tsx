import { CheckFinalAmount, OrderedProductComponent } from '@components/address/DeliveryAddress';
import { NoButtonblue, NoButtonWhite, YesButtonblue, YesButtonWhite } from '@components/button/SquareBtn';
import { See, ToggleSwitchBig } from '@components/common/etc';

export default function Home() {
  return (
    <div>
      <p className="bold-24">인덱스 페이지입니다</p>
      <YesButtonWhite />
      <YesButtonblue />
      <NoButtonWhite />
      <NoButtonblue />
      <See />
      <ToggleSwitchBig />
      <OrderedProductComponent />
    </div>
  );
}
