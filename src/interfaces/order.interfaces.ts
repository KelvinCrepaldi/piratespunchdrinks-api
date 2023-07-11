import { IAddress } from "./address.interfaces";
import { ICreditCard } from "./creditCard.interfaces";

interface IorderProduct {
  productId: string;
  quantity: number;
}

export interface IOrderRequest {
  products: IorderProduct[];
  userId: string;
  addressId: string;
  creditCardId: string;
}

export interface IListUserOrdersRequest {
  id: string;
}
