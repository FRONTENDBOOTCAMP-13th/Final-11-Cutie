// 계좌번호 정규식
// 123412341234 -> 1234-1234-1234 로 변경
export function formatCardNumber(value: string) {
  const onlyNumbers = value.replace(/\D/g, '');
  const limited = onlyNumbers.slice(0, 16);
  return limited.replace(/(\d{4})(?=\d)/g, '$1 ');
}
