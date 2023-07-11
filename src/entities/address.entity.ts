import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { User } from "./user.entity";
import { Order } from "./order.entity";

@Entity("addresses")
export class Address {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  address: string;

  @Column()
  cep: string;

  @Column()
  number: string;

  @Column({ nullable: true })
  complement: string;

  @Column()
  city: string;

  @Column()
  state: string;

  @Column()
  country: string;

  @ManyToOne(() => User, (user) => user.address) // Correção: especificar o nome da propriedade no segundo argumento
  user: User;

  @OneToMany(() => Order, (order) => order.address)
  orders: Order;
}
