import AppDataSource from "../../data-source";
import { Address } from "../../entities/address.entity";
import { User } from "../../entities/user.entity";
import { AppError } from "../../errors/appErrors";
import { IUpdateAddressRequest } from "../../interfaces/address.interfaces";

const updateAddressService = async ({
  userId,
  addressId,
  address,
  cep,
  city,
  complement,
  country,
  number,
  state,
}: IUpdateAddressRequest) => {
  const AddressRepository = AppDataSource.getRepository(Address);
  const UserRepository = AppDataSource.getRepository(User);

  const oldAddress = await AddressRepository.findOne({
    where: {
      id: addressId,
      user: { id: userId },
      active: true,
    },
  });

  if (!oldAddress) {
    throw new AppError(404, "The requested resource does not exist");
  }

  const user = await UserRepository.findOne({ where: { id: userId } });

  if (!user) {
    throw new AppError(404, "The requested resource does not exist");
  }

  oldAddress.active = false; // Desativar o endereço antigo
  await AddressRepository.save(oldAddress); // Salvar a atualização

  const newAddress = new Address();
  newAddress.active = true;

  newAddress.user = user;
  newAddress.reference = oldAddress.reference;
  newAddress.address = address || oldAddress.address;
  newAddress.cep = cep || oldAddress.cep;
  newAddress.city = city || oldAddress.city;
  newAddress.complement = complement || oldAddress.complement;
  newAddress.country = country || oldAddress.country;
  newAddress.number = number || oldAddress.number;
  newAddress.state = state || oldAddress.state;

  await AddressRepository.save(newAddress);

  return { message: "Address updated" };
};

export default updateAddressService;
