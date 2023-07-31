import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  ManyToOne,
  OneToMany,
  UpdateDateColumn,
} from "typeorm";
import { OrderProduct } from "./orderProduct.entity";
import { User } from "./user.entity";
import { CreditCard } from "./creditCard.entity";
import { Address } from "./address.entity";

@Entity("orders")
export class Order {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @Column("decimal", { precision: 8, scale: 2, nullable: true })
  total: number;

  @Column()
  paymentStatus: string;

  @ManyToOne(() => User, (user) => user.orders)
  user: User;

  @ManyToOne(() => CreditCard, (creditCard) => creditCard.orders)
  creditCard: CreditCard;

  @ManyToOne(() => Address, (address) => address.orders)
  address: Address;

  @OneToMany(() => OrderProduct, (orderProduct) => orderProduct.order)
  orderProducts: OrderProduct[];
}
