import { MigrationInterface, QueryRunner } from "typeorm";

export class AddAmountProduct1684896645460 implements MigrationInterface {
    name = 'AddAmountProduct1684896645460'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "products" ADD "amount" character varying`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "products" DROP COLUMN "amount"`);
    }

}
