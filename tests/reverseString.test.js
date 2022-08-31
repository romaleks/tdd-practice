import reverseString from '../functions/reverseString'

test('Common string', () => {
  expect(reverseString('Hello, World!')).toBe('!dlroW ,olleH')
})

test('Single letter', () => {
  expect(reverseString('A')).toBe('A')
})

test('Empty string', () => {
  expect(reverseString('')).toBe('')
})
