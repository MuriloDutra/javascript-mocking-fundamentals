const thumbWar = require('../thumb-war')
const utilsMock = require('../utils')

jest.mock('../utils')//In fact, it's using the mocked file. IN __mocks__/utils.js

test('returns winner', () => {
  const winner = thumbWar('Murilo Alves', 'Camila Pereira')
  expect(winner).toBe('Murilo Alves')
  expect(utilsMock.getWinner.mock.calls).toEqual([
    ['Murilo Alves', 'Camila Pereira'],
    ['Murilo Alves', 'Camila Pereira']
  ])

  // cleanup
  utilsMock.getWinner.mockReset()
})
