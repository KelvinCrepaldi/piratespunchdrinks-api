import { MigrationInterface, QueryRunner } from "typeorm";

export class ChangeOrderTotalType1689041097208 implements MigrationInterface {
    name = 'ChangeOrderTotalType1689041097208'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "orders" DROP COLUMN "total"`);
        await queryRunner.query(`ALTER TABLE "orders" ADD "total" integer NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "orders" DROP COLUMN "total"`);
        await queryRunner.query(`ALTER TABLE "orders" ADD "total" character varying NOT NULL`);
    }

}
