import { Router } from "express";
import {
  createAddressController,
  deleteAddressController,
  listUserAddressesController,
  updateAddressController,
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
addressRoutes.patch(
  "/:addressId",
  verifyAuthTokenMiddleware,
  updateAddressController
);

export default addressRoutes;
