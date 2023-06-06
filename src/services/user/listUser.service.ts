import AppDataSource from "../../data-source";
import {
  IListUserRequest,
  IUserResponse,
} from "../../interfaces/user.interfaces";
import { AppError } from "../../errors/appErrors";
import { User } from "../../entities/user.entity";
import { IAuthenticationRequest } from "../../interfaces/authentication.interface";

const listUserService = async ({
  email,
}: IListUserRequest): Promise<IAuthenticationRequest> => {
  const usersRepository = AppDataSource.getRepository(User);

  const user = await usersRepository.findOne({ where: { email: email } });

  if (!user) {
    throw new AppError(403, "Invalid credentials, email not found.");
  }

  return user;
};

export default listUserService;
