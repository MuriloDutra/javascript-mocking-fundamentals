require('../__no-framework-mocks__/utils') // It prepares the cache
const utilsPath = require.resolve('../utils')
const mockUtilsPath = require.resolve('../__no-framework-mocks__/utils')
require.cache[utilsPath] = require.cache[mockUtilsPath]

const assert = require('assert')
const thumbWar = require('../thumb-war')
const utils = require('../utils')

const winner = thumbWar('Murilo Alves', 'Camila Pereira')
assert.strictEqual(winner, 'Murilo Alves')
assert.deepStrictEqual(utils.getWinner.mock.calls, [
  ['Murilo Alves', 'Camila Pereira'],
  ['Murilo Alves', 'Camila Pereira']
])

// cleanup
delete require.cache[utilsPath]
