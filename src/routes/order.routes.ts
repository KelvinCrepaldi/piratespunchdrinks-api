import { Router } from "express";
import { listOrdersController } from "../controllers/order.controller";

const orderRoutes = Router();

orderRoutes.get("/:userId", listOrdersController);

export default orderRoutes;
