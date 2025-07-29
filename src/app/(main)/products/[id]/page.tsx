import { ReviewTab } from '@components/button/SquareBtn';
import ProductHead from './ProductSummary';


export default function ProductIDPage() {
  return (
    <>
      <div className="p-6 flex flex-col gap-6 justify-center items-center mobile:pr-[40px] tablet:pr-[90px] laptop:pr-[120px] mobile:pl-[40px] tablet:pl-[90px] laptop:pl-[120px] mobile:pt-[40px] tablet:pt-[64px] mobile:pb-10">
        <ProductHead />
        <ReviewTab />
      </div>
    </>
  );
}
// export function ComingProduct() {
//   return (
//     <>
//       <div className="p-6 flex flex-col gap-6 justify-center items-center mobile:pr-[40px] tablet:pr-[90px] laptop:pr-[120px] mobile:pl-[40px] tablet:pl-[90px] laptop:pl-[120px] mobile:pt-[40px] tablet:pt-[64px] mobile:pb-10">
//         <ComingSoonProduct />
//         <ReviewTab />
//       </div>
//       <div className="p-6 mobile:pr-[100px] tablet:pr-[200px] mobile:pl-[100px] tablet:pl-[200px] mobile:pt-10 flex flex-col justify-center items-center gap-5 mobile:gap-10">
//         <ProductDetail />
//         <ProductDetail />
//         <ProductDetail />
//         <ProductDetail />
//         <ProductDetail />
//       </div>
//     </>
//   );
// }
