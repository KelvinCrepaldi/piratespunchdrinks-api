import { Request, Response } from "express";
import { AppError, handleError } from "../errors/appErrors";
import authService from "../services/user/authentication.service";
import { IAuthenticationRequest } from "../interfaces/authentication.interface";

const authController = async (req: Request, res: Response) => {
  try {
    const { email, password }: IAuthenticationRequest = req.body;
    const authentication = await authService({ email, password });

    return res.status(200).json(authentication);
  } catch (err) {
    if (err instanceof AppError) {
      handleError(err, res);
    }
  }
};

export default authController;
