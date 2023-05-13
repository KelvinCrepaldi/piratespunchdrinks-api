import { Request, Response } from "express";
import { AppError, handleError } from "../errors/appErrors";

const createProductController = (req: Request, res: Response) => {
  try {
    const {} = req.body;
    return res.status(200).json();
  } catch (error) {
    if (error instanceof AppError) {
      handleError(error, res);
    }
  }
};

export { createProductController };
