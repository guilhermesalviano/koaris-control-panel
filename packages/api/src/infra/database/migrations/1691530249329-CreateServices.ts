import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class CreateServices1691530249329 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "services",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true
                    }, {
                        name: "name",
                        type: "varchar"
                    }, {
                        name: "description",
                        type: "varchar"
                    }, {
                        name: "logo",
                        type: "varchar"
                    }, {
                        name: "price",
                        type: "decimal",
                        isNullable: true
                    }, {
                        name: "updated_at",
                        type: "timestamp",
                        default: "now()"
                    }
                ]
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("services");
    }

}
