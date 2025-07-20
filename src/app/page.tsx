import { Header } from '@components/common/Header';
import { ShippingAddressModal } from '@components/modal/card/CardModal';

export default function Home() {
  return (
    <div>
      <Header />
      <ShippingAddressModal />
    </div>
  );
}
