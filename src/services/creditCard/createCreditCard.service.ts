import {
  ICreateCreditCardRequest,
  ICreateCreditCardResponse,
} from "../../interfaces/creditCard.interfaces";
import AppDataSource from "../../data-source";
import { CreditCard } from "../../entities/creditCard.entity";
import { User } from "../../entities/user.entity";
import { AppError } from "../../errors/appErrors";
import { v4 as uuid } from "uuid";

const createCreditCardService = async ({
  expiration_date,
  name,
  number,
  userId,
}: ICreateCreditCardRequest): Promise<ICreateCreditCardResponse> => {
  const userRepository = AppDataSource.getRepository(User);
  const creditCardRepository = AppDataSource.getRepository(CreditCard);

  const cardAlreadyExist = await creditCardRepository.findOne({
    where: { number: number },
  });

  if (cardAlreadyExist) {
    throw new AppError(401, "Credit Card number already exists!");
  }

  const user = await userRepository.findOne({ where: { id: userId } });

  if (!user) {
    throw new AppError(403, "User not found");
  }

  const creditCard = new CreditCard();
  creditCard.reference = uuid();
  creditCard.active = true;
  creditCard.expiration_date = expiration_date;
  creditCard.name = name;
  creditCard.number = number;
  creditCard.user = user;

  await creditCardRepository.save(creditCard);

  const creditCardResponse: ICreateCreditCardResponse = {
    id: creditCard.id,
    expiration_date: expiration_date,
    name: name,
    number: number,
    userId: creditCard.user.id,
  };

  return creditCardResponse;
};
export default createCreditCardService;
