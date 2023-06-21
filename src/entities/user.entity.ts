import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  CreateDateColumn,
  JoinColumn,
  OneToOne,
  OneToMany,
} from "typeorm";
import { Address } from "./address.entity";
import { CreditCard } from "./creditCard.entity";
import { Order } from "./order.entity";

@Entity("users")
export class User {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  adm: boolean;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @Column()
  active: boolean;

  @OneToMany(() => Order, (order) => order.user, {
    nullable: true,
  })
  orders: Order[];

  @OneToMany(() => Address, (address) => address.user, {
    nullable: true,
    eager: true,
  })
  address: Address;

  @OneToOne(() => CreditCard, { eager: true })
  @JoinColumn()
  credit_card: CreditCard;
}
