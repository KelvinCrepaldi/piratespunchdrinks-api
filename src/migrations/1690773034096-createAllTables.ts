import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateAllTables1690773034096 implements MigrationInterface {
    name = 'CreateAllTables1690773034096'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "categories" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, CONSTRAINT "PK_24dbc6126a28ff948da33e97d3b" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "characteristics" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "text" character varying NOT NULL, "productId" uuid, CONSTRAINT "PK_a64133a287a0f2d735da40fcd89" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "aditional_info" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "text" character varying NOT NULL, "productId" uuid, CONSTRAINT "PK_2bb05211cf312ff8190c436717f" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "products" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "code" character varying NOT NULL, "name" character varying NOT NULL, "price" numeric(8,2), "amount" character varying, "apresentation" character varying NOT NULL, "img_url" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "active" boolean NOT NULL, "categoryId" uuid, CONSTRAINT "PK_0806c755e0aca124e67c0cf6d7d" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "order_products" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "quantity" integer NOT NULL, "orderId" uuid, "productId" uuid, CONSTRAINT "PK_3e59f094c2dc3310d585216a813" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "credit_cards" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "number" character varying(16) NOT NULL, "expiration_date" character varying NOT NULL, "userId" uuid, CONSTRAINT "PK_7749b596e358703bb3dd8b45b7c" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "orders" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "total" numeric(8,2), "paymentStatus" character varying NOT NULL, "userId" uuid, "creditCardId" uuid, "addressId" uuid, CONSTRAINT "PK_710e2d4957aa5878dfe94e4ac2f" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "addresses" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "address" character varying NOT NULL, "cep" character varying NOT NULL, "number" character varying NOT NULL, "complement" character varying, "city" character varying NOT NULL, "state" character varying NOT NULL, "country" character varying NOT NULL, "userId" uuid, CONSTRAINT "PK_745d8f43d3af10ab8247465e450" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "users" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "email" character varying NOT NULL, "password" character varying NOT NULL, "adm" boolean NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "active" boolean NOT NULL, CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "promotions" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "type" character varying NOT NULL, "value" integer NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "initialDate" TIMESTAMP NOT NULL, "finalDate" TIMESTAMP NOT NULL, CONSTRAINT "PK_380cecbbe3ac11f0e5a7c452c34" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "promotions_products_products" ("promotionsId" uuid NOT NULL, "productsId" uuid NOT NULL, CONSTRAINT "PK_b14b21a400555bbdecec84a83ce" PRIMARY KEY ("promotionsId", "productsId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_bf19005cfc0c1c8190af6a473d" ON "promotions_products_products" ("promotionsId") `);
        await queryRunner.query(`CREATE INDEX "IDX_896e5d147379f3840c1f1c55b0" ON "promotions_products_products" ("productsId") `);
        await queryRunner.query(`ALTER TABLE "characteristics" ADD CONSTRAINT "FK_95241520fba597278a779c884b8" FOREIGN KEY ("productId") REFERENCES "products"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "aditional_info" ADD CONSTRAINT "FK_5b11fa795b5c6579c5e50af1688" FOREIGN KEY ("productId") REFERENCES "products"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "products" ADD CONSTRAINT "FK_ff56834e735fa78a15d0cf21926" FOREIGN KEY ("categoryId") REFERENCES "categories"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "order_products" ADD CONSTRAINT "FK_28b66449cf7cd76444378ad4e92" FOREIGN KEY ("orderId") REFERENCES "orders"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "order_products" ADD CONSTRAINT "FK_27ca18f2453639a1cafb7404ece" FOREIGN KEY ("productId") REFERENCES "products"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "credit_cards" ADD CONSTRAINT "FK_316ec479135fbc369ccf229dd0f" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "orders" ADD CONSTRAINT "FK_151b79a83ba240b0cb31b2302d1" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "orders" ADD CONSTRAINT "FK_bb6ce304e767b543fb61056333b" FOREIGN KEY ("creditCardId") REFERENCES "credit_cards"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "orders" ADD CONSTRAINT "FK_37636d260931dcf46d11892f614" FOREIGN KEY ("addressId") REFERENCES "addresses"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "addresses" ADD CONSTRAINT "FK_95c93a584de49f0b0e13f753630" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "promotions_products_products" ADD CONSTRAINT "FK_bf19005cfc0c1c8190af6a473d3" FOREIGN KEY ("promotionsId") REFERENCES "promotions"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "promotions_products_products" ADD CONSTRAINT "FK_896e5d147379f3840c1f1c55b04" FOREIGN KEY ("productsId") REFERENCES "products"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "promotions_products_products" DROP CONSTRAINT "FK_896e5d147379f3840c1f1c55b04"`);
        await queryRunner.query(`ALTER TABLE "promotions_products_products" DROP CONSTRAINT "FK_bf19005cfc0c1c8190af6a473d3"`);
        await queryRunner.query(`ALTER TABLE "addresses" DROP CONSTRAINT "FK_95c93a584de49f0b0e13f753630"`);
        await queryRunner.query(`ALTER TABLE "orders" DROP CONSTRAINT "FK_37636d260931dcf46d11892f614"`);
        await queryRunner.query(`ALTER TABLE "orders" DROP CONSTRAINT "FK_bb6ce304e767b543fb61056333b"`);
        await queryRunner.query(`ALTER TABLE "orders" DROP CONSTRAINT "FK_151b79a83ba240b0cb31b2302d1"`);
        await queryRunner.query(`ALTER TABLE "credit_cards" DROP CONSTRAINT "FK_316ec479135fbc369ccf229dd0f"`);
        await queryRunner.query(`ALTER TABLE "order_products" DROP CONSTRAINT "FK_27ca18f2453639a1cafb7404ece"`);
        await queryRunner.query(`ALTER TABLE "order_products" DROP CONSTRAINT "FK_28b66449cf7cd76444378ad4e92"`);
        await queryRunner.query(`ALTER TABLE "products" DROP CONSTRAINT "FK_ff56834e735fa78a15d0cf21926"`);
        await queryRunner.query(`ALTER TABLE "aditional_info" DROP CONSTRAINT "FK_5b11fa795b5c6579c5e50af1688"`);
        await queryRunner.query(`ALTER TABLE "characteristics" DROP CONSTRAINT "FK_95241520fba597278a779c884b8"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_896e5d147379f3840c1f1c55b0"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_bf19005cfc0c1c8190af6a473d"`);
        await queryRunner.query(`DROP TABLE "promotions_products_products"`);
        await queryRunner.query(`DROP TABLE "promotions"`);
        await queryRunner.query(`DROP TABLE "users"`);
        await queryRunner.query(`DROP TABLE "addresses"`);
        await queryRunner.query(`DROP TABLE "orders"`);
        await queryRunner.query(`DROP TABLE "credit_cards"`);
        await queryRunner.query(`DROP TABLE "order_products"`);
        await queryRunner.query(`DROP TABLE "products"`);
        await queryRunner.query(`DROP TABLE "aditional_info"`);
        await queryRunner.query(`DROP TABLE "characteristics"`);
        await queryRunner.query(`DROP TABLE "categories"`);
    }

}
