// 로그인 입력(기본)
export function LoginButtonDefault() {
  return (
    <button className="w-[28.8125rem] h-[3.5625rem] bg-primary-800 text-white rounded-[.25rem] hover:opacity-[70%] semibold-24 font-pretendard">
      로그인
    </button>
  );
}

// 로그인 입력(480px)
export function LoginButtonMobile() {
  return (
    <button className="w-[17.75rem] h-[2.6875rem] bg-primary-800 text-white rounded-[.25rem] hover:opacity-[70%] semibold-14 font-pretendard">
      로그인
    </button>
  );
}
