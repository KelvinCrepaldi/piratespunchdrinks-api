import { MigrationInterface, QueryRunner } from "typeorm";

export class ChangeUserRelations1687348222198 implements MigrationInterface {
    name = 'ChangeUserRelations1687348222198'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP CONSTRAINT "FK_bafb08f60d7857f4670c172a6ea"`);
        await queryRunner.query(`ALTER TABLE "users" DROP CONSTRAINT "FK_9f31e2e8dba91b4aab3ff79c315"`);
        await queryRunner.query(`ALTER TABLE "credit_cards" DROP COLUMN "validation_data"`);
        await queryRunner.query(`ALTER TABLE "users" DROP CONSTRAINT "REL_bafb08f60d7857f4670c172a6e"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "addressId"`);
        await queryRunner.query(`ALTER TABLE "users" DROP CONSTRAINT "REL_9f31e2e8dba91b4aab3ff79c31"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "creditCardId"`);
        await queryRunner.query(`ALTER TABLE "addresses" ADD "userId" uuid`);
        await queryRunner.query(`ALTER TABLE "credit_cards" ADD "name" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "credit_cards" ADD "expiration_date" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "credit_cards" ADD "userId" uuid`);
        await queryRunner.query(`ALTER TABLE "addresses" ALTER COLUMN "complement" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "credit_cards" DROP COLUMN "number"`);
        await queryRunner.query(`ALTER TABLE "credit_cards" ADD "number" character varying(16) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "addresses" ADD CONSTRAINT "FK_95c93a584de49f0b0e13f753630" FOREIGN KEY ("userId") REFERENCES "addresses"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "credit_cards" ADD CONSTRAINT "FK_316ec479135fbc369ccf229dd0f" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "credit_cards" DROP CONSTRAINT "FK_316ec479135fbc369ccf229dd0f"`);
        await queryRunner.query(`ALTER TABLE "addresses" DROP CONSTRAINT "FK_95c93a584de49f0b0e13f753630"`);
        await queryRunner.query(`ALTER TABLE "credit_cards" DROP COLUMN "number"`);
        await queryRunner.query(`ALTER TABLE "credit_cards" ADD "number" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "addresses" ALTER COLUMN "complement" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "credit_cards" DROP COLUMN "userId"`);
        await queryRunner.query(`ALTER TABLE "credit_cards" DROP COLUMN "expiration_date"`);
        await queryRunner.query(`ALTER TABLE "credit_cards" DROP COLUMN "name"`);
        await queryRunner.query(`ALTER TABLE "addresses" DROP COLUMN "userId"`);
        await queryRunner.query(`ALTER TABLE "users" ADD "creditCardId" uuid`);
        await queryRunner.query(`ALTER TABLE "users" ADD CONSTRAINT "REL_9f31e2e8dba91b4aab3ff79c31" UNIQUE ("creditCardId")`);
        await queryRunner.query(`ALTER TABLE "users" ADD "addressId" uuid`);
        await queryRunner.query(`ALTER TABLE "users" ADD CONSTRAINT "REL_bafb08f60d7857f4670c172a6e" UNIQUE ("addressId")`);
        await queryRunner.query(`ALTER TABLE "credit_cards" ADD "validation_data" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "users" ADD CONSTRAINT "FK_9f31e2e8dba91b4aab3ff79c315" FOREIGN KEY ("creditCardId") REFERENCES "credit_cards"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "users" ADD CONSTRAINT "FK_bafb08f60d7857f4670c172a6ea" FOREIGN KEY ("addressId") REFERENCES "addresses"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
