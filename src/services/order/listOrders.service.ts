import AppDataSource from "../../data-source";
import { Order } from "../../entities/order.entity";
import { OrderProduct } from "../../entities/orderProduct.entity";

const listOrdersService = async (id: string): Promise<any> => {
  const orderRepository = AppDataSource.getRepository(Order);

  const order = await orderRepository
    .createQueryBuilder("order")
    .leftJoinAndSelect("order.orderProducts", "orderProduct")
    .leftJoinAndSelect("orderProduct.product", "product")
    .where("order.id = :id", { id })
    .getOne();

  return order;
};

export default listOrdersService;
