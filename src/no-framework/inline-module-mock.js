function fn(impl = () => {}) {
  const mockFn = (...args) => {
    mockFn.mock.calls.push(args)
    return impl(...args)
  }
  mockFn.mock = {calls: []}
  return mockFn
}

const utilsPath = require.resolve('../utils')
require.cache[utilsPath] = {
  id: utilsPath,
  filename: utilsPath,
  loaded: true,
  exports: {//Mocking getWinner function
    getWinner: fn((p1, p2) => p1)
  }
}

const assert = require('assert')
const thumbWar = require('../thumb-war')
const utils = require('../utils')//The mocked module is being used here

const winner = thumbWar('Murilo Alves', 'Camila Pereira')
assert.strictEqual(winner, 'Murilo Alves')
assert.deepStrictEqual(utils.getWinner.mock.calls, [
  ['Murilo Alves', 'Camila Pereira'],
  ['Murilo Alves', 'Camila Pereira']
])

// cleanup
delete require.cache[utilsPath]
