import AppDataSource from "../../data-source";
import { Category } from "../../entities/categories.entity";
import { Product } from "../../entities/product.entity";
import { ICategoryWithProductCount } from "../../interfaces/category.interface";

const listCategoryService = async (): Promise<ICategoryWithProductCount[]> => {
  const categoryRepository = AppDataSource.getRepository(Category);
  const productsRepository = AppDataSource.getRepository(Product);
  const categories = await categoryRepository.find({
    relations: ["products"],
    order: { name: "ASC" },
  });
  const products = await productsRepository.count();

  const categoriesWithProductCount = categories.map((category) => ({
    id: category.id,
    name: category.name,
    productCount: category.products.length,
  }));

  return categoriesWithProductCount;
};

export default listCategoryService;

/*  */
