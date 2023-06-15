interface IorderProduct {
  productId: string;
  quantity: number;
}

export interface IOrderRequest {
  products: IorderProduct[];
  userId: string;
}
