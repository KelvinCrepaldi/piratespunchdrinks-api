import { MigrationInterface, QueryRunner } from "typeorm";

export class CreatePromotionsTable1689724731679 implements MigrationInterface {
    name = 'CreatePromotionsTable1689724731679'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "promotions" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "type" character varying NOT NULL, "value" integer NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "initialDate" TIMESTAMP NOT NULL, "finalDate" TIMESTAMP NOT NULL, CONSTRAINT "PK_380cecbbe3ac11f0e5a7c452c34" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "promotions_products_products" ("promotionsId" uuid NOT NULL, "productsId" uuid NOT NULL, CONSTRAINT "PK_b14b21a400555bbdecec84a83ce" PRIMARY KEY ("promotionsId", "productsId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_bf19005cfc0c1c8190af6a473d" ON "promotions_products_products" ("promotionsId") `);
        await queryRunner.query(`CREATE INDEX "IDX_896e5d147379f3840c1f1c55b0" ON "promotions_products_products" ("productsId") `);
        await queryRunner.query(`ALTER TABLE "promotions_products_products" ADD CONSTRAINT "FK_bf19005cfc0c1c8190af6a473d3" FOREIGN KEY ("promotionsId") REFERENCES "promotions"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "promotions_products_products" ADD CONSTRAINT "FK_896e5d147379f3840c1f1c55b04" FOREIGN KEY ("productsId") REFERENCES "products"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "promotions_products_products" DROP CONSTRAINT "FK_896e5d147379f3840c1f1c55b04"`);
        await queryRunner.query(`ALTER TABLE "promotions_products_products" DROP CONSTRAINT "FK_bf19005cfc0c1c8190af6a473d3"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_896e5d147379f3840c1f1c55b0"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_bf19005cfc0c1c8190af6a473d"`);
        await queryRunner.query(`DROP TABLE "promotions_products_products"`);
        await queryRunner.query(`DROP TABLE "promotions"`);
    }

}
