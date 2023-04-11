const thumbWar = require('../thumb-war')
const utilsMock = require('../utils')

jest.mock('../utils', () => {
  return {
    getWinner: jest.fn((p1, p2) => p1) //Mocked function
  }
})

test('returns winner', () => {
  const winner = thumbWar('Murilo Alves', 'Camila Pereira')
  expect(winner).toBe('Murilo Alves')
  expect(utilsMock.getWinner.mock.calls).toEqual([
    ['Murilo Alves', 'Camila Pereira'],
    ['Murilo Alves', 'Camila Pereira']
  ])

  //That will reset our mock function to the initial state clearing out the calls.
  utilsMock.getWinner.mockReset()
})
