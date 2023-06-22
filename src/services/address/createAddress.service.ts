import AppDataSource from "../../data-source";

import {
  IAddressRequest,
  IAddressResponse,
} from "../../interfaces/address.interfaces";
import { Address } from "../../entities/address.entity";
import { User } from "../../entities/user.entity";
import { AppError } from "../../errors/appErrors";

const createAddressService = async ({
  address,
  cep,
  city,
  complement,
  country,
  number,
  state,
  userId,
}: IAddressRequest): Promise<Address> => {
  const userRepository = AppDataSource.getRepository(User);
  const addressRepository = AppDataSource.getRepository(Address);

  const user = await userRepository.findOne({ where: { id: userId } });

  if (!user) {
    throw new AppError(403, "User not found.");
  }

  const newAddress = new Address();

  newAddress.address = address;
  newAddress.cep = cep;
  newAddress.city = city;
  newAddress.complement = complement;
  newAddress.country = country;
  newAddress.number = number;
  newAddress.state = state;
  newAddress.user = user;

  await addressRepository.save(newAddress);

  const findAddress = await addressRepository.findOne({
    where: { user: { id: user.id } },
    relations: ["user"],
  });

  if (!findAddress) {
    throw new AppError(403, "Address not found.");
  }

  return findAddress;
};

export default createAddressService;
