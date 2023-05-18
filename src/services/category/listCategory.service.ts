import AppDataSource from "../../data-source";
import { Category } from "../../entities/categories.entity";
import { ICategoryWithProductCount } from "../../interfaces/category.interface";

const listCategoryService = async (): Promise<ICategoryWithProductCount[]> => {
  const categoryRepository = AppDataSource.getRepository(Category);
  const categories = await categoryRepository.find({ relations: ["products"] });

  const categoriesWithProductCount = categories.map((category) => ({
    id: category.id,
    name: category.name,
    productCount: category.products.length,
  }));

  return categoriesWithProductCount;
};

export default listCategoryService;

/*  */
