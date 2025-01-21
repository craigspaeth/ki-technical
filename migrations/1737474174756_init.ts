import type { Kysely } from 'kysely'

export async function up(db: Kysely<any>): Promise<void> {
  db.schema.createTable('hello').addColumn('world', 'varchar').execute()
}

export async function down(db: Kysely<any>): Promise<void> {
  db.schema.dropTable('hello').execute()
}
