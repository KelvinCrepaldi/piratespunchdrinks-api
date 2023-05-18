import { User } from "../entities/user.entity";
export interface IAuthenticationRequest {
  email: string;
  password: string;
}

export interface IAuthenticationResponse {
  token: string;
  user: User;
}
