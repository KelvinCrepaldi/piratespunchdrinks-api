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
import { OrderProducts } from "./entities/orderProducts.entity";

import { UserTable1683865015862 } from "./migrations/1683865015862-userTable";
import { CreateProductsTables1683968081000 } from "./migrations/1683968081000-createProductsTables";
import { AddAmountProduct1684896645460 } from "./migrations/1684896645460-addAmountProduct";
import { AddImgUrl1684897512384 } from "./migrations/1684897512384-addImgUrl";
import { CartTables1686727926901 } from "./migrations/1686727926901-cartTables";
import { FixCartTables1686728594216 } from "./migrations/1686728594216-fixCartTables";

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
    OrderProducts,
  ],
  subscribers: [],
  migrations: [
    UserTable1683865015862,
    CreateProductsTables1683968081000,
    AddAmountProduct1684896645460,
    AddImgUrl1684897512384,
    CartTables1686727926901,
    FixCartTables1686728594216,
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
