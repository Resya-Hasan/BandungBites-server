const bcrypt = require('bcryptjs')

const hashPassword = async (password, salt) => {
    return password = await bcrypt.hash(password, salt)
}

const comparePassword = async (password, hashPassword) => {
    return await bcrypt.compare(password, hashPassword)
}

module.exports = {
    hashPassword,
    comparePassword
}