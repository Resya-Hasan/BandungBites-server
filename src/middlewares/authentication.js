
const { verifyAccessToken } = require("../../src/utils/generateToken");
const ApiError = require("../utils/ApiError");

const authenticationMiddleware = (req, res, next) => {
    try {
        const authHeader = req.headers.authorization;

        if (!authHeader) {
            throw new ApiError(401, "Access token is required");
        }

        const [scheme, accessToken] = authHeader.split(" ");

        if (scheme !== "Bearer" || !accessToken) {
            throw new ApiError(401, "Invalid authorization header");
        }

        const decoded = verifyAccessToken(accessToken);

        req.user = decoded;

        next();
    } catch (err) {
        if (err.name === "TokenExpiredError") {
            return next(new ApiError(401, "Access token expired"));
        }

        if (err.name === "JsonWebTokenError") {
            return next(new ApiError(401, "Invalid access token"));
        }

        next(err);
    }
};

module.exports = authenticationMiddleware;