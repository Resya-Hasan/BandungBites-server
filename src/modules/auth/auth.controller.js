const { registerSchema, loginSchema } = require('./auth.validation');
const AuthService = require('./auth.service');
const ApiResponse = require("../../utils/ApiResponse")

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

            res.status(200).json(
                new ApiResponse(
                    200,
                    result,
                    "Login success"
                )
            )
        } catch (err) {
            next(err);
        }
    }
}