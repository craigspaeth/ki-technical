import db from '~/lib/db'

const create = (world = 'world') =>
  db.insertInto('hello').values({ world }).returningAll().executeTakeFirst()

const findAll = () => db.selectFrom('hello').selectAll().execute()

export { create, findAll }
