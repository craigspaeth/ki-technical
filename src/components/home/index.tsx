import { findWorlds } from '~/actions'
import Form from './form'

const Main = async () => {
  const worlds = await findWorlds()
  return (
    <>
      <h1>Hello World</h1>
      {worlds.map(({ world }) => world).join(', ')}
      <Form />
    </>
  )
}

export default Main
