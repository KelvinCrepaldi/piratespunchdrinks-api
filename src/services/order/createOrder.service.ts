import AppDataSource from "../../data-source";
import { Address } from "../../entities/address.entity";
import { CreditCard } from "../../entities/creditCard.entity";
import { Order } from "../../entities/order.entity";
import { OrderProduct } from "../../entities/orderProduct.entity";
import { Product } from "../../entities/product.entity";
import { User } from "../../entities/user.entity";
import { AppError } from "../../errors/appErrors";
import { IOrderRequest } from "../../interfaces/order.interfaces";

const createOrderService = async ({
  products,
  userId,
  addressId,
  creditCardId,
}: IOrderRequest): Promise<any> => {
  const orderRepository = AppDataSource.getRepository(Order);
  const orderProductsRepository = AppDataSource.getRepository(OrderProduct);
  const userRepository = AppDataSource.getRepository(User);
  const productRepository = AppDataSource.getRepository(Product);
  const addressRepository = AppDataSource.getRepository(Address);
  const creditCardRepository = AppDataSource.getRepository(CreditCard);

  //substituir por validação yup
  if (!addressId) {
    throw new AppError(400, "addressId required");
  }
  if (!creditCardId) {
    throw new AppError(400, "creditCardId required");
  }

  const user = await userRepository.findOne({
    where: { id: userId },
  });

  if (!user) {
    throw new AppError(403, "User not found");
  }

  const creditCard = await creditCardRepository.findOne({
    where: { id: creditCardId },
  });

  if (!creditCard) {
    throw new AppError(403, "Credit card not found");
  }

  const address = await addressRepository.findOne({
    where: { id: addressId },
  });

  if (!address) {
    throw new AppError(403, "Address not found");
  }

  const order = new Order();

  order.total = 0;
  order.user = user;
  order.creditCard = creditCard;
  order.address = address;
  order.paymentStatus = "Pending";
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

    const sumValue = newOrderProduct.product.price * newOrderProduct.quantity;

    order.total += sumValue;

    const createdOrderProduct = await orderProductsRepository.save(
      newOrderProduct
    );
    createdOrderProducts.push({
      product: createdOrderProduct.product.id,
      quantity: createdOrderProduct.quantity,
    });
  }

  await orderRepository.save(createdOrder);

  const responseBody = {
    ...createdOrder,
    order_products: [...createdOrderProducts],
  };

  return responseBody;
};

export default createOrderService;
