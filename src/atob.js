// Based on https://gist.github.com/stubbetje/229984

const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/='

export default (string) => {
  let result = ''
  let i = 0
  do {
    const b1 = characters.indexOf(string.charAt(i++))
    const b2 = characters.indexOf(string.charAt(i++))
    const b3 = characters.indexOf(string.charAt(i++))
    const b4 = characters.indexOf(string.charAt(i++))
    const a = ((b1 & 0x3F) << 2) | ((b2 >> 4) & 0x3)
    const b = ((b2 & 0xF) << 4) | ((b3 >> 2) & 0xF)
    const c = ((b3 & 0x3) << 6) | (b4 & 0x3F)
    result += String.fromCharCode(a) +
      (b ? String.fromCharCode(b) : '') +
      (c ? String.fromCharCode(c) : '')
  } while (i < string.length)
  return result
}
