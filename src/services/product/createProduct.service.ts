import AppDataSource from "../../data-source";
import { IProductRequest } from "../../interfaces/product.interfaces";
import { IProduct } from "../../interfaces/product.interfaces";
import { Product } from "../../entities/product.entity";
import { Category } from "../../entities/categories.entity";
import { AppError } from "../../errors/appErrors";
const createProductService = async ({
  apresentation,
  categoryId,
  name,
  price,
  amount,
}: IProductRequest): Promise<IProduct> => {
  const productRepository = AppDataSource.getRepository(Product);
  const CategoryRepository = AppDataSource.getRepository(Category);

  const category = await CategoryRepository.findOne({
    where: { id: categoryId },
  });

  if (!category) {
    throw new AppError(403, "Category not found");
  }

  const product = productRepository.create({
    active: true,
    name: name,
    price: price,
    amount: amount,
    apresentation: apresentation,
    category: category,
  });

  await productRepository.save(product);

  return product;
};

export default createProductService;
