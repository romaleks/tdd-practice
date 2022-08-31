const calculator = {
  add(a, b) {
    return a + b
  },
  substruct(a, b) {
    return a - b
  },
  divide(a, b) {
    if (!b) throw new Error('Division by zero')
    return a / b
  },
  multiply(a, b) {
    return a * b
  },
}

export default calculator
