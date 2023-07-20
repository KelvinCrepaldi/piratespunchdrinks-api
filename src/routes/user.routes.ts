import { Router } from "express";
import {
  createUserController,
  deleteUserController,
} from "../controllers/user.controller";
import verifyAuthTokenMiddleware from "../middleware/verifyAuthToken.middleware";

const userRoutes = Router();
userRoutes.post("/", createUserController);
userRoutes.delete("/", verifyAuthTokenMiddleware, deleteUserController);

export default userRoutes;
