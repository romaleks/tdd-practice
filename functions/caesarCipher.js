const caesarCipher = (string, shift) => {
  let output = ''

  for (let letter of string) {
    let outputLetter = letter

    if (/^[a-z]$/.test(letter)) {
      let code = letter.charCodeAt(0) + shift

      if (code < 97) code += 26
      if (code > 122) code -= 26

      outputLetter = String.fromCharCode(code)
    }

    if (/^[A-Z]$/.test(letter)) {
      let code = letter.charCodeAt(0) + shift

      if (code < 65) code += 26
      if (code > 90) code -= 26

      outputLetter = String.fromCharCode(code)
    }

    output += outputLetter
  }

  return output
}

export default caesarCipher
