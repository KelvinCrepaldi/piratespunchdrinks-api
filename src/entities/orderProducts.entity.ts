import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  ManyToOne,
} from "typeorm";
import { Product } from "./product.entity";
import { Order } from "./order.entity";

@Entity("order_products")
export class OrderProducts {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  quantity: number;

  @ManyToOne(() => Product, { eager: true })
  product: Product;

  @ManyToOne(() => Order)
  order: Order;
}
