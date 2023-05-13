import { Product } from "../entities/product.entity";
export interface ICharacteristicRequest {
  text: string;
}
export interface ICharacteristic {
  text: string;
  product: Product;
}
