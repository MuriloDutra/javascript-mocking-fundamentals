const assert = require('assert')
const thumbWar = require('../thumb-war')
const utils = require('../utils')

function fn(implementation = () => {}) {
  const mockFn = (...args) => {
    mockFn.mock.calls.push(args)
    return implementation(...args)
  }
  mockFn.mock = {calls: []}
  mockFn.mockImplementation = newImplementation => (implementation = newImplementation)
  return mockFn
}

function spyOn(obj, prop) {
  const originalValue = obj[prop]
  obj[prop] = fn()
  obj[prop].mockRestore = () => (obj[prop] = originalValue)//It retrieves the original function
}

spyOn(utils, 'getWinner')
utils.getWinner.mockImplementation((p1, p2) => p1)

const winner = thumbWar('Murilo Alves', 'Camila Pereira')
assert.strictEqual(winner, 'Murilo Alves')
assert.deepStrictEqual(utils.getWinner.mock.calls, [
  ['Murilo Alves', 'Camila Pereira'],
  ['Murilo Alves', 'Camila Pereira']
])

// cleanup
utils.getWinner.mockRestore()
