import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entity";
import {
  IAuthenticationRequest,
  IAuthenticationResponse,
} from "../../interfaces/authentication.interface";
import { AppError } from "../../errors/appErrors";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import "dotenv/config";

const authService = async ({
  email,
  password,
}: IAuthenticationRequest): Promise<IAuthenticationResponse> => {
  const usersRepository = AppDataSource.getRepository(User);

  const user = await usersRepository.findOne({
    where: { email: email },
  });

  if (!user) {
    throw new AppError(403, "Invalid credentials, email not found.");
  }

  const passwordMatch = await bcrypt.compare(password, user.password);

  if (!passwordMatch) {
    throw new AppError(403, "Invalid credentials, password not match.");
  }

  const token = jwt.sign(
    { id: user.id, adm: user.adm },
    process.env.SECRET_KEY as string,
    {
      expiresIn: process.env.TOKEN_EXPIRES_TIME,
    }
  );

  return { token, user };
};

export default authService;
