import capitalize from '../functions/capitalize'

test('LowerCase string', () => {
  expect(capitalize('hello, world!')).toBe('Hello, world!')
})

test('UpperCase string', () => {
  expect(capitalize('HELLO, WORLD!')).toBe('Hello, world!')
})

test('Capitalize string', () => {
  expect(capitalize('Hello, world!')).toBe('Hello, world!')
})

test('Empty string', () => {
  expect(capitalize('')).toBe('')
})
