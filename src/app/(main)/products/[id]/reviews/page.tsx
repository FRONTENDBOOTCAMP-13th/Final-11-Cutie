import ReviewSection from './ReviewSection';

interface PageProps { params: { id: string } }


export default async function ProductIDCommentPage({ params }: PageProps) {
  const productId = Number(params.id);

  return (
    <div>
      <ReviewSection productId={ productId } />
    </div>
  );
}