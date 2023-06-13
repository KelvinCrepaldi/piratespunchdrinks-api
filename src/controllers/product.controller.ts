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

import seedProductsService from "../services/product/seedProducts.service";

const createProductController = async (req: Request, res: Response) => {
  try {
    const {
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
    const seed = seedProductsService();
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
    const category = String(req.query.category);

    if (category !== "undefined") {
      const product = await listProductsByCategoryService({ category });
      return res.status(200).json(product);
    } else {
      const product = await listProductsService();
      return res.status(200).json(product);
    }
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
