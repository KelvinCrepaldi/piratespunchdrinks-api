import { Router } from "express";
import {
  createAddressController,
  deleteAddressController,
  listUserAddressesController,
} from "../controllers/address.controller";
import verifyAuthTokenMiddleware from "../middleware/verifyAuthToken.middleware";

const addressRoutes = Router();

addressRoutes.post("/", verifyAuthTokenMiddleware, createAddressController);
addressRoutes.delete(
  "/:id",
  verifyAuthTokenMiddleware,
  deleteAddressController
);
addressRoutes.get("/", verifyAuthTokenMiddleware, listUserAddressesController);

export default addressRoutes;
