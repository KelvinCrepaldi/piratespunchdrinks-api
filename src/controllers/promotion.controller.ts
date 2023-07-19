import { AppError, handleError } from "../errors/appErrors";
import { Request, Response } from "express";

import createPromotionService from "../services/promotion/createPromotion.service";
import listPromotionService from "../services/promotion/listPromotions.service";

const createPromotionController = async (req: Request, res: Response) => {
  try {
    const { type, value, initialDate, finalDate, products } = req.body;

    const promotion = await createPromotionService({
      type,
      value,
      initialDate,
      finalDate,
      products,
    });

    return res.status(200).json(promotion);
  } catch (err) {
    if (err instanceof AppError) {
      handleError(err, res);
    }
  }
};

const listPromotionsController = async (req: Request, res: Response) => {
  try {
    const promotions = await listPromotionService();

    return res.status(200).json(promotions);
  } catch (err) {
    if (err instanceof AppError) {
      handleError(err, res);
    }
  }
};

export { createPromotionController, listPromotionsController };
