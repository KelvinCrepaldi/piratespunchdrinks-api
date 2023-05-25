import { Product } from "../entities/product.entity";
export interface IAdditionalInfoRequest {
  text: string;
}
export interface IAditionalInfo {
  text: string;
  product: Product;
}
