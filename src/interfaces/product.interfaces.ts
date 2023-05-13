import { ICategory } from "./category.interface";

export interface IProductRequest {
  name: string;
  price: string;
  apresentation: string;
  active: boolean;
  categoryId: string;
}

export interface IProduct {
  name: string;
  price: string;
  apresentation: string;
  active: boolean;
  category: ICategory;
}
