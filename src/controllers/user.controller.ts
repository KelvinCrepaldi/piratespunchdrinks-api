import createUserService from "../services/user/createUser.service";
import { Request, Response } from "express";
import { handleError, AppError } from "../errors/appErrors";
import { IUserRequest } from "../interfaces/user.interfaces";

const createUserController = async (req: Request, res: Response) => {
  try {
    const { email, name, password }: IUserRequest = req.body;
    const user = await createUserService({
      email,
      name,
      password,
    });
    return res.status(200).json(user);
  } catch (error) {
    if (error instanceof AppError) {
      handleError(error, res);
    }
  }
};

const listUserController = () => {};

const deleteUserController = () => {};

export { createUserController };
