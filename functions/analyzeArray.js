const analyzeArray = nums => {
  if (!nums.length) return { average: null, min: null, max: null, length: 0 }

  const output = {}
  const sum = nums.reduce((prev, curr) => prev + curr, 0)
  output.min = Math.min(...nums)
  output.max = Math.max(...nums)
  output.length = nums.length
  output.average = sum / output.length

  return output
}

export default analyzeArray
