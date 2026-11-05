const CategoryService = require("./category.service")
const ApiResponse = require("../../utils/ApiResponse")

module.exports = class CategoryController {
    static async getAllCategories(req, res, next) {
        try {
            const result = await CategoryService.getAllCategories();

            res.status(200).json(
                new ApiResponse(
                    200,
                    "Get all categories success",
                    result,
                )
            )
        } catch (err) {
            next(err);
        }
    }
}