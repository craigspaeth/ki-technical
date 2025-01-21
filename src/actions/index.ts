'use server'
import * as Hello from '~/models/hello'

const createWorld = async (world = 'Venus') => {
  const hello = await Hello.create(world)
  return hello ? hello.world : 'N/A'
}

const findWorlds = async () => Hello.findAll()

export { createWorld, findWorlds }
