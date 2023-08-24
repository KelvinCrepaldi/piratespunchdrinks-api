import { Router } from "express";
import {
  createProductController,
  listProductsController,
  createProductAdditionalInfoController,
  createProductCharacteristicController,
  seedProductsController,
} from "../controllers/product.controller";

const productRoutes = Router();

productRoutes.post("/", createProductController);
productRoutes.post(
  "/:id/additionalinfo",
  createProductAdditionalInfoController
);
productRoutes.post(
  "/:id/characteristic",
  createProductCharacteristicController
);

productRoutes.get(
  "/:serach?/:page?/:take?/:category?/:name?/:date?/:price?",
  listProductsController
);

productRoutes.post("/seedDatabase", seedProductsController);

export default productRoutes;
