import { Request, Response } from "express";
import { AppError, handleError } from "../errors/appErrors";
import createOrderService from "../services/order/createOrder.service";
import { listUserOrdersService } from "../services/order/listUserOrders.service";

const createOrderController = async (req: Request, res: Response) => {
  try {
    const { products, userId, addressId, creditCardId } = req.body;
    const order = await createOrderService({
      products,
      userId,
      addressId,
      creditCardId,
    });
    return res.status(200).json(order);
  } catch (err) {
    if (err instanceof AppError) {
      handleError(err, res);
    }
  }
};

const listUserOrdersController = async (req: Request, res: Response) => {
  try {
    const { id } = req.user;

    const orders = await listUserOrdersService({ id });

    res.status(200).json(orders);
  } catch (err) {
    if (err instanceof AppError) {
      handleError(err, res);
    }
  }
};

export { createOrderController, listUserOrdersController };
