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
import { Promotion } from "./entities/promotion.entity";
import { CreateAllTables1690773034096 } from "./migrations/1690773034096-createAllTables";
import { AddReferenceCreditCardAndAddress1690784942341 } from "./migrations/1690784942341-addReferenceCreditCardAndAddress";

const AppDataSource = new DataSource({
  type: "postgres",
  host: process.env.DB_HOST,
  port: parseInt(process.env.PGPORT || ""),
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
    Promotion,
  ],
  subscribers: [],
  migrations: [
    CreateAllTables1690773034096,
    AddReferenceCreditCardAndAddress1690784942341,
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
