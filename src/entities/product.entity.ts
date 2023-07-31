import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToMany,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";

import { Category } from "./categories.entity";
import { Characteristic } from "./characteristic.entity";
import { AditionalInfo } from "./aditionalInfo.entity";
import { OrderProduct } from "./orderProduct.entity";

@Entity("products")
export class Product {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  code: string;

  @Column()
  name: string;

  @Column("decimal", { precision: 8, scale: 2, nullable: true })
  price: number;

  @Column({ nullable: true })
  amount: string;

  @Column()
  apresentation: string;

  @Column()
  img_url: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @Column()
  active: boolean;

  @ManyToOne(() => Category, { nullable: true, eager: true })
  category: Category;

  @OneToMany(() => Characteristic, (characteristic) => characteristic.product, {
    nullable: true,
    eager: true,
  })
  characteristic: Characteristic[];

  @OneToMany(() => AditionalInfo, (aditional_info) => aditional_info.product, {
    nullable: true,
    eager: true,
  })
  aditional_info: AditionalInfo[];

  @OneToMany(() => OrderProduct, (orderProduct) => orderProduct.product)
  orderProducts: OrderProduct[];
}
