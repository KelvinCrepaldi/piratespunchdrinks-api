import AppDataSource from "../../data-source";
import { Order } from "../../entities/order.entity";
import { OrderProducts } from "../../entities/orderProducts.entity";

const listOrdersService = async (id: string): Promise<any> => {
  const orderRepository = AppDataSource.getRepository(Order);
  const orderProductsRepository = AppDataSource.getRepository(OrderProducts);

  const orderList = await orderRepository.find({ where: { user: { id: id } } });

  const promises = orderList.map(async (order) => {
    const orderProductsList = await orderProductsRepository.find({
      where: { order: { id: order.id } },
    });

    return { order: order, productsList: orderProductsList };
  });

  const newOrder = await Promise.all(promises);

  return newOrder;
};

export default listOrdersService;
