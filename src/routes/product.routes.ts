import { Router } from "express";
import {
  createProductController,
  listProductsController,
  createProductAdditionalInfoController,
  createProductCharacteristicController,
} from "../controllers/product.controller";

const productRoutes = Router();

productRoutes.post("", createProductController);
productRoutes.post(
  "/:id/additionalinfo",
  createProductAdditionalInfoController
);
productRoutes.post(
  "/:id/characteristic",
  createProductCharacteristicController
);

productRoutes.get("/", listProductsController);

export default productRoutes;
