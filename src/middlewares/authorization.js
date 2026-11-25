

const AuthorizationMiddleware = (requiredRole) => {
    return (req, res, next) => {
        if (!req.user) {
            return res.status(401).json({
                status: 401,
                message: "Unauthorized: Authentication required",
            });
        }
        
        const userRole = req.user.role;

        if (userRole !== requiredRole) {
            return res.status(403).json({
                status: 403,
                message: "Forbidden: You don't have permission to access this resource",
            });
        }

        next();
    };
}

module.exports = AuthorizationMiddleware;