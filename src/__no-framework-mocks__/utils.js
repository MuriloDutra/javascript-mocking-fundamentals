function fn(implementation = () => {}) {
  const mockFn = (...args) => {
    mockFn.mock.calls.push(args)
    return implementation(...args)
  }
  mockFn.mock = {calls: []}
  return mockFn
}

module.exports = {
  getWinner: fn((p1, p2) => p1)
}
