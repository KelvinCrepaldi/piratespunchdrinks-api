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

@Entity("products")
export class Product {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  name: string;

  @Column()
  price: string;

  @Column()
  apresentation: string;

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
  })
  characteristic: Characteristic;

  @OneToMany(() => AditionalInfo, (aditional_info) => aditional_info.product, {
    nullable: true,
  })
  aditional_info: AditionalInfo;
}
