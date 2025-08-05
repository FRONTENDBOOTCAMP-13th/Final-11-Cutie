import { Addfunding, SpecialPlan } from "@components/common/etc";
import { JSX } from "react";

interface MainProductItemProps {
  title: string;
  itemList: JSX.Element[];
}

export default function MainProductItem({ title = '', itemList }: MainProductItemProps) {
  return (
    <div className="flex flex-col gap-[20px] mb-10">
      <div className="flex w-full justify-between items-center mb-[10px]">
        <SpecialPlan title={title} />
        <Addfunding title={title} />
      </div>
      <div className="flex justify-center gap-8">
        { itemList }
      </div>
    </div>
  );
}