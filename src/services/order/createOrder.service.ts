import AppDataSource from "../../data-source";
import { Order } from "../../entities/order.entity";
import { OrderProduct } from "../../entities/orderProduct.entity";
import { Product } from "../../entities/product.entity";
import { User } from "../../entities/user.entity";
import { AppError } from "../../errors/appErrors";
import { IOrderRequest } from "../../interfaces/order.interface";

const createOrderService = async ({
  products,
  userId,
}: IOrderRequest): Promise<any> => {
  const orderRepository = AppDataSource.getRepository(Order);
  const orderProductsRepository = AppDataSource.getRepository(OrderProduct);
  const userRepository = AppDataSource.getRepository(User);
  const productRepository = AppDataSource.getRepository(Product);

  const user = await userRepository.findOne({
    where: { id: userId },
  });

  if (!user) {
    throw new AppError(403, "user not found");
  }

  const order = new Order();
  order.total = "0";
  order.active_status = true;
  order.payment_status = false;
  order.expired = false;
  order.user = user;

  const createdOrder = await orderRepository.save(order);
  const createdOrderProducts = [];

  for (const product of products) {
    const findProduct = await productRepository.findOne({
      where: {
        id: product.productId,
      },
    });

    if (!findProduct) {
      throw new AppError(403, "Product not found");
    }

    const newOrderProduct = new OrderProduct();
    newOrderProduct.order = createdOrder;
    newOrderProduct.product = findProduct;
    newOrderProduct.quantity = product.quantity;

    const createdOrderProduct = await orderProductsRepository.save(
      newOrderProduct
    );
    createdOrderProducts.push({
      product: createdOrderProduct.product.id,
      quantity: createdOrderProduct.quantity,
    });
  }

  const responseBody = {
    ...createdOrder,
    order_products: [...createdOrderProducts],
  };

  return responseBody;
};

export default createOrderService;
