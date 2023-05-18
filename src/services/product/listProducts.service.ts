import AppDataSource from "../../data-source";
import { Product } from "../../entities/product.entity";
import { IProduct } from "../../interfaces/product.interfaces";
const listProductsService = (): Promise<IProduct[]> => {
  const productsRepository = AppDataSource.getRepository(Product);

  const products = productsRepository.find();

  return products;
};

export default listProductsService;
