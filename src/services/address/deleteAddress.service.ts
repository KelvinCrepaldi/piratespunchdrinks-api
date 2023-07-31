import AppDataSource from "../../data-source";

import { Address } from "../../entities/address.entity";
import { AppError } from "../../errors/appErrors";
import { IDeleteAddressRequest } from "../../interfaces/address.interfaces";

const deleteAddressService = async ({ id }: IDeleteAddressRequest) => {
  const addressRepository = AppDataSource.getRepository(Address);

  const address = await addressRepository.findOne({ where: { id: id } });

  if (!address) {
    throw new AppError(404, "Address not found");
  }

  address.active = false;

  await addressRepository.save(address);

  return { message: "Address deleted" };
};

export default deleteAddressService;
