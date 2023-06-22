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
