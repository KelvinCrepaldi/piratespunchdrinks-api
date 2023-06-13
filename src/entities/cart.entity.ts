import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { Product } from "./product.entity";
import { Order } from "./order.entity";

@Entity("order_products")
export class OrderProducts {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  quantity: number;

  @OneToMany(() => Product, (product) => product.orderProducts, {
    nullable: true,
    eager: true,
  })
  product: Product;

  @OneToMany(() => Order, (order) => order.orderProducts, {
    nullable: true,
    eager: true,
  })
  order: Order;
}
