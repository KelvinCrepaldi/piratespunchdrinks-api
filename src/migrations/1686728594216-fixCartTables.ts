import { MigrationInterface, QueryRunner } from "typeorm";

export class FixCartTables1686728594216 implements MigrationInterface {
  name = "CartTables1686728594216";

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "order_products" ADD "productId" uuid`
    );
    await queryRunner.query(`ALTER TABLE "order_products" ADD "orderId" uuid`);
    await queryRunner.query(
      `ALTER TABLE "order_products" ADD CONSTRAINT "FK_27ca18f2453639a1cafb7404ece" FOREIGN KEY ("productId") REFERENCES "products"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`
    );
    await queryRunner.query(
      `ALTER TABLE "order_products" ADD CONSTRAINT "FK_28b66449cf7cd76444378ad4e92" FOREIGN KEY ("orderId") REFERENCES "orders"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "order_products" DROP CONSTRAINT "FK_28b66449cf7cd76444378ad4e92"`
    );
    await queryRunner.query(
      `ALTER TABLE "order_products" DROP CONSTRAINT "FK_27ca18f2453639a1cafb7404ece"`
    );
    await queryRunner.query(
      `ALTER TABLE "order_products" DROP COLUMN "orderId"`
    );
    await queryRunner.query(
      `ALTER TABLE "order_products" DROP COLUMN "productId"`
    );
  }
}
