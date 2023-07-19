import { Router } from "express";
import {
  createPromotionController,
  listPromotionsController,
} from "../controllers/promotion.controller";

const promotionRoutes = Router();

promotionRoutes.post("/", createPromotionController);
promotionRoutes.get("/", listPromotionsController);

export default promotionRoutes;
