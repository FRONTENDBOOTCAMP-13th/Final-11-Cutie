// 마이페이지탭
export function ProductTabs() {
  return (
    <div className="bg-primary-50 font-pretendard w-full border-b border-primary-100">
      <nav className="flex w-full ">
        {['구매 내역', '펀드 페이지', '장바구니', '나의 후기'].map(tab => (
          <button
            key={tab}
            className="group flex-1 min-w-0 text-center px-0 py-[1.2vw]
                       overflow-hidden whitespace-nowrap
                       cursor-pointer text-[3.3vw] mobile:text-[14px] tablet:text-[16px] 
                       text-font-900 hover:text-primary-800 relative font-semibold"
          >
            <span>{tab}</span>
            <span
              className="absolute left-1/2 -translate-x-1/2 bottom-[2px] w-[80%] h-[0.6vw] 
                             bg-primary-800 opacity-0 group-hover:opacity-100 transition-opacity duration-200 rounded-[2px]"
            ></span>
          </button>
        ))}
      </nav>
    </div>
  );
}
