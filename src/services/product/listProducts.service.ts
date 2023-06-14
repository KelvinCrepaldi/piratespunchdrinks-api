import AppDataSource from "../../data-source";
import { Product } from "../../entities/product.entity";
const listProductsService = (): Promise<Product[]> => {
  const productsRepository = AppDataSource.getRepository(Product);

  const products = productsRepository.find();

  return products;
};

export default listProductsService;
