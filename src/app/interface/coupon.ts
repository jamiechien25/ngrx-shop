export interface coupon {
  couponId: string;
  couponDesc: string;
  couponType: string;
  discount: number;         //折數 ex: 0.9 0.8
  priceOff: number;         //單一品項折價 ex: 10,20,30
  deliveryFree: boolean;
}
