const { registerSchema, loginSchema, RefreshToken, deleteToken, getMe } = require('./auth.validation');
const AuthService = require('./auth.service');
const ApiResponse = require("../../utils/ApiResponse");
const ApiError = require('../../utils/ApiError');

module.exports = class AuthController {
    static async register(req, res, next) {
        try {
            const validatedData = registerSchema.parse(req.body);
            const result = await AuthService.CreateUser(validatedData);
            const { refreshToken, ...responseData } = result;

            res.cookie("refreshToken", refreshToken, {
                httpOnly: true,
                secure: process.env.NODE_ENV === "production",
                sameSite: "lax",
                maxAge: 7 * 24 * 60 * 60 * 1000,
                path: "/api/v1/auth"
            })

            res.status(201).json(
                new ApiResponse(
                    201,
                    "Register success",
                    result,
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
                    "Login success",
                    responseData,
                )
            )
        } catch (err) {
            next(err);
        }
    }

    static async refresh(req, res, next) {
        try {
            const refreshToken = req.cookies?.refreshToken;

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
                    "Token refreshed successfully",
                    responseData,
                )
            );
        } catch (err) {
            if (
                err instanceof ApiError &&
                (err.statusCode === 401 || err.statusCode === 403)
            ) {
                res.clearCookie("refreshToken", {
                    httpOnly: true,
                    scure: process.env.NODE_ENV === "production",
                    sameSite: "lax",
                    path: "/api/v1/auth"
                })
            }
            
            next(err);
        }
    }

    static async logout(req, res, next) {
        try {
            const refreshToken = req.cookies?.refreshToken;

            if (!refreshToken) {
                throw new ApiError(401, "Refresh token is required")
            }

            await AuthService.deleteToken(refreshToken)

            res.clearCookie("refreshToken", {
                httpOnly: true,
                scure: process.env.NODE_ENV === "production",
                sameSite: "lax",
                path: "/api/v1/auth"
            })

            res.status(200).json(
                new ApiResponse(
                    200,
                    "Logout successful"
                )
            )
        } catch (err) {
            next(err)
        }
    }

    static async getMe(req, res, next) {
        try {
            const { _id } = req.user;

            const user = await AuthService.getMe(_id);
            res.status(200).json(
                new ApiResponse(
                    200,
                    "User data retrieved successfully",
                    user
                )
            );
        } catch (err) {
            next(err)
        }
    }
}