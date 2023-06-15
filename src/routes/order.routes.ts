import { Router } from "express";
import {
  createOrderController,
  listOrdersController,
} from "../controllers/order.controller";

const orderRoutes = Router();

orderRoutes.get("/:userId", listOrdersController);
orderRoutes.post("/", createOrderController);

export default orderRoutes;
