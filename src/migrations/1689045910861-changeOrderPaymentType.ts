import { MigrationInterface, QueryRunner } from "typeorm";

export class ChangeOrderPaymentType1689045910861 implements MigrationInterface {
    name = 'ChangeOrderPaymentType1689045910861'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "orders" RENAME COLUMN "payment_status" TO "paymentStatus"`);
        await queryRunner.query(`ALTER TABLE "orders" DROP COLUMN "paymentStatus"`);
        await queryRunner.query(`CREATE TYPE "public"."orders_paymentstatus_enum" AS ENUM('PENDING', 'AUTHORIZED', 'CANCELLED')`);
        await queryRunner.query(`ALTER TABLE "orders" ADD "paymentStatus" "public"."orders_paymentstatus_enum" NOT NULL DEFAULT 'PENDING'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "orders" DROP COLUMN "paymentStatus"`);
        await queryRunner.query(`DROP TYPE "public"."orders_paymentstatus_enum"`);
        await queryRunner.query(`ALTER TABLE "orders" ADD "paymentStatus" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "orders" RENAME COLUMN "paymentStatus" TO "payment_status"`);
    }

}
