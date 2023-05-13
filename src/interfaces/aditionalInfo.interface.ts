import { Product } from "../entities/product.entity";
export interface IAditionalInfoRequest {
  text: string;
}
export interface IAditionalInfo {
  text: string;
  product: Product;
}
