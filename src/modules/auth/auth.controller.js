const { registerSchema, loginSchema, RefreshToken } = require('./auth.validation');
const AuthService = require('./auth.service');
const ApiResponse = require("../../utils/ApiResponse");
const ApiError = require('../../utils/ApiError');

module.exports = class AuthController {
    static async register(req, res, next) {
        try {
            const validatedData = registerSchema.parse(req.body);
            const result = await AuthService.CreateUser(validatedData);

            res.status(201).json(
                new ApiResponse(
                    201,
                    result,
                    "Register success"
                )
            );
        } catch (err) {
            next(err);
        }
    }

    static async login(req, res, next) {
        try {
            const validatedData = loginSchema.parse(req.body)
            const result = await AuthService.Login(validatedData)
            const { refreshToken, ...responseData } = result

            res.cookie("refreshToken", refreshToken, {
                httpOnly: true,
                secure: process.env.NODE_ENV === "production",
                sameSite: "lax",
                maxAge: 7 * 24 * 60 * 60 * 1000,
                path: "/api/v1/auth"
            })

            res.status(200).json(
                new ApiResponse(
                    200,
                    responseData,
                    "Login success"
                )
            )
        } catch (err) {
            next(err);
        }
    }

    static async refresh(req, res, next) {
        try {
            const refreshToken = req.cookies?.refreshToken;

            console.log(refreshToken, " <<<<<<")

            if (!refreshToken) {
                throw new ApiError(401, "Refresh token is required")
            }

            const result = await AuthService.RefreshToken(refreshToken);
            const { refreshToken: newRefreshToken, ...responseData } = result

            res.cookie("refreshToken", newRefreshToken, {
                httpOnly: true,
                secure: process.env.NODE_ENV === "production",
                sameSite: "lax",
                maxAge: 7 * 24 * 60 * 60 * 1000,
                path: "/api/v1/auth"
            })

            res.status(200).json(
                new ApiResponse(
                    200,
                    responseData,
                    "Token refreshed successfully"
                )
            );
        } catch (err) {
            next(err);
        }
    }
}