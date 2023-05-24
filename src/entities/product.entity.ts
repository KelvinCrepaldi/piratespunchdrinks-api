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

  @Column({ nullable: true })
  amount: string;

  @Column()
  apresentation: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @Column()
  active: boolean;

  @ManyToOne(() => Category, { nullable: true, eager: true })
  category: Category | null;

  @OneToMany(() => Characteristic, (characteristic) => characteristic.product, {
    nullable: true,
    eager: true,
  })
  characteristic: Characteristic;

  @OneToMany(() => AditionalInfo, (aditional_info) => aditional_info.product, {
    nullable: true,
    eager: true,
  })
  aditional_info: AditionalInfo;
}
