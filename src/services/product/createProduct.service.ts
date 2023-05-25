import AppDataSource from "../../data-source";
import { IProductRequest } from "../../interfaces/product.interfaces";
import { Product } from "../../entities/product.entity";
import { Category } from "../../entities/categories.entity";
import { AppError } from "../../errors/appErrors";
import { AditionalInfo } from "../../entities/aditionalInfo.entity";
import { Characteristic } from "../../entities/characteristic.entity";
import { ICharacteristicRequest } from "../../interfaces/characteristic.interface";
import { IAdditionalInfoRequest } from "../../interfaces/aditionalInfo.interface";
const createProductService = async ({
  apresentation,
  category,
  name,
  price,
  amount,
  img_url,
  additional_info,
  characteristic,
}: IProductRequest) => {
  const productRepository = AppDataSource.getRepository(Product);
  const categoryRepository = AppDataSource.getRepository(Category);
  const aditionalInfoRepository = AppDataSource.getRepository(AditionalInfo);
  const characteristicRepository = AppDataSource.getRepository(Characteristic);

  const findCategory = await categoryRepository.findOne({
    where: { id: category },
  });

  if (!findCategory) {
    throw new AppError(403, "Category not found");
  }

  const product = productRepository.create({
    active: true,
    name: name,
    price: price,
    amount: amount,
    img_url: img_url,
    apresentation: apresentation,
    category: findCategory,
  });
  await productRepository.save(product);

  characteristic?.forEach(async (element: ICharacteristicRequest) => {
    const newChara = characteristicRepository.create({
      text: element.text,
      product: product,
    });
    await characteristicRepository.save(newChara);
  });

  additional_info?.forEach(async (element: IAdditionalInfoRequest) => {
    const newInfo = aditionalInfoRepository.create({
      text: element.text,
      product: product,
    });
    await aditionalInfoRepository.save(newInfo);
  });

  return product;
};

export default createProductService;
