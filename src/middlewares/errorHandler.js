const ApiError = require("../utils/ApiError")
const { ZodError } = require("zod")

const ErrorHandler = (err, req, res, next) => {
    let error = err

    if (err instanceof ZodError) {
        const errors = err.issues.map((issue) => ({
            field: issue.path.join("."),
            message: issue.message
        }))

        return res.status(400).json(
            new ApiError(
                400,
                "Validation Error",
                errors
            )
        )
    }

    if (error instanceof ApiError) {
        return res.status(error.statusCode).json(error.toJSON())
    }

    console.log(err)

    res.status(500).json(
        new ApiError(
            500,
            "Internal Server Error"
        )
    )
}

module.exports = ErrorHandler