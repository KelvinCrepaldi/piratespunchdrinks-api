import { MigrationInterface, QueryRunner } from "typeorm";

export class ChangeOrderColumns1689040486523 implements MigrationInterface {
    name = 'ChangeOrderColumns1689040486523'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "orders" DROP COLUMN "created_at"`);
        await queryRunner.query(`ALTER TABLE "orders" DROP COLUMN "active_status"`);
        await queryRunner.query(`ALTER TABLE "orders" DROP COLUMN "expired"`);
        await queryRunner.query(`ALTER TABLE "orders" ADD "createdAt" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "orders" ADD "updatedAt" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "orders" ADD "creditCardId" uuid`);
        await queryRunner.query(`ALTER TABLE "orders" ADD "addressId" uuid`);
        await queryRunner.query(`ALTER TABLE "products" DROP COLUMN "price"`);
        await queryRunner.query(`ALTER TABLE "products" ADD "price" integer`);
        await queryRunner.query(`ALTER TABLE "orders" DROP COLUMN "payment_status"`);
        await queryRunner.query(`ALTER TABLE "orders" ADD "payment_status" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "orders" ADD CONSTRAINT "FK_bb6ce304e767b543fb61056333b" FOREIGN KEY ("creditCardId") REFERENCES "credit_cards"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "orders" ADD CONSTRAINT "FK_37636d260931dcf46d11892f614" FOREIGN KEY ("addressId") REFERENCES "addresses"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "orders" DROP CONSTRAINT "FK_37636d260931dcf46d11892f614"`);
        await queryRunner.query(`ALTER TABLE "orders" DROP CONSTRAINT "FK_bb6ce304e767b543fb61056333b"`);
        await queryRunner.query(`ALTER TABLE "orders" DROP COLUMN "payment_status"`);
        await queryRunner.query(`ALTER TABLE "orders" ADD "payment_status" boolean NOT NULL`);
        await queryRunner.query(`ALTER TABLE "products" DROP COLUMN "price"`);
        await queryRunner.query(`ALTER TABLE "products" ADD "price" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "orders" DROP COLUMN "addressId"`);
        await queryRunner.query(`ALTER TABLE "orders" DROP COLUMN "creditCardId"`);
        await queryRunner.query(`ALTER TABLE "orders" DROP COLUMN "updatedAt"`);
        await queryRunner.query(`ALTER TABLE "orders" DROP COLUMN "createdAt"`);
        await queryRunner.query(`ALTER TABLE "orders" ADD "expired" boolean NOT NULL`);
        await queryRunner.query(`ALTER TABLE "orders" ADD "active_status" boolean NOT NULL`);
        await queryRunner.query(`ALTER TABLE "orders" ADD "created_at" TIMESTAMP NOT NULL DEFAULT now()`);
    }

}
