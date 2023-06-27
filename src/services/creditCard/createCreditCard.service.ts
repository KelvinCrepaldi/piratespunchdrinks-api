import { ICreateCreditCardRequest } from "../../interfaces/creditCard.interfaces";
import AppDataSource from "../../data-source";
import { CreditCard } from "../../entities/creditCard.entity";
import { User } from "../../entities/user.entity";
import { AppError } from "../../errors/appErrors";

const createCreditCardService = async ({
  expiration_date,
  name,
  number,
  userId,
}: ICreateCreditCardRequest): Promise<CreditCard> => {
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
  creditCard.expiration_date = expiration_date;
  creditCard.name = name;
  creditCard.number = number;
  creditCard.user = user;

  await creditCardRepository.save(creditCard);

  return creditCard;
};
export default createCreditCardService;
