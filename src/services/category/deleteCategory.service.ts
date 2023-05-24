import AppDataSource from "../../data-source";
import { Category } from "../../entities/categories.entity";
import { Product } from "../../entities/product.entity";
import { IDeleteCategoryRequest } from "../../interfaces/category.interface";

const deleteCategoryService = async ({
  id,
}: IDeleteCategoryRequest): Promise<void> => {
  const categoryRepository = AppDataSource.getRepository(Category);
  const productRepository = AppDataSource.getRepository(Product);

  const category = await categoryRepository.findOne({ where: { id: id } });

  if (!category) {
    throw new Error("Categoria não encontrada.");
  }

  const products = await productRepository.find({
    where: { category: { id: id } },
  });

  const updateProducts = products.map((product) => {
    product.category = null;
    return productRepository.save(product);
  });

  await Promise.all(updateProducts);

  // Deleta a categoria
  await categoryRepository.delete(id);
};

export default deleteCategoryService;

/*  */
