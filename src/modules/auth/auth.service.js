const User = require('./auth.model');
const { generateAccessToken, generateRefreshToken } = require("../../utils/generateToken")
const ApiError = require("../../utils/ApiError")
const { comparePassword } = require("../../utils/bcrypt")

const createToken = (userId, role) => {
    const payload = { id: userId, role }
    return {
        accessToken: generateAccessToken(payload),
        refreshToken: generateRefreshToken(payload)
    }
}

const CreateUser = async (data) => {

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

const Login = async (data) => {
    const existingUser = await User.findOne({ email: data.email }).select("+password")

    if (!existingUser) {
        throw new ApiError(
            401,
            "Email or password does not match"
        )
    }

    const validPassword = await comparePassword(data.password, existingUser.password)

    if (!validPassword) {
        throw new ApiError(
            401,
            "Email or password does not match"
        )
    }

    if (!existingUser.isActive) {
        throw new ApiError(
            403,
            "Your account is inactive. Please contact your administrator."
        )
    }

    const { accessToken, refreshToken } = createToken(existingUser._id, existingUser.role)

    await User.findByIdAndUpdate(existingUser._id, { refreshToken })

    const user = {
        _id: existingUser._id,
        name: existingUser.name,
        email: existingUser.email,
        role: existingUser.role,
        isActive: existingUser.isActive
    }

    return { user, accessToken, refreshToken }
}

const RefreshToken = async (refreshToken) => {
    const existingUser = await User.findOne({ refreshToken }).select("-password")

    if (!existingUser) {
        throw new ApiError(
            401,
            "Invalid refresh token"
        )
    }

    const { accessToken, refreshToken: newRefreshToken } = createToken(existingUser._id, existingUser.role)

    await User.findByIdAndUpdate(existingUser._id, { refreshToken: newRefreshToken })

    return { user: existingUser, accessToken, refreshToken: newRefreshToken }
}

module.exports = {
    CreateUser,
    Login,
    RefreshToken
}