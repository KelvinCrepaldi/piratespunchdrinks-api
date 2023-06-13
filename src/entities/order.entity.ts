import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  OneToMany,
} from "typeorm";
import { OrderProducts } from "./cart.entity";

@Entity("orders")
export class Order {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @CreateDateColumn()
  created_at: Date;

  @Column()
  total: string;

  @Column()
  active_status: boolean;

  @Column()
  payment_status: boolean;

  @Column()
  expired: boolean;

  //credit_card

  //user

  @OneToMany(() => OrderProducts, (orderProducts) => orderProducts.product, {
    nullable: true,
  })
  orderProducts: OrderProducts;
}
