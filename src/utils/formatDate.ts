export function formatDate(dateStr: string | number | null | undefined): string {
  if (!dateStr) return '날짜 없음';
  const date = new Date(dateStr);
  if (isNaN(date.getTime())) return '날짜 없음';

  const yyyy = date.getFullYear();
  const mm = String(date.getMonth() + 1).padStart(2, '0');
  const dd = String(date.getDate()).padStart(2, '0');

  return `${yyyy}.${mm}.${dd}`;
}
