import { Router } from "express";
import {
  createOrderController,
  listOrderController,
  listUserOrdersController,
} from "../controllers/order.controller";

const orderRoutes = Router();

orderRoutes.get("/:userId", listUserOrdersController);
orderRoutes.post("/", createOrderController);

export default orderRoutes;
