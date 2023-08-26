import { Request, Response } from "express";
import { AppError, handleError } from "../errors/appErrors";
import createCreditCardService from "../services/creditCard/createCreditCard.service";
import listCreditCardsService from "../services/creditCard/listCreditCards.service";
import deleteCreditCardService from "../services/creditCard/deleteCreditCard.service";
import updateCreditCardService from "../services/creditCard/updateCreditCard.service";

const createCreditCardController = async (req: Request, res: Response) => {
  try {
    const { expiration_date, name, number } = req.body;
    const id = req.user.id;

    const creditCard = await createCreditCardService({
      userId: id,
      expiration_date,
      name,
      number,
    });

    res.status(200).json(creditCard);
  } catch (err) {
    if (err instanceof AppError) {
      handleError(err, res);
    }
  }
};

const listCreditCardsController = async (req: Request, res: Response) => {
  try {
    const id = req.user.id;

    const creditCard = await listCreditCardsService({ userId: id });

    res.status(200).json(creditCard);
  } catch (err) {
    if (err instanceof AppError) {
      handleError(err, res);
    }
  }
};

const deleteCreditCardController = async (req: Request, res: Response) => {
  try {
    const id = req.user.id;
    const { creditCardId } = req.params;

    const creditCard = await deleteCreditCardService({
      userId: id,
      creditCardId,
    });

    res.status(200).json(creditCard);
  } catch (err) {
    if (err instanceof AppError) {
      handleError(err, res);
    }
  }
};

const updateCreditCardController = (req: Request, res: Response) => {
  try {
    const { name, number, expiration_date } = req.body;
    const userId = req.user.id;
    const { creditCardId } = req.params;

    const creditCard = updateCreditCardService({
      name,
      number,
      expiration_date,
      userId,
      creditCardId,
    });

    return res.status(200).json(creditCard);
  } catch (error) {
    if (error instanceof AppError) {
      handleError(error, res);
    }
  }
};

export {
  createCreditCardController,
  listCreditCardsController,
  deleteCreditCardController,
  updateCreditCardController,
};
