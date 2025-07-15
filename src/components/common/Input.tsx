// 아이디 입력(기본)
export function InputIdDefault() {
  return (
    <input
      type="text"
      className="w-[28.8125rem] px-[.9375rem] py-[1.1875rem] border-[.125rem] border-font-400 rounded-[.5rem] box-content font-pretendard"
      placeholder="아이디 입력"
    />
  );
}

// 아이디 입력(480px)
export function InputIdMobile() {
  return (
    <input
      type="text"
      className="w-[17.75rem] px-[.9375rem] py-[1.1875rem] border-[.125rem] border-font-400 rounded-[.5rem] box-content font-pretendard"
      placeholder="아이디 입력"
    />
  );
}
