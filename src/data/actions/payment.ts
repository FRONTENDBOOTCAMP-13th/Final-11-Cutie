import useUserStore from 'zustand/userStore';

interface Product {
  _id: number;
  quantity: number;
  size?: string;
  color?: string;
}

export async function requestPayment({
  product,
  addressId,
  cardNumber,
}: {
  product: { _id: number; quantity: number };
  addressId: number;
  cardNumber: string;
}) {
  const { user } = useUserStore.getState();
  const token = user?.token?.accessToken;

  if (!token) {
    throw new Error('로그인이 필요합니다.');
  }

  const body = {
    products: [product],
    addressId,
    cardNumber,
  };

  console.log('결제 요청 데이터:', body);

  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/market/orders`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(body),
  });

  if (!res.ok) {
    throw new Error(`결제 요청 실패: ${res.status}`);
  }

  return res.json();
}
