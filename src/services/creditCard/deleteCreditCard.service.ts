import AppDataSource from "../../data-source";
import { CreditCard } from "../../entities/creditCard.entity";
import { AppError } from "../../errors/appErrors";
import { IDeleteCreditCardRequest } from "../../interfaces/creditCard.interfaces";

const deleteCreditCardService = async ({
  userId,
  creditCardId,
}: IDeleteCreditCardRequest) => {
  const creditCardRepository = AppDataSource.getRepository(CreditCard);

  const creditCard = await creditCardRepository.findOne({
    where: { id: creditCardId, user: { id: userId } },
  });

  if (!creditCard) {
    throw new AppError(404, "Credit Card not found.");
  }

  creditCardRepository.delete(creditCard);

  return { message: "credit card deleted!" };
};

export default deleteCreditCardService;
