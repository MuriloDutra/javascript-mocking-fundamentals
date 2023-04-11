const assert = require('assert')
const thumbWar = require('../thumb-war')
const utils = require('../utils')

//Saving the original value of the function
const originalGetWinner = utils.getWinner

//Mocking the function
utils.getWinner = (p1, p2) => p1

const winner = thumbWar('Murilo Alves', 'Camila Pereira')
assert.strictEqual(winner, 'Murilo Alves')

//Retrieving the original function, this is important because
//can be other tests that doesn't want to use the mocked function, but
//the original one
utils.getWinner = originalGetWinner
