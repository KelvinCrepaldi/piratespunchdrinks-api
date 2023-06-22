import AppDataSource from "../../data-source";
import { Address } from "../../entities/address.entity";
import { User } from "../../entities/user.entity";
import { AppError } from "../../errors/appErrors";
import { IListUserAddresses } from "../../interfaces/address.interfaces";

const listUserAddressesService = async ({
  id,
}: IListUserAddresses): Promise<Address[]> => {
  const userRepository = AppDataSource.getRepository(User);

  const user = await userRepository.findOne({
    where: { id: id },
    relations: ["address"],
  });

  if (!user) {
    throw new AppError(404, "User not found");
  }

  return user.address;
};

export default listUserAddressesService;
