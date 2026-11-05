const { verifyAccessToken } = require("../../src/utils/generateToken");
const ApiError = require("../utils/ApiError");

const authenticationMiddleware = async (req, res, next) => {
    try {
        const authHeader = req.headers.authorization;

        if (!authHeader || !authHeader.startsWith("Bearer ")) {
            throw new ApiError(401, "Access token is required");
        }

        const accessToken = authHeader.split(" ")[1];

        const decoded = verifyAccessToken(accessToken);
        req.user = decoded;

        next();
    } catch (err) {
        if (err.name === "TokenExpiredError") {
            return next(new ApiError(401, "Access token expired"))
        }

        if (err.name === "JsonWebTokenError") {
            return next(new ApiError(401, "Invalid access token"))
        }

        next(err)
    }
}

module.exports = authenticationMiddleware