import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  ManyToMany,
  JoinTable,
} from "typeorm";
import { Product } from "./product.entity";

@Entity("promotions")
export class Promotion {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  type: string;

  @Column()
  value: number;

  @CreateDateColumn()
  createdAt: Date;

  @Column()
  initialDate: Date;

  @Column()
  finalDate: Date;

  @ManyToMany(() => Product)
  @JoinTable()
  products: Product[];
}
