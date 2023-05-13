import AppDataSource from "../../data-source";
import {
  IAditionalInfo,
  IAditionalInfoRequest,
} from "../../interfaces/aditionalInfo.interface";
import { AditionalInfo } from "../../entities/aditionalInfo.entity";
import { Product } from "../../entities/product.entity";
import { AppError } from "../../errors/appErrors";

const createAdditionalInfoService = async (
  { text }: IAditionalInfoRequest,
  id: string
): Promise<IAditionalInfo> => {
  const aditionalInfoRepository = AppDataSource.getRepository(AditionalInfo);
  const productRepository = AppDataSource.getRepository(Product);

  const product = await productRepository.findOne({ where: { id: id } });
  if (!product) {
    throw new AppError(403, "Product not found.");
  }

  const aditionalInfo = aditionalInfoRepository.create({
    text: text,
    product: product,
  });

  await aditionalInfoRepository.save(aditionalInfo);

  return aditionalInfo;
};

export default createAdditionalInfoService;
