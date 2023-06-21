import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("credit_cards")
export class CreditCard {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  name: string;

  @Column()
  number: string;

  @Column()
  validation_data: string;
}
