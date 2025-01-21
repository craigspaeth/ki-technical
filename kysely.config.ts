import { defineConfig } from 'kysely-ctl'
import { config } from './src/lib/db'

export default defineConfig({ dialect: 'pg', dialectConfig: config })
