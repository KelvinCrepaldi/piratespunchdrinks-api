import { Router } from "express";
import { createProductController } from "../controllers/product.controller";
import { createProductAdditionalInfoController } from "../controllers/product.controller";
import { createProductCharacteristicController } from "../controllers/product.controller";
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

export default productRoutes;
