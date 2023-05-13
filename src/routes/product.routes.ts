import { Router } from "express";
import { createProductController } from "../controllers/product.controller";

const productRoutes = Router();

productRoutes.post("", createProductController);

export default productRoutes;
