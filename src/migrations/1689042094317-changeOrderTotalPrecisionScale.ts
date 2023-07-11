import { MigrationInterface, QueryRunner } from "typeorm";

export class ChangeOrderTotalPrecisionScale1689042094317 implements MigrationInterface {
    name = 'ChangeOrderTotalPrecisionScale1689042094317'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "orders" DROP COLUMN "total"`);
        await queryRunner.query(`ALTER TABLE "orders" ADD "total" numeric(8,2)`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "orders" DROP COLUMN "total"`);
        await queryRunner.query(`ALTER TABLE "orders" ADD "total" integer NOT NULL`);
    }

}
