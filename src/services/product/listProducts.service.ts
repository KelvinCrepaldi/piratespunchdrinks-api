import AppDataSource from "../../data-source";
import { Product } from "../../entities/product.entity";
const listProductsService = () => {
  const productsRepository = AppDataSource.getRepository(Product);

  const products = productsRepository.find();

  return products;
};

export default listProductsService;
