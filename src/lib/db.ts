import { Kysely, PostgresDialect } from 'kysely'
import type { DB } from 'kysely-codegen'
import { Pool } from 'pg'
import type { PoolConfig } from 'pg'
import { parse } from 'pg-connection-string'
import env from './env'

const config = { pool: new Pool(parse(env.DATABASE_URL) as PoolConfig) }
const db = new Kysely<DB>({ dialect: new PostgresDialect(config) })

export { config }
export { sql } from 'kysely'
export default db
