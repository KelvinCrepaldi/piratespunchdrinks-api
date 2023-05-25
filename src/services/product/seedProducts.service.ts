import AppDataSource from "../../data-source";
import { Product } from "../../entities/product.entity";
import { categorySeed, productsSeed } from "../../database/seed";
import { ICategoryRequest } from "../../interfaces/category.interface";
import { IProductRequest } from "../../interfaces/product.interfaces";
import { IAdditionalInfoRequest } from "../../interfaces/aditionalInfo.interface";
import { ICharacteristicRequest } from "../../interfaces/characteristic.interface";
import { AditionalInfo } from "../../entities/aditionalInfo.entity";
import { Characteristic } from "../../entities/characteristic.entity";
import { Category } from "../../entities/categories.entity";
export const seedProductsService = () => {
  const productRepository = AppDataSource.getRepository(Product);
  const aditionalInfoRepository = AppDataSource.getRepository(AditionalInfo);
  const characteristicRepository = AppDataSource.getRepository(Characteristic);
  const categoryRepository = AppDataSource.getRepository(Category);

  categorySeed.forEach(async (category: ICategoryRequest) => {
    const newCategory = categoryRepository.create(category);

    await categoryRepository.save(newCategory);
  });

  productsSeed.forEach(async (product: IProductRequest) => {
    const findCategory = await categoryRepository.findOne({
      where: { name: product.category },
    });

    const newProduct = productRepository.create({
      active: true,
      name: product.name,
      price: product.price,
      amount: product.amount,
      img_url: product.img_url,
      apresentation: product.apresentation,
      category: findCategory,
    });
    await productRepository.save(newProduct);

    product.characteristic?.forEach(async (element: ICharacteristicRequest) => {
      const newChara = characteristicRepository.create({
        text: element.text,
        product: newProduct,
      });
      await characteristicRepository.save(newChara);
    });

    product.additional_info?.forEach(
      async (element: IAdditionalInfoRequest) => {
        const newInfo = aditionalInfoRepository.create({
          text: element.text,
          product: newProduct,
        });
        await aditionalInfoRepository.save(newInfo);
      }
    );
  });

  return { message: "database populated!" };
};

export default seedProductsService;
