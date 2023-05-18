import { Router } from "express";
import {
  createCategoryController,
  listCategoryController,
} from "../controllers/category.controller";

const categoryRoutes = Router();

categoryRoutes.post("/", createCategoryController);
categoryRoutes.get("/", listCategoryController);

export default categoryRoutes;
