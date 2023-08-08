import bcrypt from "bcryptjs";
import AppDataSource from "../../data-source";

import { AppError } from "../../errors/appErrors";
import { IUserRequest } from "../../interfaces/user.interfaces";
import { User } from "../../entities/user.entity";
import { CreditCard } from "../../entities/creditCard.entity";
import { Address } from "../../entities/address.entity";
import jwt from "jsonwebtoken";

const createUserService = async ({
  email,
  name,
  password,
}: IUserRequest): Promise<any> => {
  const userRepository = AppDataSource.getRepository(User);

  const findUser = await userRepository.findOne({
    where: { email: email },
  });

  if (findUser) {
    throw new AppError(409, "Email already exists.");
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = userRepository.create({
    email,
    name,
    password: hashedPassword,
    adm: false,
    active: true,
  });

  await userRepository.save(user);

  const token = jwt.sign(
    { id: user.id, adm: user.adm },
    process.env.SECRET_KEY as string,
    {
      expiresIn: process.env.TOKEN_EXPIRES_TIME,
    }
  );

  return { token, user };
};

export default createUserService;
