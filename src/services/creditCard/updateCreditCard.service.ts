import AppDataSource from "../../data-source";
import { CreditCard } from "../../entities/creditCard.entity";
import { User } from "../../entities/user.entity";
import { AppError } from "../../errors/appErrors";
import {
  IUpdateCreditCardRequest,
  IUpdateCreditCardResponse,
} from "../../interfaces/creditCard.interfaces";

const updateCreditCardService = async ({
  creditCardId,
  userId,
  expiration_date,
  name,
  number,
}: IUpdateCreditCardRequest): Promise<IUpdateCreditCardResponse> => {
  const creditCardRepository = AppDataSource.getRepository(CreditCard);
  const userRepository = AppDataSource.getRepository(User);

  const oldCreditCard = await creditCardRepository.findOne({
    where: { id: creditCardId, user: { id: userId }, active: true },
  });

  if (!oldCreditCard) {
    throw new AppError(404, "The requested resource does not exist");
  }

  const user = await userRepository.findOne({ where: { id: userId } });

  if (!user) {
    throw new AppError(404, "The requested resource does not exist");
  }

  oldCreditCard.active = false;

  creditCardRepository.save(oldCreditCard);

  const newCreditCard = new CreditCard();
  newCreditCard.active = true;
  newCreditCard.reference = oldCreditCard.reference;
  newCreditCard.user = user;

  newCreditCard.name = name || oldCreditCard.name;
  newCreditCard.number = number || oldCreditCard.number;
  newCreditCard.expiration_date =
    expiration_date || oldCreditCard.expiration_date;

  creditCardRepository.save(newCreditCard);
  return { message: "Credit card updated" };
};
export default updateCreditCardService;
