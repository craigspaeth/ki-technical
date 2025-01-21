import * as Hello from '../models/hello'

jest.mock('../models/hello', () => ({
  create: jest.fn().mockReturnValue('Hello, World!'),
}))

describe('test', () => {
  it('should pass', async () => {
    expect(await Hello.create()).toBe('Hello, World!')
  })
})
