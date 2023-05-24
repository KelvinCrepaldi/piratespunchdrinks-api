import { ICategory } from "./category.interface";
import { ICharacteristic } from "./characteristic.interface";
import { IAditionalInfo } from "./aditionalInfo.interface";

export interface IProductRequest {
  name: string;
  price: string;
  amount: string;
  img_url: string;
  apresentation: string;
  active: boolean;
  categoryId: string;
}

export interface IProduct {
  name: string;
  price: string;
  amount: string;
  img_url: string;
  apresentation: string;
  active: boolean;
  category: ICategory | null;
  characteristic?: ICharacteristic;
  additional_info?: IAditionalInfo;
}

export interface IProductByCategoryRequest {
  category: string;
}
