import { Router } from "express";
import {
  createCategoryController,
  listCategoryController,
  deleteCategoryController,
} from "../controllers/category.controller";

const categoryRoutes = Router();

categoryRoutes.post("/", createCategoryController);
categoryRoutes.get("/", listCategoryController);
categoryRoutes.delete("/:id", deleteCategoryController);

export default categoryRoutes;
