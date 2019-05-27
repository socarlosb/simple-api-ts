const bcrypt = require('bcrypt')

const encode = async (value: string) => {
  return await bcrypt.hash(value, 10)
}
const compare = async (attempt: string, value: string) => {
  return await bcrypt.compare(attempt, value)
}

export { encode, compare }
