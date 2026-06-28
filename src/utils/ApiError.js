class ApiError extends Error {
    constructor(statusCode, message, errors = []) {
        super(message);

        this.statusCode = statusCode;
        this.success = false;
        this.errors = errors
    }

    toJSON() {
        return {
            statusCode: this.statusCode,
            success: this.success,
            message: this.message,
            errors: this.errors,
        };
    }
}

module.exports = ApiError