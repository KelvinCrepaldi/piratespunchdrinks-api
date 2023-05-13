import bcrypt from "bcryptjs";
import AppDataSource from "../../data-source";

import { AppError } from "../../errors/appErrors";
import { IUserRequest } from "../../interfaces/user.interfaces";
import { User } from "../../entities/user.entity";
import { CreditCard } from "../../entities/creditCard.entity";
import { Address } from "../../entities/address.entity";

const createUserService = async ({
  address,
  creditCard,
  email,
  name,
  password,
}: IUserRequest) => {
  const userRepository = AppDataSource.getRepository(User);
  const creditCardRepository = AppDataSource.getRepository(CreditCard);
  const AddressRepository = AppDataSource.getRepository(Address);

  const findUser = await userRepository.findOne({
    where: { email: email },
  });

  if (findUser) {
    throw new AppError(409, "Email already exists.");
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const newAddress = AddressRepository.create({
    address: address.address,
    cep: address.cep,
    city: address.city,
    complement: address.complement,
    country: address.country,
    number: address.number,
    state: address.state,
  });
  await AddressRepository.save(newAddress);

  const newCard = creditCardRepository.create({
    number: creditCard.number,
    validation_data: creditCard.validationData,
  });
  await creditCardRepository.save(newCard);

  const user = userRepository.create({
    email,
    name,
    password: hashedPassword,
    adm: false,
    active: true,
  });

  await userRepository.save(user);

  return user;
};

export default createUserService;
