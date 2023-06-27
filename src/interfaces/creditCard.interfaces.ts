import { CreditCard } from "../entities/creditCard.entity";

export interface ICreditCard {
  number: string;
  validationData: string;
}

export interface ICreateCreditCardRequest {
  name: string;
  expiration_date: string;
  number: string;
  userId: string;
}

export interface IListCreditCardsRequest {
  userId: string;
}

export interface IDeleteCreditCardRequest {
  userId: string;
  creditCardId: string;
}
