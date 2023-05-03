import { coupon } from './coupon';

export interface cart {
  productIds: string[];

  deleteAll(): void;
  selectAll(): void;
  buy(): void;
  usingCoupon(coupon: coupon): void;
  addCart(productId: string, count: string): void;
}
