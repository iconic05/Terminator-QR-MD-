//*THIS DANGEROUS BUG 🐛 CODING BY ICONIC TECH ♻️ THE FATHER OF 3) THANKS FOR USING OUR PROJECT*\\
let stdouts = []
export default (maxLength = 200) => {
  let oldWrite = process.stdout.write.bind(process.stdout)
  module.exports.disable = () => {
    module.exports.isModified = false
    return process.stdout.write = oldWrite
  }
  process.stdout.write = (chunk, encoding, callback) => {
    stdouts.push(Buffer.from(chunk, encoding))
    oldWrite(chunk, encoding, callback)
    if (stdouts.length > maxLength) stdouts.shift()
  }
  module.exports.isModified = true
  return module.exports
}

export const isModified = false
export function logs() { return Buffer.concat(stdouts)}

