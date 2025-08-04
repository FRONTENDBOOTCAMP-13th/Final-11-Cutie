import { Iproduct } from '@models/product';

/**
 * 현재 달성률을 계산하는 함수
 * @param product - Iproduct 타입의 상품 객체
 * @returns goalPercent (0 ~ 100, 소수점 반올림)
 */
export function calculateGoalPercent(product: Iproduct): number {
  const currentAmount = product.price * product.buyQuantity; // 현재 모금액
  const goalAmount = product.extra.goalPrice; // 목표 금액

  if (!goalAmount || goalAmount <= 0) return 0;

  return Math.round((currentAmount / goalAmount) * 100); // (현재 모금액/목표금액) x 100
}
