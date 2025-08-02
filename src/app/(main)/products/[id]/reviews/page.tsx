
import ReviewSection from './ReviewSection';

interface PageProps { 
  params: Promise<{ id: string }> // Promise로 변경
}

export default async function ProductIDCommentPage({ params }: PageProps) {
  // params를 await으로 언래핑
  const { id } = await params;
  const productId = Number(id);

  return (
    <div>
      <ReviewSection productId={productId} />
    </div>
  );
}