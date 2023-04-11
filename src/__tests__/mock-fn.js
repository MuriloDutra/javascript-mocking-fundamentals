const { expect } = require('@jest/globals')
const thumbWar = require('../thumb-war')
const utils = require('../utils')

test('returns winner', () => {
  const originalGetWinner = utils.getWinner
  utils.getWinner = jest.fn((p1, p2) => p1)

  const winner = thumbWar('Murilo Alves', 'Camila Pereira')
  
  expect(winner).toBe('Murilo Alves')
  expect(utils.getWinner).toHaveBeenCalledTimes(2)//Executing the mock function twice
  expect(utils.getWinner).toHaveBeenCalledWith('Murilo Alves', 'Camila Pereira')

  expect(utils.getWinner).toHaveBeenNthCalledWith(1, 'Murilo Alves', 'Camila Pereira')
  expect(utils.getWinner).toHaveBeenNthCalledWith(2, 'Murilo Alves', 'Camila Pereira')  
  //The above code could be done this way as well:
  expect(utils.getWinner.mock.calls).toEqual([
    [ 'Murilo Alves', 'Camila Pereira' ],
    [ 'Murilo Alves', 'Camila Pereira' ]
  ])
  utils.getWinner = originalGetWinner

})
