import WriteReviewForm from "@app/(main)/accounts/myReview/writeReview/WriteReviewForm";

interface WriteReviewPageProps {
  searchParams: { 
    productId: string; 
    orderId: string;
  };
}

export default function WriteReview({ searchParams }: WriteReviewPageProps) {
  // URL 파라미터에서 값 추출 및 기본값 설정
  const productId = parseInt(searchParams.productId);
  const orderId = parseInt(searchParams.orderId);

  return (
    <WriteReviewForm
      productId={productId} 
      orderId={orderId} 
    />
  );
}