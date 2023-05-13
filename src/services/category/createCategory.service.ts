import {
  ICategory,
  ICategoryRequest,
} from "../../interfaces/category.interface";
import AppDataSource from "../../data-source";
import { Category } from "../../entities/categories.entity";

const createCategoryService = async ({
  name,
}: ICategoryRequest): Promise<ICategory> => {
  const categoryRepository = AppDataSource.getRepository(Category);
  const category = categoryRepository.create({ name });
  await categoryRepository.save(category);
  return category;
};

export default createCategoryService;
