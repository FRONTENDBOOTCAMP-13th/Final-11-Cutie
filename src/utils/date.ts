// 디데이 유틸 함수
export function getDdayText(endDate: string | number | undefined | null): string {
  if (!endDate) return '정보 없음';

  const now = new Date();
  const end = new Date(endDate);
  const diffTime = end.getTime() - now.getTime();
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  if (isNaN(diffDays)) return '정보 없음';
  if (diffDays > 0) return `D-${diffDays}`;
  if (diffDays === 0) return 'D-day';
  return '종료';
}
