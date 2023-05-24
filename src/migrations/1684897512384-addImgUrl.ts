import { MigrationInterface, QueryRunner } from "typeorm";

export class AddImgUrl1684897512384 implements MigrationInterface {
    name = 'AddImgUrl1684897512384'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "products" ADD "img_url" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "products" DROP COLUMN "img_url"`);
    }

}
