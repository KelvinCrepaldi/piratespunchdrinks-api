import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./user.entity";

@Entity("credit_cards")
export class CreditCard {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  name: string;

  @Column({ length: 16 })
  number: string;

  @Column()
  expiration_date: string;

  @ManyToOne(() => User)
  user: User;
}
