import AppDataSource from "../../data-source";
import { Address } from "../../entities/address.entity";
import { User } from "../../entities/user.entity";
import { AppError } from "../../errors/appErrors";
import { IListUserAddresses } from "../../interfaces/address.interfaces";

const listUserAddressesService = async ({
  id,
}: IListUserAddresses): Promise<Address[]> => {
  const addressRepository = AppDataSource.getRepository(Address);

  const address = await addressRepository.find({
    where: { user: { id: id }, active: true },
  });

  if (!address) {
    throw new AppError(404, "User not found");
  }

  return address;
};

export default listUserAddressesService;
