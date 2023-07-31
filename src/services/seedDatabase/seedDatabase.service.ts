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
import { AppError } from "../../errors/appErrors";
import { Promotion } from "../../entities/promotion.entity";

export const seedDatabaseService = async () => {
  const productRepository = AppDataSource.getRepository(Product);
  const aditionalInfoRepository = AppDataSource.getRepository(AditionalInfo);
  const characteristicRepository = AppDataSource.getRepository(Characteristic);
  const categoryRepository = AppDataSource.getRepository(Category);
  const promotionRepository = AppDataSource.getRepository(Promotion);

  await Promise.all(
    categorySeed.map(async (category: ICategoryRequest) => {
      const newCategory = await categoryRepository.create({
        name: category.name,
      });
      console.log(newCategory);
      await categoryRepository.save(newCategory);
    })
  );

  await Promise.all(
    productsSeed.map(async (product: IProductRequest) => {
      const findCategory = await categoryRepository.findOne({
        where: { name: product.category },
      });

      if (!findCategory) {
        throw new AppError(403, "category not found");
      }

      const newProduct = productRepository.create({
        code: product.code,
        active: true,
        name: product.name,
        price: product.price,
        amount: product.amount,
        img_url: product.img_url,
        apresentation: product.apresentation,
        category: { name: findCategory?.name, id: findCategory?.id },
      });
      await productRepository.save(newProduct);

      product.characteristic?.forEach(
        async (element: ICharacteristicRequest) => {
          const newChara = characteristicRepository.create({
            text: element.text,
            product: newProduct,
          });
          await characteristicRepository.save(newChara);
        }
      );

      product.additional_info?.forEach(
        async (element: IAdditionalInfoRequest) => {
          const newInfo = aditionalInfoRepository.create({
            text: element.text,
            product: newProduct,
          });
          await aditionalInfoRepository.save(newInfo);
        }
      );
    })
  );

  const products = await productRepository.find();
  const sliceProducts = products.slice(0, 8);

  const promotion = new Promotion();
  const finalDate = new Date("2024-07-31 04:09:10.533");

  promotion.type = "percent";
  promotion.value = 10;
  promotion.finalDate = finalDate;
  promotion.initialDate = new Date();

  promotion.products = sliceProducts;

  await promotionRepository.save(promotion);

  return { message: "database populated!" };
};

export default seedDatabaseService;
