import { Request, Response } from "express";
import { handleError, AppError } from "../errors/appErrors";
import { ICategoryRequest } from "../interfaces/category.interface";
import createCategoryService from "../services/category/createCategory.service";
import listCategoryService from "../services/category/listCategory.service";
import deleteCategoryService from "../services/category/deleteCategory.service";

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

const listCategoryController = async (req: Request, res: Response) => {
  try {
    const category = await listCategoryService();
    return res.status(200).json(category);
  } catch (error) {
    if (error instanceof AppError) {
      handleError(error, res);
    }
  }
};

const deleteCategoryController = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await deleteCategoryService({ id });
    return res.status(200).json();
  } catch (error) {
    if (error instanceof AppError) {
      handleError(error, res);
    }
  }
};

export {
  createCategoryController,
  listCategoryController,
  deleteCategoryController,
};
