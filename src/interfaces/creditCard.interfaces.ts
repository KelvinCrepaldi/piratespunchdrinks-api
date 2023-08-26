import { CreditCard } from "../entities/creditCard.entity";

export interface ICreditCard {
  name: string;
  reference: string;
  number: string;
  validationData: string;
  active: boolean;
}

export interface ICreateCreditCardRequest {
  name: string;
  expiration_date: string;
  number: string;
  userId: string;
}

export interface ICreateCreditCardResponse {
  id: string;
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

export interface IUpdateCreditCardRequest {
  userId: string;
  creditCardId: string;
  name?: string;
  number?: string;
  expiration_date?: string;
}

export interface IUpdateCreditCardResponse {
  message: string;
}
