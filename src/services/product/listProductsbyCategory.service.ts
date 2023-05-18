import AppDataSource from "../../data-source";
import { Product } from "../../entities/product.entity";
import {
  IProductByCategoryRequest,
  IProduct,
} from "../../interfaces/product.interfaces";

const listProductsByCategoryService = ({
  category,
}: IProductByCategoryRequest): Promise<IProduct[]> => {
  const productsRepository = AppDataSource.getRepository(Product);

  const products = productsRepository.find({
    where: { category: { name: category } },
  });

  return products;
};

export default listProductsByCategoryService;
