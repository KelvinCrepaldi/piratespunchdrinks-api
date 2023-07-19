import AppDataSource from "../../data-source";
import { Promotion } from "../../entities/promotion.entity";

const listPromotionService = async (): Promise<Promotion[]> => {
  const promotionRepository = AppDataSource.getRepository(Promotion);

  const promotions = await promotionRepository.find({
    relations: ["products"],
  });

  return promotions;
};

export default listPromotionService;
