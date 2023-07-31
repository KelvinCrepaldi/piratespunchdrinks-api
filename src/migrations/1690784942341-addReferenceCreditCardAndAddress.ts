import { MigrationInterface, QueryRunner } from "typeorm";

export class AddReferenceCreditCardAndAddress1690784942341 implements MigrationInterface {
    name = 'AddReferenceCreditCardAndAddress1690784942341'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "credit_cards" ADD "reference" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "credit_cards" ADD "active" boolean NOT NULL`);
        await queryRunner.query(`ALTER TABLE "addresses" ADD "reference" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "addresses" ADD "active" boolean NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "addresses" DROP COLUMN "active"`);
        await queryRunner.query(`ALTER TABLE "addresses" DROP COLUMN "reference"`);
        await queryRunner.query(`ALTER TABLE "credit_cards" DROP COLUMN "active"`);
        await queryRunner.query(`ALTER TABLE "credit_cards" DROP COLUMN "reference"`);
    }

}
