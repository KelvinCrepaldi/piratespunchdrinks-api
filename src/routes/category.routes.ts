import { Router } from "express";
import { createCategoryController } from "../controllers/category.controller";

const categoryRoutes = Router();

categoryRoutes.post("/", createCategoryController);

export default categoryRoutes;
