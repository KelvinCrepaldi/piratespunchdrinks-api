import { MigrationInterface, QueryRunner } from "typeorm";

export class ChangeProductPricePrecicionScale1689041748066 implements MigrationInterface {
    name = 'ChangeProductPricePrecicionScale1689041748066'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "products" DROP COLUMN "price"`);
        await queryRunner.query(`ALTER TABLE "products" ADD "price" numeric(8,2)`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "products" DROP COLUMN "price"`);
        await queryRunner.query(`ALTER TABLE "products" ADD "price" integer`);
    }

}
