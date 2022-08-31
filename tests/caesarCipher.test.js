import caesarCipher from '../functions/caesarCipher'

test('Wraps from a to z', () => {
  expect(caesarCipher('abcde', 1)).toBe('bcdef')
})

test('Keeps the same case', () => {
  expect(caesarCipher('Hello World', 5)).toBe('Mjqqt Btwqi')
})

test("Doesn't change punctuation", () => {
  expect(caesarCipher('Hello, World!', 5)).toBe('Mjqqt, Btwqi!')
})
