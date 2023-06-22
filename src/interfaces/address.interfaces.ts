import { User } from "../entities/user.entity";

export interface IAddressRequest {
  address: string;
  cep: string;
  number: string;
  complement: string;
  city: string;
  state: string;
  country: string;
  userId: string;
}

export interface IAddress {
  id: string;
  address: string;
  cep: string;
  number: string;
  complement: string;
  city: string;
  state: string;
  country: string;
  user: User;
}

export interface IDeleteAddressRequest {
  id: string;
}

export interface IAddressResponse {
  id: string;
  address: string;
  cep: string;
  number: string;
  complement: string;
  city: string;
  state: string;
  country: string;
  user: undefined;
}

export interface IListUserAddresses {
  id: string;
}
