import { Request, Response } from "express";
import { AppError, handleError } from "../errors/appErrors";
import listOrderService from "../services/order/listOrders.service";
import { IOrderRequest } from "../interfaces/order.interfaces";
import createOrderService from "../services/order/createOrder.service";
import { listUserOrdersService } from "../services/order/listUserOrders.service";

const listOrderController = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;
    const order = await listOrderService(userId);
    return res.status(200).json(order);
  } catch (err) {
    if (err instanceof AppError) {
      handleError(err, res);
    }
  }
};

const createOrderController = async (req: Request, res: Response) => {
  try {
    const { products, userId }: IOrderRequest = req.body;
    const order = await createOrderService({ products, userId });
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

export { listOrderController, createOrderController, listUserOrdersController };
