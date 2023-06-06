import { ICreditCard } from "./creditCard.interfaces";
import { IAddress } from "./address.interfaces";
export interface IUserRequest {
  name: string;
  email: string;
  password: string;
  creditCard: ICreditCard;
  address: IAddress;
}

export interface IUserResponse {
  name: string;
  email: string;
  creditCard: ICreditCard;
  address: IAddress;
}

export interface IListUserRequest {
  email: string;
}
