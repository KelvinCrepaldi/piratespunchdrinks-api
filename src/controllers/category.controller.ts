import { Request, Response } from "express";
import { handleError, AppError } from "../errors/appErrors";
import { ICategoryRequest } from "../interfaces/category.interface";
import createCategoryService from "../services/category/createCategory.service";

const createCategoryController = async (req: Request, res: Response) => {
  try {
    const { name }: ICategoryRequest = req.body;
    const category = await createCategoryService({ name });
    return res.status(200).json(category);
  } catch (error) {
    if (error instanceof AppError) {
      handleError(error, res);
    }
  }
};

export { createCategoryController };
