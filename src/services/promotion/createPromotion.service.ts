import AppDataSource from "../../data-source";
import { IPromotionRequest } from "../../interfaces/promotion.interface";
import { Promotion } from "../../entities/promotion.entity";
import { Product } from "../../entities/product.entity";
import { In } from "typeorm";
const createPromotionService = async ({
  finalDate,
  initialDate,
  products,
  type,
  value,
}: IPromotionRequest): Promise<Promotion> => {
  const promotionRepository = AppDataSource.getRepository(Promotion);
  const productRepository = AppDataSource.getRepository(Product);

  const promotion = new Promotion();

  promotion.type = type;
  promotion.value = value;
  promotion.finalDate = finalDate;
  promotion.initialDate = initialDate;

  const productsList = await productRepository.findBy({ id: In(products) });

  promotion.products = productsList;

  const newPromotion = promotionRepository.save(promotion);

  return newPromotion;
};

export default createPromotionService;
