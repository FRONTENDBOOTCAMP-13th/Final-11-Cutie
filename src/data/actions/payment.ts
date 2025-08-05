import useUserStore from 'zustand/userStore';

const CLIENT_ID = process.env.NEXT_PUBLIC_CLIENT_ID || '';

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

  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/orders`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Client-Id': CLIENT_ID,
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(body),
  });

  if (!res.ok) {
    throw new Error(`결제 요청 실패: ${res.status}`);
  }

  return res.json();
}
