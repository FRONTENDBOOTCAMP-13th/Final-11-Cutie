import { CheckSquareBtn, SquareBtnBlue, SquareBtnWhite, UnCheckSquareBtn } from "@components/button/SquareBtn";
import ProductForm from "@components/product/ProductForm";


export default function Home() {
  return (
    <div>
      <p className="bold-24">인덱스 페이지입니다</p>
      <ProductForm />
      <UnCheckSquareBtn prop='인증하기' />
      <CheckSquareBtn prop='인증하기' />
      <SquareBtnWhite />
      <SquareBtnBlue/>
    </div>
  );
}
