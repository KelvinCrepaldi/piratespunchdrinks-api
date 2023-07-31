import AppDataSource from "../../data-source";
import { CreditCard } from "../../entities/creditCard.entity";
import { IListCreditCardsRequest } from "../../interfaces/creditCard.interfaces";

const listCreditCardsService = async ({
  userId,
}: IListCreditCardsRequest): Promise<CreditCard[]> => {
  const creditCardsRepository = AppDataSource.getRepository(CreditCard);

  const creditCards = await creditCardsRepository.find({
    where: { user: { id: userId }, active: true },
  });

  return creditCards;
};

export default listCreditCardsService;
