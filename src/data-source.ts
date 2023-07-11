import { DataSource } from "typeorm";
import "dotenv/config";
import { User } from "./entities/user.entity";
import { Address } from "./entities/address.entity";
import { CreditCard } from "./entities/creditCard.entity";
import { Product } from "./entities/product.entity";
import { Characteristic } from "./entities/characteristic.entity";
import { Category } from "./entities/categories.entity";
import { AditionalInfo } from "./entities/aditionalInfo.entity";
import { Order } from "./entities/order.entity";
import { OrderProduct } from "./entities/orderProduct.entity";
import { CreateTables1686804248545 } from "./migrations/1686804248545-createTables";
import { ChangeUserRelations1687348222198 } from "./migrations/1687348222198-changeUserRelations";
import { FixAddressUserRelation1687355877955 } from "./migrations/1687355877955-fixAddressUserRelation";
import { ChangeOrderColumns1689040486523 } from "./migrations/1689040486523-changeOrderColumns";
import { ChangeOrderTotalType1689041097208 } from "./migrations/1689041097208-changeOrderTotalType";
import { ChangeProductPricePrecicionScale1689041748066 } from "./migrations/1689041748066-changeProductPricePrecicionScale";
import { ChangeOrderTotalPrecisionScale1689042094317 } from "./migrations/1689042094317-changeOrderTotalPrecisionScale";
import { ChangeOrderPaymentType1689045910861 } from "./migrations/1689045910861-changeOrderPaymentType";
const AppDataSource = new DataSource({
  type: "postgres",
  host: process.env.DB_HOST,
  port: 5432,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB,
  synchronize: false,
  logging: true,
  entities: [
    User,
    Address,
    CreditCard,
    Product,
    Characteristic,
    AditionalInfo,
    Category,
    Order,
    OrderProduct,
  ],
  subscribers: [],
  migrations: [
    CreateTables1686804248545,
    ChangeUserRelations1687348222198,
    FixAddressUserRelation1687355877955,
    ChangeOrderColumns1689040486523,
    ChangeOrderTotalType1689041097208,
    ChangeProductPricePrecicionScale1689041748066,
    ChangeOrderTotalPrecisionScale1689042094317,
    ChangeOrderPaymentType1689045910861,
  ],
});

AppDataSource.initialize()
  .then(() => {
    console.log("Data Source has been initialized!");
  })
  .catch((err) => {
    console.error("Error during Data Source initialization", err);
  });

export default AppDataSource;
