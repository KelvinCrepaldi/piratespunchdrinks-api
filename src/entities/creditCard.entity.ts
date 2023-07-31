import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { User } from "./user.entity";
import { Order } from "./order.entity";

@Entity("credit_cards")
export class CreditCard {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  reference: string;

  @Column()
  active: boolean;

  @Column()
  name: string;

  @Column({ length: 16 })
  number: string;

  @Column()
  expiration_date: string;

  @ManyToOne(() => User)
  user: User;

  @OneToMany(() => Order, (order) => order.address)
  orders: Order;
}
