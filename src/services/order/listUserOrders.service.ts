import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entity";
import { AppError } from "../../errors/appErrors";
import { IListUserOrdersRequest } from "../../interfaces/order.interfaces";

export const listUserOrdersService = async ({
  id,
}: IListUserOrdersRequest): Promise<any> => {
  const userRepository = AppDataSource.getRepository(User);

  const user = await userRepository.findOne({ where: { id: id } });

  if (!user) {
    throw new AppError(403, "User not found");
  }

  const userOrders = await userRepository
    .createQueryBuilder("user")
    .select(["user.name", "user.email"])
    .leftJoinAndSelect("user.orders", "order")
    .leftJoinAndSelect("order.orderProducts", "orderProduct")
    .leftJoinAndSelect("orderProduct.product", "product")
    .where("user.id = :userId", { userId: id })
    .getMany();

  return userOrders[0];
};
