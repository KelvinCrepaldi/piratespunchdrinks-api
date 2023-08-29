import { ICategory } from "./category.interface";
import { ICharacteristic } from "./characteristic.interface";
import { IAditionalInfo } from "./aditionalInfo.interface";
import { Product } from "../entities/product.entity";

export interface IProductCharacteristic {
  text: string;
  product?: Product;
}

export interface IProductAditionalInfo {
  text: string;
  product?: Product;
}

export interface IProductRequest {
  code: string;
  name: string;
  price: number;
  amount: string;
  img_url: string;
  apresentation: string;
  active: boolean;
  category: string;
  characteristic?: IProductCharacteristic[];
  additional_info?: IProductAditionalInfo[];
}

export interface IProductByCategoryRequest {
  category: string;
}

interface IProductSeedAddInfo {
  text: string;
}
interface IProductSeedCharacteristic {
  text: string;
}

export interface IProductSeed {
  code: string;
  name: string;
  price: number;
  amount: string;
  img_url: string;
  apresentation: string;
  active: boolean;
  category: ICategory | null;
  characteristic?: IProductSeedCharacteristic[];
  additional_info?: IProductSeedAddInfo[];
}

export interface IListProductServiceRequest {
  code: string;
}
