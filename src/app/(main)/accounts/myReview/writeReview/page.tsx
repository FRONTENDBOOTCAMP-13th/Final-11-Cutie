import WriteReviewForm from "@app/(main)/accounts/myReview/writeReview/WriteReviewForm";

interface WriteReviewPageProps {
  searchParams: Promise<{ 
    productId: string; 
    orderId: string;
  }>;
}

export default async function WriteReview({ searchParams }: WriteReviewPageProps) {
  // URL 파라미터에서 값 추출 및 기본값 설정
  const params = await searchParams;

  const productId = parseInt(params.productId);
  const orderId = parseInt(params.orderId);

  return (
    <WriteReviewForm
      productId={productId} 
      orderId={orderId} 
    />
  );
}