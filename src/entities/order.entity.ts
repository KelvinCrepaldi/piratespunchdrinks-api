import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  OneToMany,
  ManyToOne,
} from "typeorm";
import { OrderProducts } from "./orderProducts.entity";
import { User } from "./user.entity";

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

  @ManyToOne(() => User, { eager: true })
  user: User;

  @OneToMany(() => OrderProducts, (orderProducts) => orderProducts.product, {
    nullable: true,
  })
  orderProducts: OrderProducts;
}
