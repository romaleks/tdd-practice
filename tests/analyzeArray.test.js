import analyzeArray from '../functions/analyzeArray'

test('Default array', () => {
  expect(analyzeArray([1, 2, 3, 4, 5])).toEqual({ average: 3, min: 1, max: 5, length: 5 })
})

test('Reverse array', () => {
  expect(analyzeArray([5, 4, 3, 2, 1])).toEqual({ average: 3, min: 1, max: 5, length: 5 })
})

test('Empty array', () => {
  expect(analyzeArray([])).toEqual({ average: null, min: null, max: null, length: 0 })
})
