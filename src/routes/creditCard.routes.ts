import { Router } from "express";
import {
  createCreditCardController,
  deleteCreditCardController,
  listCreditCardsController,
  updateCreditCardController,
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

creditCardRoutes.patch(
  "/:creditCardId",
  verifyAuthTokenMiddleware,
  updateCreditCardController
);

export default creditCardRoutes;
