import { Request, Response } from "express";
import { AppError, handleError } from "../errors/appErrors";
import { IProductRequest } from "../interfaces/product.interfaces";
import createProductService from "../services/product/createProduct.service";

const createProductController = async (req: Request, res: Response) => {
  try {
    const { active, apresentation, categoryId, name, price }: IProductRequest =
      req.body;

    const product = await createProductService({
      active,
      apresentation,
      categoryId,
      name,
      price,
    });

    return res.status(200).json(product);
  } catch (error) {
    if (error instanceof AppError) {
      handleError(error, res);
    }
  }
};

export { createProductController };
