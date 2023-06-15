import AppDataSource from "../../data-source";
import { Order } from "../../entities/order.entity";
import { OrderProduct } from "../../entities/orderProduct.entity";
import { Product } from "../../entities/product.entity";

const createOrderService = async (products: Product[]): Promise<any> => {
  const orderRepository = AppDataSource.getRepository(Order);
  const order: any = new Order();
  order.products = products;
  const createdOrder = await orderRepository.save(order);
  return createdOrder;
};

export default createOrderService;
