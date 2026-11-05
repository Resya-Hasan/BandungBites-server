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

    static async createCategory(req, res, next) {
        try {
            const { name_id, name_en } = req.body;
            const result = await CategoryService.createCategory({ name_id, name_en });

            res.status(201).json(
                new ApiResponse(
                    201,
                    "Create category success",
                    result,
                )
            )
        } catch (err) {
            next(err);
        }
    }

    static async updateCategory(req, res, next) {
        try {
            const { id } = req.params;
            const { name_id, name_en } = req.body;
            const result = await CategoryService.updateCategory(id, { name_id, name_en });

            res.status(200).json(
                new ApiResponse(
                    200,
                    "Update category success",
                    result,
                )
            )
        } catch (err) {
            next(err);
        }
    }
}