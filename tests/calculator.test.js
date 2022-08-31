import calculator from '../functions/calculator'

test('Add two numbers', () => {
  expect(calculator.add(1, 2)).toBe(3)
})

test('Substruct two numbers', () => {
  expect(calculator.substruct(2, 1)).toBe(1)
})

test('Divide two numbers', () => {
  expect(calculator.divide(4, 2)).toBe(2)
})

test('Divide by zero', () => {
  expect(() => calculator.divide(4, 0)).toThrow(Error)
})

test('Multiply two numbers', () => {
  expect(calculator.multiply(2, 2)).toBe(4)
})
