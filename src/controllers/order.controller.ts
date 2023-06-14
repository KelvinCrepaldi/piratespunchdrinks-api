import { Request, Response } from "express";
import { AppError, handleError } from "../errors/appErrors";
import listOrdersService from "../services/order/listOrders.service";

const listOrdersController = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;
    const order = await listOrdersService(userId);
    return res.status(200).json(order);
  } catch (err) {
    if (err instanceof AppError) {
      handleError(err, res);
    }
  }
};

export { listOrdersController };
