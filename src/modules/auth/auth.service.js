const User = require('./auth.model');
const { generateAccessToken, generateRefreshToken } = require("../../utils/generateToken")
const ApiError = require("../../utils/ApiError")

const createToken = (userId, role) => {
    const payload = { id: userId, role }
    return {
        accessToken: generateAccessToken(payload),
        refreshToken: generateRefreshToken(payload)
    }
}

const createUser = async (data) => {

    const existingUser = await User.findOne({ email: data.email })

    if (existingUser) {
        throw new ApiError(
            400,
            "Email already exists"
        )
    }

    const user = await User.create(data);

    const { accessToken, refreshToken } = createToken(user._id, user.role)

    await User.findByIdAndUpdate(user._id, { refreshToken })

    return { user, accessToken, refreshToken }
}

module.exports = {
    createUser
}