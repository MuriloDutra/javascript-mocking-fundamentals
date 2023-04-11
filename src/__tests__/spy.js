const thumbWar = require('../thumb-war')
const utils = require('../utils')

test('returns winner', () => {
  jest.spyOn(utils, 'getWinner')//It replaces 'getWinner' with an empty mock function
  utils.getWinner.mockImplementation((p1, p2) => p1)

  const winner = thumbWar('Murilo Alves', 'Camila Pereira')
  expect(winner).toBe('Murilo Alves')
  expect(utils.getWinner.mock.calls).toEqual([
    ['Murilo Alves', 'Camila Pereira'],
    ['Murilo Alves', 'Camila Pereira']
  ])

  //It restore the original value from 'getWinner' function
  utils.getWinner.mockRestore()
})
