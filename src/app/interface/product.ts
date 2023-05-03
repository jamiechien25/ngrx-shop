export interface product {
  productId: string;
  productName: string;
  productPrice: number;
  productCount: number;
  productDesc: string;

  addCart(productId: string, count: string): void;
  getcoupon(productId: string): void;
}


