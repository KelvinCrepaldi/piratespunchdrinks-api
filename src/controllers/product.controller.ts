import { Request, Response } from "express";
import { AppError, handleError } from "../errors/appErrors";
import { IProductRequest } from "../interfaces/product.interfaces";
import { ICharacteristicRequest } from "../interfaces/characteristic.interface";
import { IAdditionalInfoRequest } from "../interfaces/aditionalInfo.interface";

import createProductService from "../services/product/createProduct.service";
import createCharacteristicService from "../services/product/createCharacteristic.service";
import createAdditionalInfoService from "../services/product/createAdditionalInfo.service";
import listProductsService from "../services/product/listProducts.service";
import listProductsByCategoryService from "../services/product/listProductsbyCategory.service";
import seedDatabaseService from "../services/seedDatabase/seedDatabase.service";

const createProductController = async (req: Request, res: Response) => {
  try {
    const {
      code,
      active,
      apresentation,
      category,
      name,
      price,
      amount,
      img_url,
      additional_info,
      characteristic,
    }: IProductRequest = req.body;

    const product = await createProductService({
      code,
      active,
      apresentation,
      category,
      name,
      price,
      amount,
      img_url,
      additional_info,
      characteristic,
    });

    return res.status(200).json(product);
  } catch (error) {
    if (error instanceof AppError) {
      handleError(error, res);
    }
  }
};

const seedProductsController = async (req: Request, res: Response) => {
  try {
    const seed = seedDatabaseService();
    return res.status(200).json(seed);
  } catch (error) {
    if (error instanceof AppError) {
      handleError(error, res);
    }
  }
};

const createProductAdditionalInfoController = async (
  req: Request,
  res: Response
) => {
  try {
    const { text }: IAdditionalInfoRequest = req.body;
    const { id } = req.params;

    const aditionalInfo = await createAdditionalInfoService({ text }, id);
    return res.status(200).json(aditionalInfo);
  } catch (error) {
    if (error instanceof AppError) {
      handleError(error, res);
    }
  }
};

const createProductCharacteristicController = async (
  req: Request,
  res: Response
) => {
  try {
    const { text }: ICharacteristicRequest = req.body;
    const { id } = req.params;

    const characteristic = await createCharacteristicService({ text }, id);

    res.status(200).json(characteristic);
    return res.status(200).json();
  } catch (error) {
    if (error instanceof AppError) {
      handleError(error, res);
    }
  }
};

const listProductsController = async (req: Request, res: Response) => {
  try {
    var search = req.query.search as string;
    var category = req.query.category as string;
    var take = req.query.take as string;
    var page = req.query.page as string;

    const product = await listProductsService({ search, category, take, page });
    return res.status(200).json(product);
  } catch (error) {
    if (error instanceof AppError) {
      handleError(error, res);
    }
  }
};

export {
  createProductController,
  createProductAdditionalInfoController,
  createProductCharacteristicController,
  listProductsController,
  seedProductsController,
};
