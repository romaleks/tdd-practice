const capitalize = string => {
  if (!string) return ''
  return string[0].toUpperCase() + string.slice(1).toLowerCase()
}

export default capitalize
