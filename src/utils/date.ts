// 디데이 유틸 함수
export function getDdayText(startDateStr: string | number, endDateStr: string | number): string {
  if (!startDateStr || !endDateStr) return '정보 없음';

  const now = new Date();
  const startDate = new Date(startDateStr);
  const endDate = new Date(endDateStr);

  const nowUTC = Date.UTC(now.getFullYear(), now.getMonth(), now.getDate());
  const startUTC = Date.UTC(startDate.getFullYear(), startDate.getMonth(), startDate.getDate());
  const endUTC = Date.UTC(endDate.getFullYear(), endDate.getMonth(), endDate.getDate());

  if (nowUTC < startUTC) return '공개 예정';
  if (nowUTC > endUTC) return '종료';

  const diffDays = Math.ceil((endUTC - nowUTC) / (1000 * 60 * 60 * 24));

  if (isNaN(diffDays)) return '정보 없음';
  if (diffDays === 0) return 'D-day';
  return `D-${diffDays}`;
}
