import { Router } from "express";
import {
  createCreditCardController,
  deleteCreditCardController,
  listCreditCardsController,
} from "../controllers/creditCard.controller";
import verifyAuthTokenMiddleware from "../middleware/verifyAuthToken.middleware";

const creditCardRoutes = Router();

creditCardRoutes.post(
  "/",
  verifyAuthTokenMiddleware,
  createCreditCardController
);

creditCardRoutes.get("/", verifyAuthTokenMiddleware, listCreditCardsController);

creditCardRoutes.delete(
  "/:creditCardId",
  verifyAuthTokenMiddleware,
  deleteCreditCardController
);

export default creditCardRoutes;
