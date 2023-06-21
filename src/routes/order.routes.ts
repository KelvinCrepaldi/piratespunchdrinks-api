import { Router } from "express";
import {
  createOrderController,
  listOrderController,
  listUserOrdersController,
} from "../controllers/order.controller";
import verifyAuthTokenMiddleware from "../middleware/verifyAuthToken.middleware";

const orderRoutes = Router();

orderRoutes.get("/", verifyAuthTokenMiddleware, listUserOrdersController);
orderRoutes.post("/", verifyAuthTokenMiddleware, createOrderController);

export default orderRoutes;
