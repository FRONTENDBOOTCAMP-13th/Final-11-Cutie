import { ProductListCategory } from '@components/menu/Category';
import { ProductItem } from '@components/product/ProductItem';

export default function ProductPage() {
  

  return (
    <main className="p-5 tablet:p-10 laptop:p-[90px]">
      <ProductListCategory />
      <div className="grid grid-cols-2 tablet:grid-cols-3 laptop:grid-cols-4 gap-2.5 mobile:pt-10 pt-6">
        {/*상품 데이터 만들면 여기에 map으로 랜더링*/}
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
      </div>
    </main>
  );
}
