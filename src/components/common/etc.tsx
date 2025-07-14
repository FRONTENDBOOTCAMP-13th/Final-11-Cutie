// 기타 컴포넌트 목록입니다. 필요한 부분 복붙 통해서 작업하기~
import '@app/globals.css';

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
export function InputIdSmall() {
  return (
    <input
      type="text"
      className="w-[17.75rem] px-[.9375rem] py-[1.1875rem] border-[.125rem] border-font-400 rounded-[.5rem] box-content font-pretendard"
      placeholder="아이디 입력"
    />
  );
}
