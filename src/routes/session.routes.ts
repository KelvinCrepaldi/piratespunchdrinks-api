import { Router } from "express";
import authController from "../controllers/auth.controller";

const sessionRoutes = Router();

sessionRoutes.post("/", authController);

export default sessionRoutes;
