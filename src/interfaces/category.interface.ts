export interface ICategoryRequest {
  name: string;
}

export interface ICategory {
  id: string;
  name: string;
}

export interface ICategoryWithProductCount {
  id: string;
  name: string;
  productCount: number;
}

export interface IDeleteCategoryRequest {
  id: string;
}
