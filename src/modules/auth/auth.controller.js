const { registerSchema } = require('./auth.validation');
const AuthService = require('./auth.service');
const ApiResponse = require("../../utils/ApiResponse")

module.exports = class AuthController {
    static async register(req, res, next) {
        try {
            const validatedData = registerSchema.parse(req.body);
            const result = await AuthService.createUser(validatedData);

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
}