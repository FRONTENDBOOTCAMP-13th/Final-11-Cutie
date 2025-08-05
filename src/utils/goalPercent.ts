import { Iproduct } from '@models/product';

export function calculateGoalPercent(product: Iproduct): number {
  const currentAmount = product.price * product.buyQuantity; // 현재 모금액
  const goalAmount = product.extra.goalPrice; // 목표 금액

  if (!goalAmount || goalAmount <= 0) return 0;

  return Math.round((currentAmount / goalAmount) * 100); // (현재 모금액/목표금액) x 100
}
