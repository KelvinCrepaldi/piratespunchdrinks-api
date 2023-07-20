import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entity";
import { AppError } from "../../errors/appErrors";
import { IDeleteUserRequest } from "../../interfaces/user.interfaces";

const deleteUserService = async ({ id }: IDeleteUserRequest) => {
  const userRepository = AppDataSource.getRepository(User);

  const user = await userRepository.findOneBy({ id });

  if (!user || !user.active) {
    throw new AppError(403, "Invalid credentials, user not found.");
  }

  user.active = false;

  await userRepository.save(user);

  return { message: `User "${user.name}" deleted.` };
};

export default deleteUserService;
