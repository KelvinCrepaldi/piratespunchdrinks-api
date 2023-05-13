import {
  ICharacteristicRequest,
  ICharacteristic,
} from "../../interfaces/characteristic.interface";
import { Characteristic } from "../../entities/characteristic.entity";
import { Product } from "../../entities/product.entity";
import AppDataSource from "../../data-source";
import { AppError } from "../../errors/appErrors";
export const createCharacteristicService = async (
  { text }: ICharacteristicRequest,
  id: string
): Promise<ICharacteristic> => {
  const characteristicRepository = AppDataSource.getRepository(Characteristic);
  const productRepository = AppDataSource.getRepository(Product);

  const product = await productRepository.findOne({ where: { id: id } });

  if (!product) {
    throw new AppError(403, "Product not found");
  }

  const characteristic = characteristicRepository.create({
    text: text,
    product: product,
  });

  characteristicRepository.save(characteristic);

  return characteristic;
};

export default createCharacteristicService;
