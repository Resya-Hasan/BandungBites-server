const ApiError = require("../utils/ApiError")
const { ZodError } = require("zod")

const ErrorHandler = (err, req, res, next) => {
    console.log(err)

    if (err instanceof ZodError) {
        const errors = {}

        err.issues.forEach(issue => {
            errors[issue.path.join(".")] = issue.message
        })

        return res.status(400).json(
            new ApiError(
                400,
                "Validation Error",
                errors
            )
        )
    }

    if (err instanceof ApiError) {
        return res.status(err.statusCode).json(err)
    }

    res.status(500).json(
        new ApiError(
            500,
            "Internal Server Error"
        )
    )
}

module.exports = ErrorHandler