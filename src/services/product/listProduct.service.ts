import AppDataSource from "../../data-source";
import { Product } from "../../entities/product.entity";
import { AppError } from "../../errors/appErrors";
import { IListProductServiceRequest } from "../../interfaces/product.interfaces";

const listProductService = async ({
  code,
}: IListProductServiceRequest): Promise<Product> => {
  const productRepository = AppDataSource.getRepository(Product);

  const product = await productRepository.findOne({
    where: { code: code, active: true },
  });

  if (!product) {
    throw new AppError(404, "The requested resource does not exist");
  }

  return product;
};

export default listProductService;
