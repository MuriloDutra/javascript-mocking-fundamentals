const assert = require('assert')
const thumbWar = require('../thumb-war')
const utils = require('../utils')

function fn(implementation){
  const mockFn = (...args) => {
    mockFn.mock.calls.push(args)
    return implementation(...args)
  }
  mockFn.mock = {calls: []}
  return mockFn
}

const originalGetWinner = utils.getWinner
utils.getWinner = fn((p1, p2) => p1)

const winner = thumbWar('Murilo Alves', 'Camila Pereira')
assert.strictEqual(winner, 'Murilo Alves')
assert.deepStrictEqual(utils.getWinner.mock.calls, [
  ['Murilo Alves', 'Camila Pereira'],
  ['Murilo Alves', 'Camila Pereira']
])

// cleanup
utils.getWinner = originalGetWinner
