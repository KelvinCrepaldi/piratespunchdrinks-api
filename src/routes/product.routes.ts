import { Router } from "express";
import {
  createProductController,
  listProductsController,
  createProductAdditionalInfoController,
  createProductCharacteristicController,
  seedProductsController,
  listProductController,
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

productRoutes.get("/detail/:code", listProductController);

productRoutes.get(
  "/list/:serach?:page?:take?:category?:name?:date?:price?",
  listProductsController
);

productRoutes.post("/seedDatabase", seedProductsController);

export default productRoutes;
